<?php
/**
 * contact-handler.php
 *
 * Optional lightweight handler for shared hosting.
 * Works with HTML form on index.html when PHP mail() is available.
 *
 * Setup:
 * - Update $toEmail with your destination inbox.
 * - Ensure your host supports mail() and sender domain alignment.
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed.']);
    exit;
}

function clean_input($value)
{
    return trim(strip_tags((string)$value));
}

$name = clean_input($_POST['name'] ?? '');
$phone = clean_input($_POST['phone'] ?? '');
$email = clean_input($_POST['email'] ?? '');
$city = clean_input($_POST['city'] ?? '');
$projectType = clean_input($_POST['projectType'] ?? '');
$message = trim((string)($_POST['message'] ?? ''));
$honeypot = clean_input($_POST['companyWebsite'] ?? '');

if ($honeypot !== '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Spam detected.']);
    exit;
}

if (strlen($name) < 2 || strlen($phone) < 7 || strlen($city) < 2 || strlen($projectType) < 2 || strlen($message) < 10) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Please complete all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

// TODO: Replace this with your real receiving inbox.
$toEmail = 'info@repairmydeck.com';
$subject = 'New Quote Request - Repair My Deck Website';

$body = implode("\n", [
    'New quote request submitted from Repair My Deck website:',
    '',
    'Name: ' . $name,
    'Phone: ' . $phone,
    'Email: ' . $email,
    'City: ' . $city,
    'Project Type: ' . $projectType,
    '',
    'Message:',
    $message,
    '',
    'Submitted: ' . gmdate('Y-m-d H:i:s') . ' UTC'
]);

$headers = [
    'From: Repair My Deck Website <no-reply@repairmydeck.com>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8'
];

$sent = @mail($toEmail, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['ok' => true, 'message' => 'Request submitted successfully.']);
    exit;
}

http_response_code(500);
echo json_encode([
    'ok' => false,
    'message' => 'Server mail is not configured. Use Formspree or SMTP-enabled handler.'
]);
