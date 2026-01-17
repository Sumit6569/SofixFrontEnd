import { useEffect } from 'react';

const ReviewsSection = () => {
  useEffect(() => {
    const scriptId = 'elfsight-platform-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      id="reviews"
      className="container-section min-h-screen scroll-mt-24 py-16 px-4"
    >
      {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-black">
        What Our Clients Say
      </h2>
      <p className="text-center mt-2 text-gray-600">
        Real feedback from our customers on Google, Facebook, and more.
      </p> */}

      {/* Custom styles to adjust embedded widget */}
      <style>
        {`
          /* Hide internal headings or labels like "Testimonials" or "What Our Customers Say" */
          .elfsight-app [class*="reviews__title"] {
            display: none !important;
          }

          /* Make branding non-clickable but still visible */
          .elfsight-app [class*="badge"],
          .elfsight-app [href*="elfsight.com"] {
            pointer-events: none !important;
            opacity: 0.1 !important;
            filter: grayscale(100%) blur(1px);
            cursor: not-allowed;
            user-select: none;
          }
        `}
      </style>

      {/* Elfsight All-in-One Reviews Widget */}
      <div
        className="elfsight-app-eb13c309-3a55-4ffa-85db-8be4d59528e7"
        data-elfsight-app-lazy
      ></div>
<div className="mt-12 text-center">
  <a
    href="https://g.page/r/CVvlUtdxXXjwEAI/review"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
    aria-label="Leave a review for Sofixs on Google"
  >
    ⭐ Leave a Google Review
  </a>
</div>

    </section>
  );
};

export default ReviewsSection;
