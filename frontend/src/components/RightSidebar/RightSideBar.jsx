import "./RightSideBar.css";
import assets from "../../assets/assets";

const RightSideBar = () => {
  return (
    <div className="rs">

      {/* Profile Section */}
      <div className="rs-profile">
        <img src={assets.profile_img} alt="profile" />
        <h3>
          Richard Sanford
          <img src={assets.green_dot} alt="online" />
        </h3>
        <p>Hey, there! I am Richard Sanford using chat app.</p>
      </div>

      <hr />

      {/* Media Section */}
      <div className="rs-media">
        <p className="title">Media</p>
        <div className="media-grid">
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>

      {/* Logout */}
      <button className="logout-btn">Logout</button>

    </div>
  );
};

export default RightSideBar;
