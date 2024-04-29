import React, { useEffect } from "react";
import $ from "jquery";
import mission from "../images/mission.jpeg";
import movie4 from "../images/movie-4.png";
import space from "../images/space.jpg";
import wizard from '../images/wizard.png';
import ghako from '../images/movie-5.jpg';
function RecentProj() {
  useEffect(() => {
    $(".carousel .carousel-item").each(function () {
      var minPerSlide = 4;
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(":first");
      }
      next.children(":first-child").clone().appendTo($(this));

      for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(":first");
        }

        next.children(":first-child").clone().appendTo($(this));
      }
    });
  }, []); // Run once when the component is mounted

  return (
    <div className="recent">
      <div className="container">
        <div className="row">
          <div className="col-md-5 brdr-line">
            <h2 className="pb-2 h2-line">
              <span className="main-color">Recent</span> Projects
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              id="myCarousel"
              className="carousel slide container"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner w-100">
                <div className="carousel-item active">
                  <div className="col-md-3 col-sm-6 mt-3 recent-slide">
                    <div className="me-3 recent-card">
                      <img
                        alt="recent proj"
                        className="img-fluid"
                        src={movie4}
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-3 col-sm-6 mt-3 recent-slide">
                    <div className="me-3 recent-card">
                      <img
                        alt="recnt"
                        className="img-fluid"
                        src={space}
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-3 col-sm-6 mt-3 recent-slide">
                    <div className="me-3 recent-card">
                      <img
                        alt="recent"
                        className="img-fluid"
                        src={mission}
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-3 col-sm-6 mt-3 recent-slide">
                    <div className="me-3 recent-card">
                      <img
                        alt="recent"
                        className="img-fluid"
                        src={ghako}
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-3 col-sm-6 mt-3 recent-slide">
                    <div className="me-3 recent-card">
                      <img
                        alt="recent"
                        className="img-fluid"
                        src={wizard}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev prev-btn"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next nxt-btn"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProj;
