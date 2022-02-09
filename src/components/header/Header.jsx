import "./header.css";
import backgroundImg from "../../assets/dave-hoefler-lsoogGC_5dg-unsplash.jpg";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={backgroundImg} alt="background" />
    </div>
  );
}
