// import $ from "jquery";
// import { useEffect } from "react";
import sisters from "../images/sisters.png";
import dropTop from "../images/drop-top.jpg";
import movie1 from "../images/movie-1.png";
import movie2 from "../images/movie-2.jpg";
import movie3 from "../images/movie-3.jpg";
import teezRun from "../images/teez-runner.jpeg";
import wizard from "../images/wizard.png";
function TopProj() {
  return (
    <div className="upcoming py-5 mt-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-5 brdr-line">
            <h2 className="pb-2 h2-line">
              <span className="main-color">Top 10</span> Projects
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
          <div className="col-lg-3 col-md-6 col-sm-12 mt-4 top-proj-card">
            <div className="prod-card h-100 top-card">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fs-5 my-3 ps-3 m-name">Teez Runner</h3>
                <p className="main-color text-end mb-0 m-type">Action</p>
              </div>
              <img
                src={teezRun}
                alt="production house"
                className="img-fluid prod-img"
                width="300"
                height="300"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-4 top-proj-card">
            <div className="prod-card h-100 top-card">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fs-5 my-3 ps-3 m-name">Drop Top</h3>
                <p className="main-color text-end mb-0 m-type">Fiction</p>
              </div>
              <img
                src={dropTop}
                alt="production house"
                className="img-fluid prod-img"
                width="300"
                height="300"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-4 top-proj-card">
            <div className="prod-card h-100 top-card">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="fs-5 my-3 ps-3 m-name">New Movie</h3>
                <p className="main-color text-end mb-0 m-type">Comedy</p>
              </div>
              <img
                src={movie1}
                alt="production house"
                className="img-fluid prod-img"
                width="300"
                height="300"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-4 top-proj-card">
            <div className="prod-card h-100 top-card">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="fs-5 my-3 ps-3 m-name">Some Nmae</h3>
                <p className="main-color text-end mb-0 m-type">Fiction</p>
              </div>
              <img
                src={movie2}
                alt="production house"
                className="img-fluid prod-img"
                width="300"
                height="300"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-4 top-proj-card">
            <div className="prod-card h-100 top-card">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="fs-5 my-3 ps-3 m-name">Sukunna</h3>
                <p className="main-color text-end mb-0 m-type">Action</p>
              </div>
              <img
                src={movie3}
                alt="production house"
                className="img-fluid prod-img"
                width="300"
                height="300"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-4 top-proj-card">
            <div className="prod-card h-100 top-card">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="fs-5 my-3 ps-3 m-name">Sisters</h3>
                <p className="main-color text-end mb-0 m-type">Comedy</p>
              </div>
              <img
                src={sisters}
                alt="production house"
                className="img-fluid prod-img"
                width="300"
                height="300"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-4 top-proj-card">
            <div className="prod-card h-100 top-card">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="fs-5 my-3 ps-3 m-name">Wizard</h3>
                <p className="main-color text-end mb-0 m-type">Adventure</p>
              </div>
              <img
                src={wizard}
                alt="production house"
                className="img-fluid prod-img"
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProj;
