import React, { useEffect, useState } from "react";
import {
  MdArrowBack,
  MdArrowDropDown,
  MdArrowForward,
  MdTableView,
} from "react-icons/md";
import { Data } from "../../Assets/staticData/Data";
import  moment  from 'moment/moment';

const Table = () => {
  const [perpage, setPerpage] = useState(false);
  const [showItem, setshowItem] = useState(20);

  useEffect(() => {
    
  console.log(showItem,perpage);
    
  }, [showItem,perpage]);
  const TableBlock = () => {
    return (
      <table className="table customTable">
        <thead className="thead">
          <tr>
            <th>name</th>
            <th>depertment</th>
            <th>company</th>
            <th>gender</th>
            <th>Age</th>
            <th>emp Date</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>
          {Data.personal.slice(0,showItem).map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.depertment}</td>
                <td>{item.company}</td>
                <td>{item.gender}</td>
                <td>{moment().diff(item.dbo, 'years')}</td>
                <td>{moment(item.startDate).format('YYYY/MM/DD')}</td>
                <td>{item.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  const TableIndex = () => {
    return (
      <div className="index">
        <div className="left">
          <div>
            <p>
              showing <span>1 to {showItem} </span> of <span>{Data.personal.length}</span> entres
            </p>{" "}
          </div>
        </div>
        <div className="right">
          <div className="tablepageindex">
            <ul>
              <li>
                <MdArrowBack></MdArrowBack>
              </li>
              {Array.from(Array(5).keys()).map((item) => (
                <li key={item}>{item + 1}</li>
              ))}
              <li>
                <MdArrowForward></MdArrowForward>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const TableFilter = () => {
    return (
      <div className="filterBlock">
        <div className="left">
          {" "}
          <div className="dropdown">
            <div className="drop-top">
              <div onClick={()=>setPerpage(!perpage)} className="icons">
               
                <span>{showItem}</span> <MdArrowDropDown></MdArrowDropDown>
              </div>
              <div className="item">Items per page</div>
            </div>

            <ul
              className="dropdown-menu"
              style={perpage ? { display: "block" } : {display:'none'}}>
              
                {Array.from(Array(6).keys()).map((item) => (
                  // @ts-ignore
                  <li onClick={(e)=>{setshowItem(e.target.innerText);setPerpage(!perpage)}} key={item}>{(item+1) *5}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="form-group">
            <input
              type="text"
              name="searchItem"
              id="searchItem"
              className="form-control"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="Table">
      <div className="heading">
        <div className="heading-data">
          <MdTableView></MdTableView> Data Table
        </div>
      </div>
      <div className="body">
        <div className="filter">
          <TableFilter></TableFilter>
        </div>
        <div className="tableBlock">
          <TableBlock></TableBlock>
        </div>
        <div className="pageIndex">
          <TableIndex />
        </div>
      </div>
    </div>
  );
};

export default Table;
