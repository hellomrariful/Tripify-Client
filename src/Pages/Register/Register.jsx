import { Link, useNavigate } from "react-router-dom";
import tripify from "../../assets/3.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const { createUser, signUpWithGoogle } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const handelRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const accepted = form.get("terms");

    // reset error
    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should have at least one upper case");
      return;
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      setRegisterError("Please write at least special character");
      return;
    } else if (!accepted) {
      setRegisterError("Please Accept our terms & Condition");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        const displayErrorToast = () => {
          toast.dismiss("error-toast");
          toast.success("User Created Successfully", {
            id: "error-toast",
            duration: 2000,
            style: {
              padding: "14px",
              color: "#524FF5",
            },
            iconTheme: {
              primary: "#A1F65E",
              secondary: "#FFFFFF",
            },
          });
        };
        displayErrorToast();

        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("profile update"))
          .catch();

        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
        setRegisterError(err.message);
      });
  };

  const handelGoogleLogIn = (e) => {
    e.preventDefault();
    signUpWithGoogle()
      .then((result) => {
        console.log(result);
        const displayErrorToast = () => {
          toast.dismiss("error-toast");
          toast.success("Sign Up Successfully", {
            id: "error-toast",
            duration: 2000,
            style: {
              padding: "14px",
              color: "#524FF5",
            },
            iconTheme: {
              primary: "#A1F65E",
              secondary: "#FFFFFF",
            },
          });
        };
        displayErrorToast();

        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Tripify | Register</title>
      </Helmet>
      <div className="flex w-60 items-center text-center mx-auto px-6">
        <img src={tripify} alt="" />
      </div>
      <div className="flex justify-center">
        <div className="px-8 pt-8 pb-10 bg-[#F7FAFC] rounded-2xl drop-shadow-2xl">
          <div className="relative flex flex-col">
            <h4 className="block text-center text-[22px]">
              Create a new account
            </h4>
            <div className="mx-auto mt-5">
              <ReCAPTCHA
                sitekey="6LelPTApAAAAADWVe8dSbkcjltECOr38kOEygA9u"
                onChange={onChange}
              />
            </div>
            {registerError && (
              <p className="border-2 p-3 mt-6 border-[#de4523] bg-[#ffebe8] text-center text-black rounded">
                {registerError}
              </p>
            )}
            <form
              onSubmit={handelRegister}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-4 flex flex-col gap-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    required
                    name="name"
                    type="name"
                    placeholder=""
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#A1F65E] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#524FF5] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#A1F65E] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#A1F65E] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Name
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    required
                    type="url"
                    name="photo"
                    placeholder=""
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#A1F65E] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#524FF5] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#A1F65E] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#A1F65E] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Photo URL
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder=""
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#A1F65E] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#524FF5] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#A1F65E] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#A1F65E] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                  </label>
                </div>

                <div className="relative h-11 w-full min-w-[200px] flex items-center">
                  <input
                    type={show ? "text" : "password"}
                    required
                    name="password"
                    placeholder=""
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#A1F65E] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />

                  <div className=" absolute right-4">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(!show);
                      }}
                    >
                      {show ? <FaEyeSlash /> : <FaEye></FaEye>}
                    </button>
                  </div>

                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#524FF5] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#A1F65E] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#A1F65E] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                </div>
              </div>
              <div className="inline-flex items-center">
                <label
                  className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                  htmlFor="checkbox"
                  data-ripple-dark="true"
                >
                  <input
                    name="terms"
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#A1F65E] checked:bg-[#A1F65E] checked:before:bg-[#524FF5] hover:before:opacity-10"
                    id="checkbox"
                  />
                  <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px cursor-pointer select-none font-light text-gray-700"
                  htmlFor="checkbox"
                >
                  <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                    I agree the
                    <a
                      className="font-medium transition-colors hover:text-[#524FF5]"
                      href="#"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </p>
                </label>
              </div>
              <button
                className="mt-6 block w-full select-none rounded-lg 
             bg-[#524FF5] py-3 px-6 text-center align-middle font-sans font-bold uppercase text-white shadow-md shadow-[#6b6f68] transition-all hover:shadow-md
              hover:shadow-[#A1F65E] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                data-ripple-light="true"
              >
                Register
              </button>
              <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-[#524FF5] transition-colors hover:text-[#A1F65E]"
                >
                  Sign In
                </Link>
              </p>
              <p className=" flex items-center mt-5">
                <p className="border-t-2 w-1/2"></p>
                <p className="px-2">Or</p>
                <p className="border-t-2 w-1/2"></p>
              </p>
            </form>
            <button
              onClick={handelGoogleLogIn}
              className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
            >
              <div className="py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign Up With Google
              </span>
            </button>
          </div>
        </div>
        <Toaster position="top-center" reverseOrder={true}></Toaster>
      </div>
    </div>
  );
};

export default Register;
