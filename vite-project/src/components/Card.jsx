import Profile from "../assets/Profile.png";
import Icon from "../assets/Icon.png";
import Linkedin from "../assets/linkedin.png";
import Facebook from "../assets/FacebookIcon.png";
import GitHub from "../assets/GitHubIcon.png";
import Twitter from "../assets/TwitterIcon.png";
import Instagram from "../assets/InstagramIcon.png";

export default function Card() {
  return (
    <div className="center">
      <div className="card bg-dark text-light" style={{ width: "400px" }}>
        <img
          src={Profile}
          style={{ maxHeight: "300px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <div className="flex">
            <div className="row">
              <div className="col-6">
                <a href="#" className="btn btn-light flex">
                  <img src={Icon} style={{ margin: "9px" }} alt="" />
                  <p style={{ margin: "9px" }}>Email</p>
                </a>
              </div>
              <div className="col-6">
                <a href="#" className="btn btn-primary flex">
                  <img src={Linkedin} style={{ margin: "9px" }} alt="" />{" "}
                  <p style={{ margin: "9px" }}>Linkedin</p>
                </a>
              </div>
            </div>
          </div>
          <h5 className="card-title cardTitle">Laura Smith</h5>
          <h5 className="cardSubTitle">Front-end Developer</h5>
          <h5 className="cardSubTitle2">www.laurasmith.io</h5>
          <b>
            <p className="card-text">About:</p>
          </b>
          <p className="card-text">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <b>
            <p className="card-text">Interests:</p>
          </b>
          <p className="card-text">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
        <div
          style={{ background: "#161619", width: "100% !important" }}
          className="card-footer center"
        >
          <div className="row">
            <div className="col-3">
              <img src={Facebook} alt="" />
            </div>
            <div className="col-3">
              <img src={Instagram} alt="" />
            </div>
            <div className="col-3">
              <img src={Twitter} alt="" />
            </div>
            <div className="col-3">
              <img src={GitHub} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
