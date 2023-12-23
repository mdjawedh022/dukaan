import React, { useState } from "react";
import "./overview.css";
import help from "../../assets/Help.svg";
import right from "../../assets/Chevron Right.svg";
import cright from "../../assets/color Right.svg";
import download from "../../assets/download.svg";
import sort from "../../assets/Sort.svg";
import search from "../../assets/Search.svg";
import traingle from "../../assets/Triangle-Icon.svg";
import success from "../../assets/Ellipse 23.svg";
import process from "../../assets/gray circle.svg";

function Overview() {
    const [activeButton, setActiveButton] = useState("payouts");

    const handleButtonClick = (button) => {
      setActiveButton(button);
    };

  return (
    <>
      <div className="overview">
        <div className="overview-header">
          <p>Overview</p>
          <select>
            <option value="">This Month</option>
          </select>
        </div>
        <div className="overview-card">
          <div className="parent-card">
            <div className="card">
              <p>Next Payout</p>
              <img src={help} alt="" />
            </div>
            <div className="card2">
              <p className="first-child">₹ 2,312.50</p>
              <div className="main-child">
                <p>23 Orders</p>
                <img src={right} alt="right" />
              </div>
            </div>
            <div className="card3">
              <p className="first">Next Payout Date</p>
              <p className="second">Today,4:00PM </p>
            </div>
          </div>
          <div className="parent-card2">
            <div className="cards">
              <p>Amount Pending</p>
              <img src={help} alt="help" />
            </div>
            <div className="cards2">
              <p className="first-child">₹ 92,312.50</p>
              <div className="main-child">
                <p>23 Orders</p>
                <img src={cright} alt="right" />
              </div>
            </div>
          </div>
          <div className="parent-card2">
            <div className="cards">
              <p>Amount Processed</p>
              <img src={help} alt="help" />
            </div>
            <div className="cards2">
              <p className="first-child">₹ 23,92,312.50</p>
              <div className="main-child">
                <p>23 Orders</p>
                <img src={cright} alt="right" />
              </div>
            </div>
          </div>
        </div>
        <div className="transaction">
          <p className="month">Transactions | This Month</p>
        </div>
        <div className="btn">
          <button
            className={activeButton === "payouts" ? "active" : ""}
            onClick={() => handleButtonClick("payouts")}
          >
            Payouts (22)
          </button>
          <button
            className={activeButton === "refunds" ? "active" : ""}
            onClick={() => handleButtonClick("refunds")}
          >
            Refunds (2)
          </button>
        </div>
        <div className="searchbox-sort">
          <div className="inputs">
            <input type="text" disabled />
            <img src={search} alt="" />
          </div>
          <div className="filter">
            <button className="sorts">
              Sort
              <img src={sort} alt="" />
            </button>
            <button>
              <img src={download} alt="" />
            </button>
          </div>
        </div>
        {activeButton === "payouts" ? (
          <div className="table">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>
                    <img src={traingle} alt="" />
                  </th>
                  <th></th>
                  <th>Transaction ID</th>
                  <th>Order Amount</th>
                  <th>Transaction Fees</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td className="first">
                    <img src={process} alt="" />
                    Processing
                  </td>
                  <td className="td-₹">131634495747</td>
                  <td>₹10,125.00</td>
                  <td>₹1,125.00</td>
                  <td className="td-₹">₹9,312</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="first">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td className="td-₹">131634495747</td>
                  <td>₹10,125.00</td>
                  <td>₹1,125.00</td>
                  <td className="td-₹">₹9,312</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="first">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td className="td-₹">131634495747</td>
                  <td>₹10,125.00</td>
                  <td>₹1,125.00</td>
                  <td className="td-₹">₹9,312</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="first">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td className="td-₹">131634495747</td>
                  <td>₹10,125.00</td>
                  <td>₹1,125.00</td>
                  <td className="td-₹">₹9,312</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="first">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td className="td-₹">131634495747</td>
                  <td>₹10,125.00</td>
                  <td>₹1,125.00</td>
                  <td className="td-₹">₹9,312</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="first">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td className="td-₹">131634495747</td>
                  <td>₹10,125.00</td>
                  <td>₹1,125.00</td>
                  <td className="td-₹">₹9,312</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="first">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td className="td-₹">131634495747</td>
                  <td>₹10,125.00</td>
                  <td>₹1,125.00</td>
                  <td className="td-₹">₹9,312</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="table1">
            <table className="custom-table1">
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Status</th>
                  <th>Trasaction Id</th>
                  <th>Refund Date</th>
                  <th>Order Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#281209</td>
                  <td className="first1">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td>131634495747</td>
                  <td>Today, 08:45 PM</td>
                  <td>₹1,125.00</td>
                </tr>
                <tr>
                  <td>#281209</td>

                  <td className="first1">
                    <img src={process} alt="" />
                    Processing
                  </td>
                  <td>131634495747</td>
                  <td>Yesterday, 3:00 PM</td>
                  <td>₹1,125.00</td>
                </tr>
                <tr>
                  <td>#281209</td>
                  <td className="first1">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td>131634495747</td>
                  <td>12 Jul 2023, 03:00 PM</td>
                  <td>₹1,125.00</td>
                </tr>
                <tr>
                  <td>#281209</td>
                  <td className="first1">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td>131634495747</td>
                  <td>12 Jul 2023, 03:00 PM</td>
                  <td>₹1,125.00</td>
                </tr>
                <tr>
                  <td>#281209</td>
                  <td className="first1">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td>131634495747</td>
                  <td>12 Jul 2023, 03:00 PM</td>
                  <td>₹1,125.00</td>
                </tr>
                <tr>
                  <td>#281209</td>
                  <td className="first1">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td>131634495747</td>
                  <td>12 Jul 2023, 03:00 PM</td>
                  <td>₹1,125.00</td>
                </tr>
                <tr>
                  <td>#281209</td>
                  <td className="first1">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td>131634495747</td>
                  <td>12 Jul 2023, 03:00 PM</td>
                  <td>₹1,125.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default Overview;
