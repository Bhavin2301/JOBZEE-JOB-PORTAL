import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>What Jobzee Provides</h3>
          <div className="banner">

            <div className="card" >
              <Link to='/job/getall' style={{ textDecoration: 'none' }}>
                <MdFindInPage />
                <p style={{ fontSize: '1vw' }}>Find a Job/Post a Job</p>
              </Link>
              <p>
                Listed all jobs.
              </p>
            </div>
            <div className="card">

              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>

              <p>
                Apply for a Jib.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
