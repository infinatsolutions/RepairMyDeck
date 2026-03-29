/*
  reviews.js
  ----------------------------------------------------------------
  Reviews data source and optional live integration hook.

  Default mode = demo:
  - Keeps the page complete even on simple shared hosting.
  - Uses clearly labeled sample content (not real customer reviews).

  Optional live mode:
  - Implement fetchGoogleReviews() via a secure backend endpoint.
  - Never expose secret Google API credentials in frontend JavaScript.
*/

window.REPAIR_MY_DECK_REVIEWS = {
  mode: "demo", // change to "live" only after backend integration is ready

  demoSummary: {
    averageRating: 4.9,
    totalReviews: 27,
    sourceLabel: "Sample Demo Data"
  },

  // Sample content only. Replace with live data later.
  demoReviews: [
    {
      author: "Sample Reynoldsburg Homeowner",
      rating: 5,
      relativeTime: "Sample: 2 weeks ago",
      text: "Demo content: The team explained our repair options clearly and helped us prioritize safety first."
    },
    {
      author: "Sample Pickerington Homeowner",
      rating: 5,
      relativeTime: "Sample: 1 month ago",
      text: "Demo content: We selected a standardized deck design and the installation process felt organized and efficient."
    },
    {
      author: "Sample Canal Winchester Homeowner",
      rating: 4,
      relativeTime: "Sample: 3 weeks ago",
      text: "Demo content: Good communication, fair pricing discussion, and the finished deck stairs look great."
    }
  ],

  async fetchGoogleReviews() {
    /*
      OPTIONAL LIVE INTEGRATION GUIDE
      ----------------------------------------------------------------
      1) Create a secure backend endpoint (PHP/serverless) that calls
         Google Business Profile / Places APIs with your private key.
      2) Normalize API response to:
         {
           summary: {
             averageRating: number,
             totalReviews: number,
             sourceLabel: string
           },
           reviews: [
             { author: string, rating: number, relativeTime: string, text: string }
           ]
         }
      3) Change mode to "live" once verified.
      4) Keep fallback handling in script.js to protect UX if API fails.
    */

    // Example placeholder:
    // const res = await fetch('/reviews-proxy.php', { headers: { Accept: 'application/json' } });
    // if (!res.ok) throw new Error('Failed to fetch live reviews');
    // return await res.json();

    throw new Error("Live reviews are not configured.");
  }
};
