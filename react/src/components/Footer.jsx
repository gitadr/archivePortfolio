import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="footerTwitter">
              <a href="#">
                <img
                  className="footerImage"
                  src={require("../images/icons/twitterLogo.svg")}
                  alt="instagram"
                  width="52"
                  height="52"
                />
              </a>
              <div className="tweet">
                <h4>@aaroot</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum non pretium massa. Integer pellentesque in magna ut
                  laoreet. Aenean luctus tristique lacus in rutrum.
                </p>
              </div>
            </div>
            <div className="footerInstagram">
              <ul>
                <li>
                  <a href="#">
                    <img
                      className="footerImage"
                      src={require("../images/icons/instagramLogo.svg")}
                      alt="instagram"
                      width="52"
                      height="52"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="footerImage"
                      src={require("../images/image1.png")}
                      alt="image1"
                      width="80"
                      height="80"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="footerImage"
                      src={require("../images/image2.png")}
                      alt="image2"
                      width="80"
                      height="80"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="footerImage"
                      src={require("../images/image3.png")}
                      alt="image3"
                      width="80"
                      height="80"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="footerImage"
                      src={require("../images/image4.png")}
                      alt="image4"
                      width="80"
                      height="80"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="footerImage"
                      src={require("../images/image5.png")}
                      alt="image5"
                      width="80"
                      height="80"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footerKeyline" />
            <div className="footerColophon">
              <p>
                This site is a work-in-progress. The hosting is provided by{" "}
                <a href="http://www.digitalocean.com/" target="_blank">
                  Digital Ocean
                </a>{" "}
                while the icons have been created by the clever people at{" "}
                <a href="http://www.parakeet.co/" target="_blank">
                  Parakeet
                </a>. Type has been set in{" "}
                <a href="http://www.google.co/" target="_blank">
                  Avenir Next
                </a>, served by{" "}
                <a href="http://www.fonts.com/" target="_blank">
                  fonts.com
                </a>. If there is anything else you would like to know you can
                message me at{" "}
                <a href="mailto:mail@aaronroot.net">mail@aaronroot.net</a>
              </p>
            </div>
            <div className="footerCopyright">
              <div>
                <p>
                  Made with ♥ by Aaron Root <br /> © Copyright 2018
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
