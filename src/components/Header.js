import React, { useEffect } from "react";
import "../css/Nav.css";
import moviemint from "../images/moviemint-logo.png";
import { Link } from "react-router-dom";

function Header({ wallet, connectWallet  }) {
  useEffect(() => {
    const toggleButton = document.getElementById("toggleButton");
    const menu = document.getElementById("MainMenu");
    const toggleIcon = document.getElementById("toggle-icon");
    const xSign = document.getElementById("xSign");

    const toggleMenu = () => {
      menu.classList.toggle("active"); // Toggle menu visibility
      if (menu.classList.contains("active")) {
        xSign.style.display = "block"; // Show 'X' icon
        toggleIcon.style.display = "none"; // Hide menu icon
      } else {
        xSign.style.display = "none"; // Hide 'X' icon
        toggleIcon.style.display = "block"; // Show menu icon
      }
    };

    toggleButton.addEventListener("click", toggleMenu); // Attach event listener

    // Clean up event listener to avoid memory leaks
    return () => {
      toggleButton.removeEventListener("click", toggleMenu);
    };
  }, []); 
//  useEffect (() => {
//     wallet.address
//  }, []);
  return (
    <>
      <nav className="navbar-expand-lg head-area stickyElement py-4">
        <div className="container d-flex nav-cont">
          <div className="logo">
            <Link to="/">
              <img
                src={moviemint}
                alt="Moviemint Logo"
                width="80"
                height="80"
              />
            </Link>
          </div>
          <button
            id="toggleButton"
            className="navbar-toggler"
            type="button"
            aria-controls="MainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              id="toggle-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#fff"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <svg
              id="xSign"
              style={{ display: "none" }}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#fff"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 0 .708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>

          <div className="navbar-collapse" id="MainMenu">
            <ul className="navbar-nav mb-2 mb-lg-0 mx-0 align-items-center me-3">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item seperator">|</li>
              <li className="nav-item">
                <Link className="nav-link" to="/overview">
                  Overview
                </Link>
              </li>
              <li className="nav-item seperator">|</li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="{{ route('home') }}">
                  About Us
                </a>
              </li>
              <li className="nav-item seperator">|</li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="{{ route('home') }}">
                  FAQ
                </a>
              </li>
              <li className="nav-item seperator">|</li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="{{ route('home') }}">
                  Marketplace
                </a>
              </li>
            </ul>
            <div className="social-btn">
              <div className="login-btn">
                <a href={{}}>Login</a>
              </div>
              <div className="login-btn">
                <a href={{}}>Signup</a>
              </div>
              
                {typeof window.ethereum !== "undefined" ? (
                  wallet?.address ? (
                    <p className="mb-0 pt-2">
                      {wallet?.address?.slice(0, 8)}...
                      {wallet?.address?.slice(-8)}
                    </p>
                  ) : (
                    <button className="connect-btn text-white" onClick={connectWallet}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-link-45deg me-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                      </span>
                      Connect
                    </button>
                  )
                ) : (
                  <a
              target="_blank"
              href="https://metamask.io/download/"
              className="text-black bg-warning py-2 px-3 fw-bold rounded-5"
              rel="noreferrer"
            >
              Install Metamask
            </a>
                )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
