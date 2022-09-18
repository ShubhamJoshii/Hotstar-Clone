import React from "react";
import GoogleDark from "./Image/GetinGoogle.png"
import Apple from "./Image/AppleAppDark.png"
import Facebook from "./Image/FacebookDark.png"
import Twitter from "./Image/TwiterDark.png"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-Half-First">
        <ol>
          <li>About Disney+ Hotstar</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>FAQ</li>
          <li>Feedback</li>
          <li>Careers</li>
        </ol>
        <p>
          © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and  all related programming visuals and elements are the property of, Home Box Office,Inc. All rights reserved.
        </p>
      </div>
      <div className="footer-half-second">
      <p>Connect with us</p>
      {/* <h2>f</h2> */}
      <div className="Social">
        <img src={Facebook} height="35px" alt="" />
        <img src={Twitter} height="35px" alt="" />
      </div>
        
      </div>
      <div className="footer-half-third">
            <p>Disney+ Hotstar App</p>
            <div className="AppDownload">
                <img src={GoogleDark}  height="45px" alt="GoogleDark" />
                <img src={Apple} height="45px" alt="GoogleDark" />
                {/* <GoogleDark /> */}
            </div>
      </div>
    </div>
  );
};

export default Footer;
