import { useRouter } from "next/dist/client/router";
import React, {useEffect, useState } from "react";

const HomePage = () => {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({ nameErr: " ", emailErr: " ", messageErr: " " });
  const [formClass, setFormClass] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [reload,setReload] = useState(false);

  const handleSubmit = () => {
    setFormError(validate());
    if (formError.nameErr === "" && formError.emailErr == "" && formError.messageErr =="") {
      console.log(formError)
      window.location.reload();
    }
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (isSubmit) {
      setFormError(validate());
    }
    // console.log(formValues);
  };


  const validate = () => {
    const err = {nameErr: "", emailErr: "", messageErr: ""};
    const classes = {nameClass:"",emailClass:"",messageClass:""};
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!formValues.name) {
      err.nameErr = "Name field can&apos;t be empty";
      classes.nameClass = "border-red"
    }
    if (!formValues.email) {
      err.emailErr = "email field can&apos;t be empty";
      classes.emailClass = "border-red"
    } else if (!regex.test(formValues.email)) {
      err.emailErr = "invalid email";
      classes.emailClass = "border-red"
    }
    if (!formValues.message) {
      err.messageErr = "message field can&apos;t be empty";
      classes.messageClass = "border-red"
    } 
    setFormClass(classes);
    return err;
  };

  return (
    <div>
      <div className="flex flex-col h-full justify-center">
        <div className="values flex flex-col mx-auto w-4/5 justify-center text-center py-5 pt-10">
          <h1 className="mb-10 font-extrabold">OUR VALUES</h1>
          <div className="kotak w-full flex justify-center">
            <div className="mx-1 flex flex-row justify-center items-center ibox">
              <div className="flex flex-col h-full w-full bg-red-400 border-red-600 border-2 text-center justify-center">
                <img className="mx-auto" src="/lightbulb-o.png" alt="" />
                <h1 className="my-3 font-bold text-white">INNOVATIVE</h1>
                <p className="text-xs mx-2 mb-2 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris pharetra augue at lobortis volutpat.
                </p>
              </div>
              <div className="arrow"></div>
            </div>
            <div className="mx-1 flex flex-row justify-center items-center ibox">
              <div className="flex flex-col h-full w-full bg-green-600 border-green-800 border-2 text-center py-8 justify-center">
                <img className="mx-auto" src="/bank.png" alt="" />
                <h1 className="my-3 font-bold text-white">LOYALTY</h1>
                <p className="text-xs mx-2 mb-2 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris pharetra augue at lobortis volutpat.
                </p>
              </div>
              <div className="arrow-green"></div>
            </div>
            <div className="flex flex-col h-full w-1/5 bg-blue-500 border-blue-600 border-2 text-center mx-1 justify-center py-8">
              <img className="mx-auto" src="/balance-scale.png" alt="" />
              <h1 className="my-3 font-bold text-white">RESPECT</h1>
              <p className="text-xs mx-2 mb-2 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                pharetra augue at lobortis volutpat.
              </p>
            </div>
          </div>
        </div>

        <div className="contact h-full w-full justify-center">
          <div className="values mx-auto pb-8 flex flex-col w-4/5 justify-center text-center">
            <h1 className="mb-10 font-extrabold">CONTACT US</h1>
            <div className="flex flex-col w-2/6 text-left mx-auto">
              <form>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  className={`${formClass.nameClass} borderr`}
                  type="text"
                  name="name"
                  id="name"
                  value={formValues.name}
                  onChange={handleChange}
                />
                <p className="text-red-500">{formError.nameErr}</p>
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input
                   className={`${formClass.emailClass} borderr`}
                  type="text"
                  name="email"
                  id="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p className="text-red-500">{formError.emailErr}</p>
                <br />
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                   className={`${formClass.messageClass} borderr`}
                  name="message"
                  id="message"
                  cols="1"
                  rows="5"
                  value={formValues.message}
                  onChange={handleChange}
                ></textarea>
                <br />
                <p className="text-red-500">{formError.messageErr}</p>
              </form>
              <button
                className="w-full text-xs py-2 bg-blue-400 text-white  border-blue-600 border-2"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .values img {
          height: 20px;
        }

        .arrow {
          width: 0;
          height: 0;
          --tw-border-opacity: 1;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-left: 15px solid rgba(220, 38, 38, var(--tw-border-opacity));
        }

        .border-red {
          --tw-border-opacity: 1;
          border-color: rgba(239, 68, 68, var(--tw-border-opacity)) !important;
        }

        .arrow-green {
          width: 0;
          height: 0;
          --tw-border-opacity: 1;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-left: 15px solid rgba(6, 95, 70, var(--tw-border-opacity));
        }

        .ibox {
          width: 22%;
        }

        .borderr {
          --tw-text-opacity: 1;
          border: solid 1px rgba(156, 163, 175, var(--tw-text-opacity));
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
