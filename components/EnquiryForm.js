import React, { useRef, useState } from "react";
import Link from "next/link";


export default function PopForm() {



  return (
    <div>


      <div className="enq-form">
        <div className="container ">
          <h4>Enquiry form</h4>
          <p>Connect with us by completing the below form</p>
          <div className="space5"></div>
          <form>
            <div className="row">
              <div className="col-lg-6 mb-3 ">
                <p>Company Name:</p>
                <input
                  type="text"
                  class="form-control custom-selecfirst"
                  placeholder="Company Name"
                />
              </div>
              <div className="col-lg-6 mb-3 classn">
                <p>Name of contact person</p>
                <input
                  type="text"
                  class="form-control custom-selecfirst"
                  placeholder="Name of contact person"
                />
              </div>


              <div class="col-lg-6  mb-3">
                <p>Designation :</p>
                <input
                  type="text"
                  class="form-control custom-selecee"
                  placeholder="Enter Designation"
                />
              </div>
              <div class="col-lg-6 mb-3">
                <p>Address</p>
                <input
                  type="text"
                  class="form-control custom-selecpp"
                  placeholder="Enter Address"
                />
              </div>


              <div class="col-lg-6  mb-3">
                <p>Contact No:</p>
                <input
                  type="text"
                  class="form-control custom-selecdd"
                  placeholder="Contact No"
                />
              </div>

              <div class="col-lg-6  mb-3">
                <p>Email:</p>
                <input
                  type="text"
                  class="form-control custom-selecbuild"
                  placeholder="Email"
                />
              </div>
              

              <div class="col-lg-12 mb-3">
                <p>Your Message</p>
                <textarea
                  type="text"
                  class="form-control custom-selecaddress"
                  placeholder="Your Message"
                />
              </div>

              <div className="btn-classes d-flex">
              <button
                  type="button"
                  className="mt-2 btn btn-primary btn-rounded btn-lg">
                  Apply Now
                </button>

                <button
                  type="button"
                  className="mt-2 btn btn-lg reset-btn">
                  Reset
                </button>

              </div>


            </div>
          </form>

        </div>
      </div>
    </div>


  );
}
