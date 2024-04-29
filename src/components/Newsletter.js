import "../css/Style.css";
function Newsletter() {
  return (
    <div className="newsletter">
      <div className="gradient-bg"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto text-center">
            <h2 className="news-heading">
              <span className="main-color">Become</span> a Partner
            </h2>
            <p className="mb-4">Invest and manage all your NFTs at one place.</p>
            <div className="start-button d-flex justify-content-center">
              <a href={{}} className="fs-4">
                Get Started
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#fff"
                    class="bi bi-arrow-right-short ms-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
