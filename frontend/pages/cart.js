import React from "react";

const Cart = () => {
  return (
    <div className="container-fluid p-5 m-4 ">
      <div className="row ">
        <div className="col w-50"></div>
        <div className="col w-50 " style={{paddingRight:'10%' ,marginLeft:'10%'}}>
          <form>
            <div className="mb-3 input-group-lg">
              <label className="form-label" >Contact Information</label>
              <input className="form-control placeholderchange " placeholder="Email"/>
              <br />
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input p-2" />
                <label className="form-check-label " style={{ color: "gray" }}>
                  Keep me up to date on news and exclusive offers
                </label>
              </div>
            </div>

           
              <label className="form-label ">Shipping Address</label>
              <div className=" mb-2 row"  >
                <div className="mb-3 w-50 input-group-lg">
                  <input className="form-control placeholderchange"  placeholder="First Name"/>
                </div>
                <div className="mb-3 w-50 input-group-lg">
                  <input className="form-control placeholderchange" placeholder="Last Name" />
                </div>
              </div>
           
            <div className="mb-4  input-group-lg">
            <input className="form-control placeholderchange" placeholder="Address 1" />

            </div>

            <div className="mb-3 input-group-lg">
              <input className="form-control placeholderchange"  placeholder="Address 2"/>
            </div>
            <div className="mb-3 input-group-lg">
              <input className="form-control placeholderchange"  placeholder="City"/>
            </div>
            <div className="mb-3 input-group-lg">
              <input className="form-control placeholderchange"   placeholder="State"/>
            </div>
            <div className="mb-3 input-group-lg">
              <input className="form-control placeholderchange" placeholder="Zip"/>
            </div>
            <div className="mb-3 input-group-lg">
              <input className="form-control placeholderchange" placeholder="Mobile Number"/>
            </div>

            <button  className="btn btn-dark w-25 " style={{height:'45px' }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
