import React from "react";

import Pgcard from "./Pgcard.jsx";
import Laundarydata from "./Laundarydata.jsx";
import "./styles.css";

const Laundary = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Laundary</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row ">
              {Laundarydata.map((val, index) => {
                return (
                  <Pgcard
                    key="index"
                    img={val.img}
                    title={val.title}
                    info={val.info}
                    
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Laundary;
