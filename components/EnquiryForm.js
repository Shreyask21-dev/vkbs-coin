import React, { useState } from "react";

export default function PopForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation check for empty fields
    if (!firstName || !lastName || !email || !phone || !company || !description) {
      setMessage("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:3000/api/mailForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          company,
          description,
        }),
      });

      const data = await res.json();
      setMessage(data.success ? "Message sent successfully" : "Error sending message");

      if (data.success) {
        // Clear the form fields if submission was successful
        resetForm();
      }
    } catch (error) {
      setMessage("An error occurred.");
    }

    setIsSubmitting(false);
  };

  // Reset form fields
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setDescription("");
  };

  return (
    <div>
      <div className="enq-form">
        <div className="container">
          <h4>Enquiry Form</h4>
          <p>Connect with us by completing the below form</p>
          <div className="space5"></div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 mb-3">
                <p>First Name:</p>
                <input
                  className="form-control custom-selecfirst"
                  type="text"
                  placeholder="First Name*"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="col-lg-6 mb-3">
                <p>Last Name:</p>
                <input
                  className="form-control custom-selecfirst"
                  type="text"
                  placeholder="Last Name*"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="col-lg-6 mb-3">
                <p>Phone:</p>
                <input
                  className="form-control custom-selecdd"
                  type="text"
                  placeholder="Phone No.*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="col-lg-6 mb-3">
                <p>Email:</p>
                <input
                  className="form-control custom-selecbuild"
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="col-lg-12 mb-3">
                <p>Company Name:</p>
                <input
                  className="form-control custom-selecfirst"
                  type="text"
                  placeholder="Company Name*"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>

              <div className="col-lg-12 mb-3">
                <p>Your Message:</p>
                <textarea
                  className="form-control custom-selecaddress"
                  placeholder="Please describe your requirements in brief"
                  style={{ resize: "vertical" }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="btn-classes d-flex">
                <button
                  type="submit"
                  className="mt-2 btn btn-primary btn-rounded btn-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Apply Now"}
                </button>

                <button
                  type="button"
                  className="mt-2 btn btn-lg reset-btn"
                  onClick={resetForm}
                >
                  Reset
                </button>
              </div>
            </div>
          </form>

          {message && <p className="form-message">{message}</p>}
        </div>
      </div>
    </div>
  );
}
