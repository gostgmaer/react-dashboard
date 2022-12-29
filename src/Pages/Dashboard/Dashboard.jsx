import React, { Fragment } from "react";
import { Tiles } from "../../Components/Tiles/Tiles";
import { useGlobalContext } from "../../Context/Context";
import Loading from "../../Utils/Loading/Loading";
import "./Dashboard.scss";
import Table from "./Table";


const Dashboard = () => {
  const {isloadin} = useGlobalContext()
  return (
    <Fragment>
    {isloadin?<Loading></Loading>:  <div className="container">
        <div className="elements">
          <div className="Dashboard">
            <div className="Heading">
              <div>Dashboard</div>
            </div>
            <div className="tiles">
              {Array.from(Array(4).keys()).map((tile) => (
                <Tiles key={tile}></Tiles>
              ))}
            </div>
            <div className="charts"></div>
            <div className="dataTable">
              <Table></Table>
            </div>
            <div className="postLists"></div>
          </div>
        </div>
      </div>}
    </Fragment>
  );
};

export default Dashboard;
