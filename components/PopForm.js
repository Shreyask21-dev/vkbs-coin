import React, { useRef, useState } from "react";
import Link from "next/link";


export default function PopForm({close}) {

  const [Loader, setLoader] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    pinCode: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {

    setLoader("Loading")

    e.preventDefault();

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // alert("Form submitted successfully!");
        setLoader("Form submited")
        close()
      } else {
        setLoader(result.message)
        // alert("Error submitting form: " + result.message);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  

  return (
    <div>

      <div className="container ">
        <div className="col  boderstylepop ">
          <div className=" innersectionsty ">
            <div className="classy">
            </div>
            <div className="col-12   ">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6 mb-3 ">
                    <input
                      type="text"
                      class="form-control custom-selecfirst"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6 mb-3 classn">
                    <input
                      type="text"
                      class="form-control custom-selecfirst"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-6  mb-3">
                    <input
                      type="text"
                      class="form-control custom-selecee"
                      placeholder="email id"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-6  mb-3">
                    <input
                      type="text"
                      class="form-control custom-selecpp"
                      placeholder="contact no."
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12  mb-3">
                    <input
                      type="text"
                      class="form-control custom-selecdd"
                      placeholder="Select Country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-6  mb-3">
                    <input
                      type="text"
                      class="form-control custom-selecbuild"
                      placeholder="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-6  mb-3">
                    <input
                      type="text"
                      class="form-control custom-selecsign "
                      placeholder="Pin code"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                    />
                  </div>

                  <div class="col-12 mb-3">
                    <input
                      type="text"
                      class="form-control custom-selecaddress"
                      placeholder="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="btn-classes d-flex">
                    <button
                      type="submit"
                      className="mt-2 btn btn-primary btn-rounded btn-lg">
                       Apply Now
                     </button>
                    <button
                   
                      type="button"
                      className="mt-2 btn btn-lg"
                      onClick={() => setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        country: "",
                        city: "",
                        pinCode: "",
                        address: "",
                      })}
                      >
                      Clear
                    </button>

                    {Loader}
                    
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
