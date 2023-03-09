import React from "react";
import { Button } from "antd";
import SvgIcons from "../assests/svg/SvgIcons";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IUserDetails } from "../types";
import { useNavigate } from "react-router-dom";
import "../style/details.scss";
import { Details } from "./details";
import UserData from "./userData";

interface IPropsDetail {
  id?: number;
}

const UserDetailsLayout: React.FC<IPropsDetail> = () => {
  const location = useLocation();
  const [userDetails, setUserDetails] = useState<IUserDetails | null>(null);
  const [loading, setLoading] = useState(true);

  const { userId } = location.state || {};

  // let state;

  //  if(location.state !== undefined) {
  //   state = location.state
  // }else{
  //   state = {}
  // }

  // const userId = location.state.userId

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`
      );
      const data = await response.json();
      setUserDetails(data);
      setLoading(false);
    };
    fetchData();
  }, [userId]);

  const { profile, accountNumber, accountBalance, id, orgName } =
    userDetails || {};

  const userHeaderDetail = {
    firstName: profile?.firstName,
    lastName: profile?.lastName,
    accountNumber,
    accountBalance,
    id,
    orgName,
    avatar: profile?.avatar,
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className="mainDetailsContainer">
        <div className="userDetailsContainer">
          <div className="backUsers">
            <span onClick={() => navigate("/users", { state: { userId } })}>
              {" "}
              <span className="backIcon">
                <SvgIcons.ArrowIcon /> &nbsp;
              </span>
              Back to Users
            </span>
          </div>
          <div className="detailerContainer">
            <div className="detailsHeader">User Details</div>
            <div className="detailStatus">
              <Button className="statusButton1">Blacklist User</Button>
              <Button className="statusButton2">Activate User</Button>
            </div>
          </div>
          <div>
            {loading || !userDetails ? (
              <h2>Loading...</h2>
            ) : (
              <>
                <Details {...userHeaderDetail} />
                <div className="generalDetails">
                  {" "}
                  <UserData {...userDetails} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsLayout;
