import "./tobar.css";
import { Link } from "react-router-dom";
import displayPicture from '../../assets/fabio-scaletta-cYSRncVxE44-unsplash.jpg'
function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to ="/" className="topListItem">HOME</Link>
          <Link to ="about" className="topListItem">ABOUT</Link>
          <Link to="contact" className="topListItem">CONTACT</Link>
          <Link to="write"  className="topListItem">WRITE</Link>
          <Link to= "login"  className="topListItem">LOGIN</Link>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg"  src={displayPicture}></img>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
