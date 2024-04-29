// import $ from "jquery";
// import { useEffect } from "react";
import sisters from "../images/sisters.png";
import dropTop from "../images/drop-top.jpg";
import prod1 from "../images/prod-1.png";
import prod2 from "../images/prod-2.png";
import movie1 from "../images/movie-1.png";
import movie2 from "../images/movie-2.jpg";
import movie3 from "../images/movie-3.jpg";
import movie4 from "../images/movie-4.png";
import movie5 from "../images/movie-5.jpg";
import teezRun from "../images/teez-runner.jpeg";
import wizard from "../images/wizard.png";
import mission from "../images/mission.jpeg";
import space from "../images/space.jpg";
function UpcomingProjects() {
  return (
    <div className="upcoming py-5 mt-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-5 brdr-line">
            <h2 className="pb-2 h2-line">
              <span className="main-color">Upcoming</span> Projects
            </h2>
          </div>
          <div className="col-md-7 text-end upcomg-drp">
            <div className="d-flex justify-content-end">
              <div className="custom-select ms-2">
                <select>
                  <option value="0">Genere</option>
                  <option value="1">All</option>
                  <option value="2">Action</option>
                  <option value="3">Fiction</option>
                  <option value="4">Romantic</option>
                  <option value="5">Horror</option>
                </select>
              </div>
              <div className="custom-select ms-2">
                <select>
                  <option value="0">Category</option>
                  <option value="1">All</option>
                  <option value="2">Action</option>
                  <option value="3">Fiction</option>
                  <option value="4">Romantic</option>
                  <option value="5">Horror</option>
                </select>
              </div>
              <div className="custom-select ms-2">
                <select>
                  <option value="0">Location</option>
                  <option value="1">All</option>
                  <option value="2">Pakistan</option>
                  <option value="3">India</option>
                  <option value="4">USA</option>
                  <option value="5">UK</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 upcmg-card">
            <div className="movie-card">
              <img
                src={sisters}
                alt="movie"
                className="img-fluid"
                width="330"
                height="400"
              />
              <div className="mt-4 ms-2">
                <h3 className="fs-4">Sisters</h3>
                <div className="d-flex align-items-center mt-2">
                  <img
                    src={prod1}
                    alt="production"
                    className="img-fluid prod"
                    width="32"
                    height="32"
                  />
                  <p className="mb-0 ms-2">EEC STUDIOS</p>
                </div>
                <div className="price-details d-flex align-items-center justify-content-between mt-3">
                  <p className="mb-0 fw-bold">$2.0</p>
                  <a
                    href="!#"
                    className="primary-button text-decoration-none text-white"
                  >
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 upcmg-card">
            <div className="movie-card">
              <img
                src={dropTop}
                alt="movie"
                className="img-fluid"
                width="330"
                height="400"
              />
              <div className="mt-4 ms-2">
                <h3 className="fs-4">Drop Top</h3>
                <div className="d-flex align-items-center mt-2">
                  <img
                    src={prod1}
                    alt="production"
                    className="img-fluid prod"
                    width="32"
                    height="32"
                  />
                  <p className="mb-0 ms-2">EEC STUDIOS</p>
                </div>
                <div className="price-details d-flex align-items-center justify-content-between mt-3">
                  <p className="mb-0 fw-bold">$2.2</p>
                  <a
                    href="!#"
                    className="primary-button text-decoration-none text-white"
                  >
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 upcmg-card">
            <div className="movie-card">
              <img
                src={teezRun}
                alt="movie"
                className="img-fluid"
                width="330"
                height="400"
              />
              <div className="mt-4 ms-2">
                <h3 className="fs-4">Teez Runner</h3>
                <div className="d-flex align-items-center mt-2">
                  <img
                    src={prod2}
                    alt="production"
                    className="img-fluid prod"
                    width="32"
                    height="32"
                  />
                  <p className="mb-0 ms-2">Sooper Glich</p>
                </div>
                <div className="price-details d-flex align-items-center justify-content-between mt-3">
                  <p className="mb-0 fw-bold">$2.2</p>
                  <a
                    href="!#"
                    className="primary-button text-decoration-none text-white"
                  >
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 upcmg-card">
            <div className="movie-card">
              <img
                src={wizard}
                alt="movie"
                className="img-fluid"
                width="330"
                height="400"
              />
              <div className="mt-4 ms-2">
                <h3 className="fs-4">Wizard</h3>
                <div className="d-flex align-items-center mt-2">
                  <img
                    src={prod1}
                    alt="production"
                    className="img-fluid prod"
                    width="32"
                    height="32"
                  />
                  <p className="mb-0 ms-2">EEC STUDIOS</p>
                </div>
                <div className="price-details d-flex align-items-center justify-content-between mt-3">
                  <p className="mb-0 fw-bold">$1.0</p>
                  <a
                    href="!#"
                    className="primary-button text-decoration-none text-white"
                  >
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 upcmg-card">
            <div className="movie-card">
              <img
                src={mission}
                alt="movie"
                className="img-fluid"
                width="330"
                height="400"
              />
              <div className="mt-4 ms-2">
                <h3 className="fs-4">Mission 009</h3>
                <div className="d-flex align-items-center mt-2">
                  <img
                    src={prod2}
                    alt="production"
                    className="img-fluid prod"
                    width="32"
                    height="32"
                  />
                  <p className="mb-0 ms-2">Sooper Glich</p>
                </div>
                <div className="price-details d-flex align-items-center justify-content-between mt-3">
                  <p className="mb-0 fw-bold">$3.0</p>
                  <a
                    href="!#"
                    className="primary-button text-decoration-none text-white"
                  >
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 upcmg-card">
            <div className="movie-card">
              <img
                src={movie1}
                alt="movie"
                className="img-fluid"
                width="330"
                height="400"
              />
              <div className="mt-4 ms-2">
                <h3 className="fs-4">New Movie</h3>
                <div className="d-flex align-items-center mt-2">
                  <img
                    src={prod1}
                    alt="production"
                    className="img-fluid prod"
                    width="32"
                    height="32"
                  />
                  <p className="mb-0 ms-2">EEC STUDIOS</p>
                </div>
                <div className="price-details d-flex align-items-center justify-content-between mt-3">
                  <p className="mb-0 fw-bold">$1.0</p>
                  <a
                    href="!#"
                    className="primary-button text-decoration-none text-white"
                  >
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 upcmg-card">
            <div className="movie-card">
              <img
                src={space}
                alt="movie"
                className="img-fluid"
                width="330"
                height="400"
              />
              <div className="mt-4 ms-2">
                <h3 className="fs-4">Space</h3>
                <div className="d-flex align-items-center mt-2">
                  <img
                    src={prod1}
                    alt="production"
                    className="img-fluid prod"
                    width="32"
                    height="32"
                  />
                  <p className="mb-0 ms-2">EEC STUDIOS</p>
                </div>
                <div className="price-details d-flex align-items-center justify-content-between mt-3">
                  <p className="mb-0 fw-bold">$1.5</p>
                  <a
                    href="!#"
                    className="primary-button text-decoration-none text-white"
                  >
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 upcmg-card">
            <div className="movie-card">
              <img
                src={movie2}
                alt="movie"
                className="img-fluid"
                width="330"
                height="400"
              />
              <div className="mt-4 ms-2">
                <h3 className="fs-4">Some Name</h3>
                <div className="d-flex align-items-center mt-2">
                  <img
                    src={prod1}
                    alt="production"
                    className="img-fluid prod"
                    width="32"
                    height="32"
                  />
                  <p className="mb-0 ms-2">EEC STUDIOS</p>
                </div>
                <div className="price-details d-flex align-items-center justify-content-between mt-3">
                  <p className="mb-0 fw-bold">$1.2</p>
                  <a
                    href="!#"
                    className="primary-button text-decoration-none text-white"
                  >
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 upcmg-card">
            <div className="movie-card">
              <img
                src={movie3}
                alt="movie"
                className="img-fluid"
                width="330"
                height="400"
              />
              <div className="mt-4 ms-2">
                <h3 className="fs-4">Sakunna</h3>
                <div className="d-flex align-items-center mt-2">
                  <img
                    src={prod1}
                    alt="production"
                    className="img-fluid prod"
                    width="32"
                    height="32"
                  />
                  <p className="mb-0 ms-2">EEC STUDIOS</p>
                </div>
                <div className="price-details d-flex align-items-center justify-content-between mt-3">
                  <p className="mb-0 fw-bold">$2.2</p>
                  <a
                    href="!#"
                    className="primary-button text-decoration-none text-white"
                  >
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 upcmg-card">
            <div className="movie-card">
              <img
                src={movie4}
                alt="movie"
                className="img-fluid"
                width="330"
                height="400"
              />
              <div className="mt-4 ms-2">
                <h3 className="fs-4">Shimvilcon</h3>
                <div className="d-flex align-items-center mt-2">
                  <img
                    src={prod2}
                    alt="production"
                    className="img-fluid prod"
                    width="32"
                    height="32"
                  />
                  <p className="mb-0 ms-2">Sooper Glich</p>
                </div>
                <div className="price-details d-flex align-items-center justify-content-between mt-3">
                  <p className="mb-0 fw-bold">$3.0</p>
                  <a
                    href="!#"
                    className="primary-button text-decoration-none text-white"
                  >
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 upcmg-card">
            <div className="movie-card">
              <img
                src={movie5}
                alt="movie"
                className="img-fluid"
                width="330"
                height="400"
              />
              <div className="mt-4 ms-2">
                <h3 className="fs-4">Ghako</h3>
                <div className="d-flex align-items-center mt-2">
                  <img
                    src={prod2}
                    alt="production"
                    className="img-fluid prod"
                    width="32"
                    height="32"
                  />
                  <p className="mb-0 ms-2">Sooper Glich</p>
                </div>
                <div className="price-details d-flex align-items-center justify-content-between mt-3">
                  <p className="mb-0 fw-bold">$1.0</p>
                  <a
                    href="!#"
                    className="primary-button text-decoration-none text-white"
                  >
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingProjects;
