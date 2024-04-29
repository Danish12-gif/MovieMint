import nobel from "../images/nobel.jpg";
import '../css/Style.css';
import abc from "../images/abc.jpg";
import whisper from "../images/whispers.png";
import prod1 from "../images/prod-1.png";
import prod3 from "../images/prod-3.png";
import prod7 from "../images/prod-7.png";

function LatestProj() {
  return (
    <div className="latest py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 brdr-line">
            <h2 className="pb-2 h2-line">
              <span className="main-color">Latest</span> Projects
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card mb-3">
              <img
                className="card-img-top"
                src={nobel}
                height="400"
                width="350"
                alt="Card cap"
              />
              <div className="product-detail">
                <h3 className="card-title text-center fs-4 pb-3 text-white">
                  By-Nobel
                </h3>
                <div>
                    <img src={prod7} alt="production" className="img-fluid prod-h" width="50" height="50" />
                    <p className="mb-5 mt-3 text-white fs-6">Waleed</p>
                    <a href="!#" className="text-decoration-none primary-button text-white">See Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card mb-3">
              <img
                className="card-img-top"
                src={abc}
                height="400"
                width="350"
                alt="Card cap"
              />
              <div className="product-detail">
                <h3 className="card-title text-center fs-4 pb-3 text-white">
                  ABC
                </h3>
                <div>
                    <img src={prod1} alt="production" className="img-fluid prod-h" width="50" height="50" />
                    <p className="mb-5 mt-3 text-white fs-6">EEC Studios</p>
                    <a href="!#" className="text-decoration-none primary-button text-white">See Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card mb-3">
              <img
                className="card-img-top"
                src={whisper}
                height="400"
                width="350"
                alt="Card cap"
              />
              <div className="product-detail">
                <h3 className="card-title text-center fs-4 pb-3 text-white">
                  Whispers of Heart
                </h3>
                <div>
                    <img src={prod3} alt="production" className="img-fluid prod-h" width="50" height="50" />
                    <p className="mb-5 mt-3 text-white fs-6">Eastern Productions</p>
                    <a href="!#" className="text-decoration-none primary-button text-white">See Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestProj;
