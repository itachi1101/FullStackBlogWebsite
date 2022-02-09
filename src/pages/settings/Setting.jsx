import SideBar from "../../components/sidebar/SideBar";
import "./setting.css";
export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingUpdateTitle">Delete Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img></img>
            <label htmlFor="fileInput">
              <i className="settingPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }}></input>
          </div>
          <label>UserName</label>
          <input type="text" placeholder="Aviral" />
          <label>Email</label>
          <input type="email" placeholder="aviral@gmail.com" />
          <label>Password</label>
          <input type="password"/>
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
