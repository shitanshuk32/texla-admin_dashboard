import PieChartBox from "../../components/piechart/PieChartBox";
import DataTable from "../../components/table/DataTable";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="heading">
        <span>Client Management</span>
      </div>
      <div className="topics">
        <div className="topic-dashboard">Dashboard</div>
        <div className="topic-client">Client Details</div>
      </div>
      <div className="content">
        <div className="top-content">
          <div className="div1">
            <p className="title">Key Performance Indicator</p>
            <div className="data-container">
              <div className="data">
                <div className="data1">
                  <p>Client Retention Rate</p>
                  <span>55%</span>
                </div>
                <div className="data2">
                  <p>Client Satisfaction</p>
                  <span>55%</span>
                </div>
                <div className="data3">
                  <p>Revenue Generated</p>
                  <span>55%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="div2">
            <p className="title">Key Performance Indicator</p>
            <div className="data-container">
              <div className="data">
                <div className="data1">
                  <p>Total</p>
                  <span>55%</span>
                </div>
                <div className="data2">
                  <p>Active</p>
                  <span>55%</span>
                </div>
                <div className="data3">
                  <p>New</p>
                  <span>55%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="div3">
            <p className="title">Active Users Base</p>
            <div className="data-container">
              <div className="data">
                <div className="data1">
                  <div className="data1A">
                    <div className="circleA"></div>
                    <span>89%</span>
                    <p>App User</p>
                  </div>
                  <div className="data1B">
                    <div className="circleB"></div>
                    <span>11%</span>
                    <p>Web User</p>
                  </div>
                </div>
                <div className="data2">
                  <div className="rect1"></div>
                  <div className="rect2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-content">
          <div className="table-container">
            <p className="title">Onboarded Companies</p>
            <div className="wrapper">
              <div className="dropdown">
                <p>All</p>
                <img src="/chevron_down.svg" alt="" />
              </div>
              <div className="searchArea">
                <img src="/search.svg" alt="search_icon" />
                <input type="text" className="search" placeholder="Search.." />
              </div>
            </div>
            <div className="data-table">
              <DataTable />
            </div>
          </div>
          <div className="chart-container">
            <PieChartBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
