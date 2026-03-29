<?php
/**
 * contact-handler.php
 *
 * Optional lightweight form handler for shared hosting.
 * Works with the form in index.html when mail() is enabled.
 *
 * Setup notes:
 * 1) Update $toEmail to your real inbox.
 * 2) Ensure your host allows mail() sending.
 * 3) For production, consider adding SMTP or a form service if delivery is inconsistent.
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed.']);
    exit;
}

function clean_input($value) {
    return trim(strip_tags((string)$value));
}

$name = clean_input($_POST['name'] ?? '');
$phone = clean_input($_POST['phone'] ?? '');
$email = clean_input($_POST['email'] ?? '');
$city = clean_input($_POST['city'] ?? '');
$projectType = clean_input($_POST['projectType'] ?? '');
$message = trim((string)($_POST['message'] ?? ''));
$honeypot = clean_input($_POST['companyWebsite'] ?? '');

if (!empty($honeypot)) {
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
    echo json_encode(['ok' => false, 'message' => 'Please provide a valid email address.']);
    exit;
}

// TODO: Replace with your real receiving email address.
$toEmail = 'info@repairmydeck.com';
$subject = 'New Quote Request - Repair My Deck Website';

$bodyLines = [
    'New website contact submission:',
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
];

$body = implode("\n", $bodyLines);

$headers = [
    'From: Repair My Deck Website <no-reply@repairmydeck.com>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8'
];

$sent = @mail($toEmail, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['ok' => true, 'message' => 'Form submitted successfully.']);
    exit;
}

http_response_code(500);
echo json_encode([
    'ok' => false,
    'message' => 'Mail could not be sent on this server. Consider using Formspree or SMTP.'
]);
