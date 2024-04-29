import { useEffect } from "react";
import "../css/Style.css";
import faq from "../images/faq-image.png";
function Faqs() {
  useEffect(() => {
    const btns = document.querySelectorAll(".acc-btn");

    const accordion = (event) => {
      const btn = event.target.closest(".acc-btn");
      if (!btn) return; // Ensure we're getting the right element

      btn.classList.toggle("is-open");
      const content = btn.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };

    btns.forEach((el) => el.addEventListener("click", accordion));

    // Cleanup function to avoid memory leaks
    return () => {
      btns.forEach((el) => el.removeEventListener("click", accordion));
    };
  }, []);

  return (
    <div className="faqs pt-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7 brdr-line">
            <h2 className="pb-2 h2-line">
              <span className="main-color">Frequently</span> Asked Questions
            </h2>
          </div>
        </div>
        <div className="row align-items-center">
        <div className="col-md-7 mt-3">
            <div className="acc-container">
              <button className="acc-btn">
                <h3 className="fs-5">
                  Will movies be preLaunched in the market
                  <span className="chevron">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </h3>
              </button>

              <div className="acc-content">
                <p>depends on the creator</p>
              </div>

              <button className="acc-btn">
                <h3 className="fs-5">
                  Will movies be preLaunched in the market
                  <span className="chevron">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </h3>
              </button>
              <div className="acc-content">
                <p>depends on the creator</p>
              </div>

              <button className="acc-btn">
                <h3 className="fs-5">
                  Will movies be preLaunched in the market
                  <span className="chevron">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </h3>
              </button>
              <div className="acc-content">
                <p>depends on the creator</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-3 text-center">
              <img
                src={faq}
                alt="faq"
                className="img-fluid"
                width="400"
                height="350"
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
