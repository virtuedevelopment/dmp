"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./customize.module.css";

//utitlity imports
import { LoaderCircle, ChevronRight, ChevronLeft } from "lucide-react";
import custom_options from "@/_data/Custom";
import Dropdown from "./(customize_components)/Dropdown";
import OptionView from "./(customize_components)/OptionView";

//component imports

//component breakdown
/* 

    The custom suit designer will have a multistate form 
    consisting of all the customizations needed for a suit as
    well as the providing a model of the suit being customized.

    The first state defined will be the USER INFORMATION:
    - First name
    - Last Name
    - Phone Number
    - Address 
    - Email
    - Optional Message of why you need the suit


    The second state defined will be the jacket trouser and material  customization

    The final State will be the sizing

    The submit function will push the infomation as an SMTP API sending the provider and client an email

*/

//First state user information
const Welcome = ({ next, req, setReq }) => {
  //User information states
  const router = useRouter();
  const [firstname, setFirstname] = useState(
    req.personal_information.firstname || ""
  );
  const [lastname, setLastname] = useState(
    req.personal_information.lastname || ""
  );
  const [email, setEmail] = useState(req.personal_information.email || "");
  const [reference, setReference] = useState(
    req.personal_information.reference || ""
  );
  const [phone, setPhone] = useState(req.personal_information.phone || "");
  const [address, setAddress] = useState(
    req.personal_information.address || ""
  );
  const [message, setMessage] = useState(
    req.personal_information.message || ""
  );

  //error states
  const [formErrors, setFormErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    address: false,
  });

  //utils
  const previous = () => {
    router.push("/catalog");
  };

  const validate = (e) => {
    e.preventDefault();

    let errors = {
      firstname: !firstname,
      lastname: !lastname,
      email: !email || !/\S+@\S+\.\S+/.test(email), // Simple email regex
      address: !address,
    };

    setFormErrors(errors);

    if (Object.values(errors).every((error) => !error)) {
      // No errors, proceed to the next step
      setReq((prevReq) => ({
        ...prevReq,
        personal_information: {
          firstname,
          lastname,
          email,
          reference,
          phone,
          address,
          message,
        },
      }));
      next();
    } else {
      alert("Please correct the errors in the form.");
    }
  };

  return (
    <section className={styles.Welcome_Container}>
      <div className={styles.welcomebox}>
        <h2>Custom Suit Experience.</h2>
        <small>
          Welcome to our custom suit experience. Here you can get a chance to
          create and style the suit you are looking to purchase from us. Lets
          start with some background information.
        </small>

        <form onSubmit={validate}>
          <input
            className={formErrors.firstname === true ? styles.formError : ""}
            type="text"
            placeholder="first name*"
            onChange={(e) => {
              setFirstname(e.target.value);
              setFormErrors((prevState) => ({
                ...prevState,
                firstname: false,
              }));
            }}
          />
          <input
            className={formErrors.lastname === true ? styles.formError : ""}
            type="text"
            placeholder="lastname*"
            onChange={(e) => {
              setLastname(e.target.value);
              setFormErrors((prevState) => ({ ...prevState, lastname: false }));
            }}
          />
          <input
            className={formErrors.email === true ? styles.formError : ""}
            type="text"
            placeholder="Email Address*"
            onChange={(e) => {
              setEmail(e.target.value);
              setFormErrors((prevState) => ({ ...prevState, email: false }));
            }}
          />
          <input
            className={formErrors.address === true ? styles.formError : ""}
            type="text"
            placeholder="Address*"
            onChange={(e) => {
              setAddress(e.target.value);
              setFormErrors((prevState) => ({ ...prevState, address: false }));
            }}
          />

          <input
            type="text"
            placeholder="phone number"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="How did you hear about us"
            onChange={(e) => setReference(e.target.value)}
          />

          <textarea
            placeholder="Optional Message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <div className={styles.buttonbox}>
            <button
              type="button"
              onClick={previous}
              className={styles.previous}
            >
              {" "}
              <ChevronLeft /> Catalog
            </button>
            <button type="submit" className={styles.next}>
              {" "}
              Next <ChevronRight />{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

//Second state jacket
const Editor = ({ back, next, req, setReq }) => {
  //jacket style
  const [style, setStyle] = useState(custom_options.jacket.style[0]);
  const [lining, setLining] = useState(custom_options.jacket.lining[0]);
  const [button, setButton] = useState(custom_options.jacket.button[0]);
  const [lapel, setLapel] = useState(custom_options.jacket.lapel[0]);
  const [canvas, setCanvas] = useState(custom_options.jacket.canvas[0]);

  return (
    <section className={styles.Editor_Container}>
      <div className={styles.view}>
        {style && <OptionView option={style} />}
        {lining && <OptionView option={lining} />}
        {button && <OptionView option={button} />}
        {lapel && <OptionView option={lapel} />}
        {canvas && <OptionView option={canvas} />}
      </div>

      <aside className={styles.selector}>
        <h3>Jacket:</h3>
        <Dropdown
          options={custom_options.jacket.style}
          state={setStyle}
          icon={null}
          title={"Style"}
        />

        <Dropdown
          options={custom_options.jacket.lining}
          state={setLining}
          icon={null}
          title={"Lining"}
        />
        <Dropdown
          options={custom_options.jacket.button}
          state={setButton}
          icon={null}
          title={"Buttons"}
        />
        <Dropdown
          options={custom_options.jacket.lapel}
          state={setLapel}
          icon={null}
          title={"Lapel"}
        />
        <Dropdown
          options={custom_options.jacket.canvas}
          state={setCanvas}
          icon={null}
          title={"Canvas"}
        />

        <div className={styles.buttonbox}>
          <button type="button" onClick={back} className={styles.previous}>
            <ChevronLeft /> Back
          </button>

          <button type="submit" className={styles.next}>
            Confirm <ChevronRight />
          </button>
        </div>
      </aside>
    </section>
  );
};

//Third state results
const finished = ({}) => {};

//Loading state
const Loading = () => {
  return (
    <div className={styles.loading}>
      <LoaderCircle />
      <p>Loading Please Wait...</p>
    </div>
  );
};

export default function CustomizeSuit() {
  //request body
  const [req, setReq] = useState({ personal_information: {} }); //multistates will add information to forms

  //multistate utilities
  const [currentForm, setCurrentForm] = useState(2); // 1 -> 3
  const previous = () => {
    setCurrentForm(currentForm - 1);
  };
  const next = () => {
    setCurrentForm(currentForm + 1);
  };

  //general utilities
  const [loading, setLoading] = useState(false);

  return (
    <main className={styles.main}>
      {/* Loading State */}
      {loading && <Loading />}

      {/* Multistate */}
      {currentForm === 1 && <Welcome next={next} req={req} setReq={setReq} />}
      {currentForm === 2 && (
        <Editor next={next} back={previous} req={req} setReq={setReq} />
      )}
    </main>
  );
}
