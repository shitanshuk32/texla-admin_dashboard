import { Link } from "react-router-dom";
import "./menu.scss";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BusinessIcon from "@mui/icons-material/Business";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">General</span>
        <Link to="/" className="listItem active-hover">
          <img src="/dashboard.svg" alt="dashboard" />
          <span className="listItemTitle active">Dashboard</span>
        </Link>
        <Link to="companies" className="listItem">
          <BusinessIcon />
          <span className="listItemTitle not-active">Companies</span>
        </Link>
        <Link to="support" className="listItem not-active">
          <SupportAgentIcon />
          <span className="listItemTitle not-active">Support & Tickets</span>
        </Link>
        <Link to="userAdmin" className="listItem not-active">
          <AdminPanelSettingsIcon />
          <span className="listItemTitle">User Admin</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
