import React, { useRef, useState } from "react";
import Link from "next/link";


export default function PopForm({ close }) {

  const [messageColor, setMessageColor] = useState("");

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

    // Check for empty fields
    for (let field in formData) {
      if (!formData[field]) {
        setLoader("Please fill out all required fields.");
        setMessageColor("red");
        return;
      }
    }

    // Validate phone number
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setLoader("Phone number must be between 10 to 15 digits and contain only numbers.");
      setMessageColor("red");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setLoader("Please enter a valid email address.");
      setMessageColor("red");
      return;
    }

    setLoader("Loading");

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
        setMessageColor("green");
        close()
      } else {
        setLoader(result.message)
        setMessageColor("red");
        // alert("Error submitting form: " + result.message);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
      setMessageColor("red");
    }

    setLoader(false);
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


                  </div>

                    {Loader && (
                      <p style={{ color: messageColor, marginTop: "10px" }}>{Loader}</p>
                    )}

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
