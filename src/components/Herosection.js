import "../css/Style.css";
import video from "../images/video1.mp4";
function Herosection() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1>Welcome To The Revolution</h1>
              <p className="mt-4">
                Changing the game for{" "}
                <span className="main-color">film Production</span> and{" "}
                <span className="main-color">Ownership</span>
              </p>
              <p className="mt-4">
                MovieMint liberates Filmmakers and fans through decentralized
                funding. <br />
                Our Blockchain platform seamlessly connects Independent Creators
                and Passionate Supporters. Filmmakers tokenize projects into NFT
                "movie shares" that fans can buy and tradel. This raises
                production funds while retaining full ownership and creative
                control while fans.
              </p>
            </div>
            <div className="col-md-5 text-center">
              <div className="text-center">
                <p className="fw-bold main-color text-center mb-0">
                  NFT CAPITAL RAISED
                </p>
                <div className="d-flex justify-content-center">
                  <p className="rounded bg-white p-2 cap-raise text-black d-flex fw-bold fs-6">
                    US $114.74012
                  </p>
                </div>
              </div>
              <div className="video-container">
                <video controls autoPlay loop className="video-bg rounded">
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className="row mt-4 cta">
            <div className="col-md-7">
              <p className="mb-0">
                The Next Great Cinematic era Starts NOW on the Blockchain.
              </p>
            </div>
            <div className="col-md-5">
              <div className="d-flex justify-content-center cta-btn">
                <div className="primary-button mx-2">
                  <a href={{}}>Explore Projects</a>
                </div>
                <div className="primary-button mx-2">
                  <a href={{}}>Become a Partner</a>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#fff"
                      className="bi bi-arrow-right-short ms-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
