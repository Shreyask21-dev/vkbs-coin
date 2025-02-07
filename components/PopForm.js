import React, { useEffect, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

export default function PopForm({ close, location }) {

  const countryOptions = countryList().getData().map((country) => ({ label: country.label, value: country.label }));

  useEffect(() => {
    console.log(location);
    generateCaptcha(); // Generate captcha when the component loads
  }, []);

  const [uploadedFilePath, setUploadedFilePath] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [Loader, setLoader] = useState(false);
  const [captchaInput, setCaptchaInput] = useState(""); // User input for CAPTCHA
  const [captchaCode, setCaptchaCode] = useState(""); // CAPTCHA code to validate

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

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      alert("No file selected.");
      return;
    }
  
    // Validate file size (2 MB = 2 * 1024 * 1024 bytes)
    if (file.size > 2 * 1024 * 1024) {
      alert("File size must not exceed 2 MB.");
      return;
    }
  
    // Validate file type (MIME types for PDF and DOCX)
    const validFileTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!validFileTypes.includes(file.type)) {
      alert("File type must be PDF or DOCX.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        alert("File uploaded successfully!");
        setUploadedFilePath(result.filePath); // Capture the uploaded file path
      } else {
        alert("File upload failed: " + result.message);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file.");
    }
  };

  const generateCaptcha = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase(); // Generate 6-character alphanumeric code
    setCaptchaCode(code);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate CAPTCHA
    if (captchaInput.toUpperCase() !== captchaCode) {
      setLoader("Invalid CAPTCHA. Please try again.");
      setMessageColor("red");
      return;
    }

    console.log("Uploaded File Path:", uploadedFilePath);
    setLoader("Loading");

    // Ensure all required fields are filled
    for (let field in formData) {
      if (!formData[field]) {
        setLoader("Please fill out all required fields.");
        setMessageColor("red");
        return;
      }
    }

    const submissionData = { ...formData, location, filePath: uploadedFilePath };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Email sent successfully!");
        close(); // Close the form using the provided `close` function
      } else {
        setLoader(result.message);
        setMessageColor("red");
      }
    } catch (error) {
      setLoader("An error occurred: " + error.message);
      setMessageColor("red");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="col boderstylepop ">
          <div className="innersectionsty ">
            <div className="classy"></div>
            <div className="col-12 ">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 col-12 mb-3 ">
                    <input
                      type="text"
                      className="form-control custom-selecfirst"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-12 mb-3 classn">
                    <input
                      type="text"
                      className="form-control custom-selecfirst"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-12  mb-3">
                    <input
                      type="text"
                      className="form-control custom-selecee"
                      placeholder="Email ID"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-12  mb-3">
                    <input
                      type="text"
                      className="form-control custom-selecpp"
                      placeholder="Contact No."
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 col-12 mb-3">
                    <Select
                      options={countryOptions}
                      placeholder="Select Country"
                      value={countryOptions.find((option) => option.value === formData.country)}
                      onChange={(selectedOption) =>
                        handleChange({
                          target: { name: "country", value: selectedOption.value },
                        })
                      }
                      className="custom-selecdd"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-12  mb-3">
                    <input
                      type="text"
                      className="form-control custom-selecbuild"
                      placeholder="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-12  mb-3">
                    <input
                      type="text"
                      className="form-control custom-selecsign"
                      placeholder="Pin Code"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <input
                      type="text"
                      className="form-control custom-selecaddress"
                      placeholder="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-12 mb-3 ">
                    <input
                      type="file"
                      id="resumeUpload"
                      name="file"
                      className="form-control"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="resumeUpload"
                      className="form-label text-dark mt-2 ms-2 ps-2"
                    >
                      Upload Your Resume ( PDF, Docx - Limit - 2mb )
                    </label>
                  </div>
                </div>

                <div className="row mb-3 d-flex justify-content-start ps-3">
                  <label
                    // htmlFor="captchaInput"
                    className="form-label text-dark me-2"
                    style={{ marginBottom: "0", fontWeight: "bold" }}
                  >
                    Enter CAPTCHA:
                  </label>
                  <div className="col-auto d-flex align-items-center">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "8px 12px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "5px",
                        border: "1px solid #ced4da",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#495057",
                          letterSpacing: "2px",
                        }}
                      >
                        {captchaCode}
                      </span>
                      <button
                        type="button"
                        style={{
                          backgroundColor: "#007bff",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: "3px",
                          fontSize: "14px",
                          cursor: "pointer",
                        }}
                        onClick={generateCaptcha}
                      >
                        Refresh
                      </button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "10px", marginLeft: "2%" }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter CAPTCHA"
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                        style={{
                          width: "200px",
                          marginRight: "10px", // Add some space between input and the next element
                        }}
                      />
                    </div>
                  </div>
                </div>



                <div className="btn-classes d-flex">
                  <button
                    type="submit"
                    className="mt-2 btn btn-primary btn-rounded btn-lg"
                  >
                    Apply Now
                  </button>
                  <button
                    type="button"
                    className="mt-2 btn btn-lg"
                    onClick={() =>
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        country: "",
                        city: "",
                        pinCode: "",
                        address: "",
                      })
                    }
                  >
                    Clear
                  </button>
                </div>

                {Loader && (
                  <p style={{ color: messageColor, marginTop: "10px" }}>
                    {Loader}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
