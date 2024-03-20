import React from "react";

const EnquiryForm = () => {
  return (
    <div className="container">
      <div className="col-lg-8  boderstyle ">
        <div className=" innersectionsty ">
          <div className="">
            <h3 className="head">Enquiry form</h3>
            <p className="substitle">
              Connect with us by completing the below form
            </p>
          </div>
          <div className="col-12  ">
            <form>
              <div className="row">
                <div className="col-6 mb-3 ">
                  <label
                    className="mr-sm-2 sr-only labelname"
                    htmlFor="inlineFormCustomSelect"
                  >
                    Segments:
                  </label>
                  <select className="custom-selec" id="inlineFormCustomSelect">
                    <option selected className="innerlabel">
                      Select Segments
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6 mb-3 classn">
                  <label
                    className="mr-sm-2 sr-only
              
              labelname
              "
                    htmlFor="inlineFormCustomSelect"
                  >
                    Services:
                  </label>
                  <select
                    className="custom-selec mr-sm-2"
                    id="inlineFormCustomSelect"
                  >
                    <option selected>Select Segments</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="col-6  mb-3">
                  <label className="mr-sm-2 sr-only  labelname">
                    Company Name:
                  </label>
                  <input
                    type="text"
                    class="form-control custom-sele"
                    placeholder="Enter company name"
                  />
                </div>
                <div class="col-6  mb-3">
                  <label className="mr-sm-2 sr-only  labelname">
                    Name of contact person:
                  </label>
                  <input
                    type="text"
                    class="form-control custom-sele"
                    placeholder="Enter name of contact person:"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6  mb-3">
                  <label className="mr-sm-2 sr-only  labelname">
                    Designation:
                  </label>
                  <input
                    type="text"
                    class="form-control custom-sele"
                    placeholder="Enter Designation"
                  />
                </div>
                <div class="col-6  mb-3">
                  <label className="mr-sm-2 sr-only  labelname">Address</label>
                  <input
                    type="text"
                    class="form-control custom-sele"
                    placeholder="Enter Address"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6  mb-3">
                  <label className="mr-sm-2 sr-only  labelname">
                    Contact No:
                  </label>
                  <input
                    type="text"
                    class="form-control custom-sele"
                    placeholder="Enter contact number"
                  />
                </div>
                <div class="col-6  mb-3">
                  <label className="mr-sm-2 sr-only  labelname">Email:</label>
                  <input
                    type="email"
                    class="form-control custom-sele"
                    placeholder="Enter Email"
                  />
                </div>

                <div class="col-12 mb-3">
                  <label
                    className="mr-sm-2 sr-only labelname"
                    htmlFor="customMessage"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="customMessage"
                    className="form-control customMessage"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>
            </form>
            <div className="d-flex">
              <div>
                <button className="btn">Apply Now</button>
              </div>

              <div>
                <button className="btnre">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
