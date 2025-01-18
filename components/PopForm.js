import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";


export default function PopForm({ close, location }) {

  useEffect(() => {
    console.log(location)
  }, [])

  const [uploadedFilePath, setUploadedFilePath] = useState("");

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


  const [file, setFile] = useState(null);

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // const handleFileChange = async (e) => {
  //   const file = e.target.files[0];
  //   setFile(file);

  //   const formData = new FormData();
  //   formData.append('file', file);

  //   try {
  //     const response = await fetch('/api/upload', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     const result = await response.json();
  //     if (result.success) {
  //       console.log('File uploaded successfully:', result.filePath);
  //       alert('File uploaded successfully!');
  //     } else {
  //       console.error(result.message);
  //       alert('File upload failed.');
  //     }
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //     alert('An error occurred while uploading the file.');
  //   }
  // };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        console.log(result)
        alert('File uploaded successfully!');
        setUploadedFilePath(result.filePath); // Capture the uploaded file path
      } else {
        alert('File upload failed: ' + result.message);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file.');
    }
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Uploaded File Path:", uploadedFilePath);
  //   setLoader("Loading");

  //   // Ensure all required fields are filled
  //   for (let field in formData) {
  //     if (!formData[field]) {
  //       setLoader("Please fill out all required fields.");
  //       setMessageColor("red");
  //       return;
  //     }
  //   }

  //   const submissionData = { ...formData, location, filePath: uploadedFilePath };

  //   try {
  //     const response = await fetch("/api/submit-form", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(submissionData),
  //     });

  //     const result = await response.json();
  //     if (result.success) {
  //       setLoader("Form submitted successfully!");
  //       setMessageColor("green");
  //       close();
  //     } else {
  //       setLoader(result.message);
  //       setMessageColor("red");
  //     }
  //   } catch (error) {
  //     setLoader("An error occurred: " + error.message);
  //     setMessageColor("red");
  //   } finally {
  //     setLoader(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

     // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    setLoader("Please enter a valid email address.");
    setMessageColor("red");
    return;
  }

  // Validate phone number
  const phoneRegex = /^\d{10,15}$/;
  if (!phoneRegex.test(formData.phone)) {
    setLoader("Phone number must be between 10 to 15 digits and contain only numbers.");
    setMessageColor("red");
    return;
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
        // Show alert and close form on "OK"
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

                  <div class="col-6 mb-3">
                    <input
                      type="text"
                      class="form-control custom-selecaddress"
                      placeholder="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-6 mb-3">
                    
                    <input
                      type="file"
                      id="resumeUpload"
                      name="file"
                      className="form-control"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="resumeUpload" className="form-label text-dark mt-2 ms-2">
                      Upload Your Resume
                    </label>
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
