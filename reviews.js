/*
  reviews.js
  ----------------------------------------------------------------
  Public Google reviews section helper.
  This implementation avoids fake reviews and links visitors to the
  live Google reviews page for the most current rating details.
*/

window.REPAIR_MY_DECK_GOOGLE_REVIEWS = {
  businessName: "Repair My Deck",
  googleReviewsUrl: "https://www.google.com/search?q=repair+my+deck+google+reviews&oq=repair+my+deck+google+reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigATIHCAYQIRifBTIHCAcQIRifBdIBCDQxNjNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#",
  message: "Google controls live review content. Click below to read the latest verified reviews.",

  // Optional integration hook:
  // If you later add a secure server endpoint that fetches Google Business Profile
  // review summary data, set this object and script.js will render it.
  // liveSummary: { rating: 4.9, totalReviews: 50 }
};
