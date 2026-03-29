/*
  reviews.js
  -------------------------------------------------------------
  This file powers the Reviews section with a graceful fallback.

  Default behavior:
  - Uses DEMO review data so the site looks complete on any static host.

  Optional future behavior (Google Places integration):
  - Replace fetchGoogleReviews() with an API call to your backend endpoint.
  - Do NOT expose private Google API keys in frontend JavaScript.
  - Shared hosting often cannot safely store secret keys in client code.
*/

window.REPAIR_MY_DECK_REVIEWS = {
  mode: "demo", // Keep as "demo" until secure live integration is configured.

  demoSummary: {
    averageRating: 4.9,
    totalReviews: 27,
    sourceLabel: "Sample Data (Demo Content)"
  },

  // Clearly marked sample/demo reviews. These are not claimed to be real customer reviews.
  demoReviews: [
    {
      author: "Sample Homeowner A",
      rating: 5,
      relativeTime: "Sample: 2 weeks ago",
      text: "Demo review content placeholder: The crew explained repair options clearly and kept the project timeline on track."
    },
    {
      author: "Sample Homeowner B",
      rating: 5,
      relativeTime: "Sample: 1 month ago",
      text: "Demo review content placeholder: We chose a standardized design package and the process felt organized and affordable."
    },
    {
      author: "Sample Homeowner C",
      rating: 4,
      relativeTime: "Sample: 3 weeks ago",
      text: "Demo review content placeholder: Communication was consistent and the finished deck stairs look much safer."
    }
  ],

  async fetchGoogleReviews() {
    /*
      OPTIONAL INTEGRATION HOOK:
      -----------------------------------------------------------
      1) Create a secure backend endpoint (PHP or serverless) that calls
         the Google Business Profile / Places API with your private key.
      2) Return normalized JSON in this shape:
         {
           summary: { averageRating: number, totalReviews: number, sourceLabel: string },
           reviews: [ { author, rating, relativeTime, text } ]
         }
      3) Switch mode from "demo" to "live" below.
      4) Keep frontend fallback to demo data in case API fails.
    */

    // Example stub for future use:
    // const response = await fetch('/reviews-proxy.php');
    // if (!response.ok) throw new Error('Review fetch failed');
    // return await response.json();

    throw new Error("Live reviews are not configured yet.");
  }
};
