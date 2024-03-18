import React, { useRef, useState } from "react";
import Link from "next/link";


export default function PopForm() {

  

  return (
    <div>



      <div className="container ">
        <div className="col  boderstylepop ">
          <div className=" innersectionsty ">
            <div className="classy">


            </div>
            <div className="col-12   ">
              <form>
                <div className="row">
                  <div className="col-6 mb-3 ">
                    <input
                      type="text"
                      class="form-control custom-selecfirst"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-6 mb-3 classn">
                    <input
                      type="text"
                      class="form-control custom-selecfirst"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-6  mb-3">
                    <input
                      type="text"
                      class="form-control custom-selecee"
                      placeholder="email id"
                    />
                  </div>
                  <div class="col-6  mb-3">
                    <input
                      type="text"
                      class="form-control custom-selecpp"
                      placeholder="contact no."
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12  mb-3">
                    <input
                      type="text"
                      class="form-control custom-selecdd"
                      placeholder="Select Country"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-6  mb-3">
                    <input
                      type="text"
                      class="form-control custom-selecbuild"
                      placeholder="city"
                    />
                  </div>
                  <div class="col-6  mb-3">
                    <input
                      type="text"
                      class="form-control custom-selecsign "
                      placeholder="Pin code"
                    />
                  </div>

                  <div class="col-12 mb-3">
                    <input
                      type="text"
                      class="form-control custom-selecaddress"
                      placeholder="Address"
                    />
                  </div>

                  <div className="btn-classes d-flex">
                    <Link href='/'
                      type="button"
                      className="mt-2 btn btn-primary btn-rounded btn-lg">
                       Apply Now
                     </Link>
                    <button
                   
                      type="button"
                      className="mt-2 btn btn-lg">
                      Clear
                    </button>
                    
                  </div>


                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
