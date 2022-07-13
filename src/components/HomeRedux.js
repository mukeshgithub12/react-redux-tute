import React from "react";
import { BsCartPlus } from 'react-icons/bs';


const HomeRedux = () => {
  return (
    <>
    <div className="container">
   <div className="Cart_Iocn"><BsCartPlus/></div>
      <div className="row">
        <div className="col-md-3">
            <div className="card">
            <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">₹199</p>
            </div>
            <button>Add To Card</button>
            </div>

        </div>
      </div>
      </div>
    </>
  );
};

export default HomeRedux;
