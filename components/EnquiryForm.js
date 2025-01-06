import React, { useRef, useState } from "react";
import Link from "next/link";


export default function PopForm() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    companyName: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


   // Handle form submission
   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://vkbs.in/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>

      <div className="enq-form">
        <div className="container ">
          <h4>Enquiry form</h4>
          <p>Connect with us by completing the below form</p>
          <div className="space5"></div>
          <form onSubmit={handleSubmit}>
            <div className="row">

              <div className="col-lg-6 mb-3 ">
                <p>First Name:</p>
                <input
                  type="text"
                  name="firstName"
                  className="form-control custom-selecfirst"
                  placeholder=""
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-lg-6 mb-3 ">
                <p>Last Name:</p>
                <input
                  type="text"
                  name="lastName"
                  className="form-control custom-selecfirst"
                  placeholder=""
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div class="col-lg-6  mb-3">
                <p>Phone:</p>
                <input
                  type="text"
                  name="phone"
                  className="form-control custom-selecdd"
                  placeholder=""
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div class="col-lg-6  mb-3">
                <p>Email:</p>
                <input
                  type="email"
                  name="email"
                  className="form-control custom-selecbuild"
                  placeholder=""
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-lg-12 mb-3 ">
                <p>Company Name:</p>
                <input
                  type="text"
                  name="companyName"
                  className="form-control custom-selecfirst"
                  placeholder=""
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              <div class="col-lg-12 mb-3">
                <p>Your Message</p>
                <textarea
                   name="message"
                   className="form-control custom-selecaddress"
                   placeholder=""
                   value={formData.message}
                   onChange={handleChange}
                   required
                />
              </div>

              <div className="btn-classes d-flex">
                <button
                  type="submit"
                  className="mt-2 btn btn-primary btn-rounded btn-lg">
                  Apply Now
                </button>

                <button
                  type="reset"
                  className="mt-2 btn btn-lg reset-btn"
                  onClick={() => setFormData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    companyName: "",
                    message: "",
                  })}>
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
