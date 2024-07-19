import { useState } from "react";
import { Button } from "../Button/Button";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    linkedIn: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState({
    fullName: false,
    email: false,
    linkedIn: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setFocused({ ...focused, [name]: true });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFocused({ ...focused, [name]: false });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    if (!value && name !== "linkedIn") {
      newErrors[name] = `${capitalize(name)} is required`;
    } else {
      delete newErrors[name];
      if (name === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = "Email address is invalid";
      }
    }
    setErrors(newErrors);
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = "Full Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission
      console.log("Form data submitted:", formData);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        linkedIn: "",
        message: "",
      });
      setErrors({});
      setFocused({
        fullName: false,
        email: false,
        linkedIn: false,
        message: false,
      });
    }
  };

  const capitalize = (s) => {
    return s === "linkedIn"
      ? "LinkedIn"
      : s
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())
          .trim();
  };

  const getInputClasses = (field) => {
    if (errors[field]) return "border-bittersweet";
    if (focused[field] || formData[field]) return "border-eucalyptus";
    return "border-white";
  };

  return (
    <div id="contact" className="pt-20 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 justify-center items-center text-center lg:text-start lg:items-start gap-36">
        <div className="gap-10">
          <h5 className="text-fs36 md:text-fs40 lg:text-fs48 font-bold mb-8">
            Contact
          </h5>
          <p className="text-sm md:text-base lg:text-lg w-full md:w-[80%] lg:w-full mx-0 md:mx-auto lg:mx-0">
            I am eager to learn about your project and explore how I can assist
            you. Kindly complete the form, and I will respond at the earliest
            opportunity. Your project deserves dedicated attention, and I am
            committed to providing professional and technically efficient
            solutions.
          </p>
        </div>

        <form
          className="w-full max-w-lg mb-14 mx-auto lg:mx-0"
          onSubmit={handleSubmit}
        >
          {["fullName", "email", "linkedIn", "message"].map((field) => (
            <div key={field} className="mb-4 relative">
              <div className="relative">
                {field !== "message" ? (
                  <input
                    className={`shadow appearance-none border-b-2 bg-raisin-black text-white w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline ${getInputClasses(
                      field
                    )}`}
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={capitalize(field)}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                ) : (
                  <textarea
                    className={`shadow appearance-none border-b-2 bg-raisin-black text-white w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline ${getInputClasses(
                      field
                    )}`}
                    id={field}
                    name={field}
                    placeholder={capitalize(field)}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    rows={4}
                  />
                )}
                <label
                  htmlFor={field}
                  className={`absolute left-3 -top-2.5 text-xs text-eucalyptus transition-all duration-200 ${
                    focused[field] || formData[field]
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  {field === "linkedIn" ? "LinkedIn" : capitalize(field)}
                </label>
              </div>
              {errors[field] && (
                <p className="text-bittersweet text-xs italic absolute right-0 top-full">
                  {errors[field]}
                </p>
              )}
            </div>
          ))}
          <div className="flex items-center justify-end mt-10">
            <Button
              className="text-white uppercase border-b-2 border-eucalyptus py-2 hover:text-eucalyptus hover:border-white transition transform ease-in-out duration-250 hover:scale-105 hover:translate-y-1"
              type="submit"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>

      <div className="border-t-2 border-white mt-8"></div>

      <div className="mt-8 flex flex-col md:flex-row mx-auto md:mx-0 justify-between items-center">
        <div className="">
          <Link
            to="header"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <h1 className="font-bold text-center md:text-start text-fs24 md:text-fs32 transition transform ease-in-out duration-250 hover:text-eucalyptus hover:scale-105 hover:translate-y-1 py-4 ">
              richardessuman
            </h1>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-7 mb-4">
          <a
            href="https://github.com/ressuman"
            target="_blank"
            className="transition ease-in-out duration-250 hover:scale-110 hover:text-eucalyptus"
          >
            <FaGithub
              size={20}
              className="transition ease-in-out duration-250 cursor-pointer"
            />
          </a>
          <a
            href="www.linkedin.com/in/richard-essuman"
            target="_blank"
            className="transition ease-in-out duration-250 hover:scale-110 hover:text-eucalyptus"
          >
            <FaLinkedin
              size={20}
              className="cursor-pointer transition ease-in-out duration-250"
            />
          </a>
          <a
            href="https://x.com/ressuman001"
            target="_blank"
            className="transition ease-in-out duration-250 hover:scale-110 hover:text-eucalyptus"
          >
            <FaXTwitter
              size={20}
              className="cursor-pointer transition ease-in-out duration-250"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
