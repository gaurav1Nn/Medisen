import "../../App.css";
import "./footer.css"
import * as React from "react";
import { social } from "./data";

const Footer = () => {
  return (
    <>
      <div
         id="contact"
        style={{
          width: "100%",
          height: "28vh",
          background: "black",
          //boxShadow: "0 -10px 30px rgb(248, 137, 39)",
          marginTop: "20px",
        }}
      >
        <div>
          <div
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            <br />
            <h4
              style={{
                color: "white",
                fontSize: "13px",
                fontWeight: "400",
              }}
            >
              Copyright ©2024. All Rights Reserved.
            </h4>
          </div>
          <div
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            <h4
              style={{
                color: "white",
                fontSize: "36px",
                fontWeight: "700",
              }}
            >
              Let’s be Social!
            </h4>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              paddingTop: "15px",
            }}
          >
            {social.map((item) => {
              const { id, url, icon } = item;
              return (
                <>
                  <div key={id}>
                    <a href={url} target="_blank">
                      <p style={{ color: "#fc8621", fontSize: "20px" }} >{icon}</p>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
