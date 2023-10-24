import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>TEXLA CULTURE</span>
      </div>
      <div className="searchArea">
        <img src="/search.svg" alt="search_icon" />
        <input type="text" className="search" placeholder="Search.." />
      </div>
      <div className="icons">
        <img src="/flag.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>8</span>
        </div>
        <img src="/contacts.svg" alt="" className="icon" />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
