import React from "react";

export default function Hero() {
  return (
    <>
      <section
        className="hero"
        style={{ display: "flex", gap: 20, alignItems: "flex-start" }}
      >
        {/* Preserve the previous content area (kept intentionally minimal/transparent) */}
        <div style={{ flex: 1 }} />

        <div
          className="hero-visual"
          style={{
            width: 480,
            height: 320,
            borderRadius: 8,
            background: "transparent",
          }}
          aria-hidden="true"
        />
      </section>

      {/* Create Course Button Section */}
      <div className="create-course-section">
        <button className="create-course-btn">
          <span className="btn-text">Create Course</span>
        </button>
      </div>

      <style>{`
        .create-course-section {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 120px 20px 100px;
          margin: 0 auto;
          max-width: 1200px;
        }

        .create-course-btn {
          position: relative;
          padding: 20px 56px;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: -0.022em;
          color: #ffffff;
          background: #1E88E5;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          outline: none;
          overflow: visible;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
          box-shadow:
            0 4px 16px rgba(30, 136, 229, 0.3),
            0 2px 8px rgba(30, 136, 229, 0.2);
        }

        .btn-text {
          position: relative;
          z-index: 2;
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Animated gradient halo effect dispersed around button */
        .create-course-btn::before {
          content: '';
          position: absolute;
          inset: -16px;
          border-radius: 32px;
          background: linear-gradient(
            45deg,
            #1E88E5 0%,
            #9C27B0 25%,
            #E91E63 50%,
            #00BCD4 75%,
            #1E88E5 100%
          );
          background-size: 300% 300%;
          opacity: 0.4;
          filter: blur(16px);
          z-index: -1;
          animation: neonMist 8s ease-in-out infinite;
        }

        /* Mobile: continuous animation */
        @media (max-width: 1023px) {
          .create-course-btn::before {
            animation: neonMist 8s ease-in-out infinite;
          }
        }

        /* Desktop: hover/focus animation */
        @media (min-width: 1024px) {
          .create-course-btn:hover {
            transform: translateY(-3px);
            box-shadow:
              0 12px 32px rgba(30, 136, 229, 0.4),
              0 6px 16px rgba(30, 136, 229, 0.3);
          }

          .create-course-btn:hover::before {
            animation: neonMist 5s ease-in-out infinite, neonPulse 2s ease-in-out infinite;
            opacity: 0.8;
            filter: blur(20px);
          }

          .create-course-btn:hover .btn-text {
            transform: scale(1.03);
          }

          .create-course-btn:active {
            transform: translateY(-1px);
          }

          .create-course-btn:focus-visible::before {
            animation: neonMist 5s ease-in-out infinite, neonPulse 2s ease-in-out infinite;
            opacity: 0.8;
            filter: blur(20px);
          }

          .create-course-btn::before {
            opacity: 0.4;
          }
        }

        @keyframes neonMist {
          0%, 100% {
            background-position: 0% 50%;
            transform: scale(1);
          }
          25% {
            background-position: 100% 0%;
            transform: scale(1.05);
          }
          50% {
            background-position: 100% 100%;
            transform: scale(1);
          }
          75% {
            background-position: 0% 100%;
            transform: scale(1.05);
          }
        }

        @keyframes neonPulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        /* Focus state for accessibility */
        .create-course-btn:focus-visible {
          outline: 2px solid #007aff;
          outline-offset: 4px;
        }
      `}</style>
    </>
  );
}
