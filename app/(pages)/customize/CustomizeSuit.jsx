"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./customize.module.css";

//utitlity imports
import {
  LoaderCircle,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Ban,
  CirclePlus,
} from "lucide-react";
import Link from "next/link";
import custom_options from "@/_data/Custom";
import Dropdown from "./(customize_components)/Dropdown";

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
const Welcome = ({ next, personalInformation, setPersonalInformation }) => {
  const router = useRouter();
  const [firstname, setFirstname] = useState(
    personalInformation.firstname || ""
  );
  const [lastname, setLastname] = useState(personalInformation.lastname || "");
  const [email, setEmail] = useState(personalInformation.email || "");
  const [reference, setReference] = useState(
    personalInformation.reference || ""
  );
  const [phone, setPhone] = useState(personalInformation.phone || "");
  const [address, setAddress] = useState(personalInformation.address || "");
  const [message, setMessage] = useState(personalInformation.message || "");

  //error states
  const [formErrors, setFormErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    address: false,
  });

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
      setPersonalInformation({
        firstname,
        lastname,
        email,
        reference,
        phone,
        address,
        message,
      });
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
            value={firstname}
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
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
              setFormErrors((prevState) => ({ ...prevState, lastname: false }));
            }}
          />
          <input
            className={formErrors.email === true ? styles.formError : ""}
            type="text"
            placeholder="Email Address*"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setFormErrors((prevState) => ({ ...prevState, email: false }));
            }}
          />
          <input
            className={formErrors.address === true ? styles.formError : ""}
            type="text"
            placeholder="Address*"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setFormErrors((prevState) => ({ ...prevState, address: false }));
            }}
          />

          <input
            type="text"
            placeholder="phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="How did you hear about us"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />

          <textarea
            placeholder="Optional Message"
            value={message}
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
const Editor = ({
  back,
  next,
  style,
  setStyle,
  lining,
  setLining,
  button,
  setButton,
  lapel,
  setLapel,
  canvas,
  setCanvas,
  waistband,
  setWaistband,
  pocket,
  setPocket,
  pleat,
  setPleat,
  hem,
  setHem,
  trouserButton,
  setTrouserButton,
  waistcoat,
  setWaistcoat,
  closure,
  setClosure,
  waistcoatStyle,
  setWaistcoatStyle,
  waistcoatPocket,
  setWaistcoatPocket,
  backside,
  setBackside,
  waistcoatLining,
  setWaistcoatLining,
  waistcoatButton,
  setWaistcoatButton,
  jacketMaterial,
  setJacketMaterial,
  trouserMaterial,
  setTrouserMaterial,
  jacketSizing,
  setJacketSizing,
  trouserSizing,
  setTrouserSizing,
  jacketColor,
  setJacketColor,
  trouserColor,
  setTrouserColor,
}) => {
  //toggle buttons
  const [jacketToggle, setJacketToggle] = useState(false);
  const [trouserToggle, setTrouserToggle] = useState(false);
  const [materialToggle, setMaterialToggle] = useState(false);

  const trigger = (dropdown) => {
    if (dropdown === "jacket") {
      setJacketToggle(!jacketToggle);
    } else if (dropdown === "trouser") {
      setTrouserToggle(!trouserToggle);
    } else if (dropdown === "material") {
      setMaterialToggle(!materialToggle);
    }
  };

  const toggle_waistcoat = () => {
    setWaistcoat(!waistcoat);
  };

  const handleInputChange = (e, type, field) => {
    const value = e.target.value;

    if (type === "jacket") {
      setJacketSizing({
        ...jacketSizing,
        [field]: value,
      });
    } else if (type === "trouser") {
      setTrouserSizing({
        ...trouserSizing,
        [field]: value,
      });
    }
  };

  return (
    <section className={styles.Editor_Container}>
      <aside className={styles.selector}>
        <h1>Customization Options:</h1>

        <div className={styles.custom_info}>
          <big>Welcome to Our Suit Customization Station</big>
          <p>
            At our customization station, you have the opportunity to
            personalize every detail of your suit, including sizing and
            additional features. Should you require a feature not listed here,
            you are welcome to submit a custom order by emailing us at{" "}
            <a href="mailto:dmpcollections@gmail.com">
              dmpcollections@gmail.com
            </a>
            . Our team will gladly assist in incorporating your desired details.
          </p>

          <p>
            The base price for our suits is <span> $799.99 CAD</span>. Your
            final quote will be adjusted based on the additional styles and
            features you select. Enjoy the customization process!
          </p>
        </div>

        <h3>Suit Styling:</h3>

        <button
          type="button"
          onClick={() => trigger("jacket")}
          className={styles.selector_dropdown}
        >
          <p>Jacket Customization</p>
          {jacketToggle ? (
            <ChevronDown strokeWidth={1.5} />
          ) : (
            <ChevronUp strokeWidth={1.5} />
          )}
        </button>

        {jacketToggle && (
          <>
            <Dropdown
              options={custom_options.jacket.style}
              state={setStyle}
              selected={style}
              title={"Style"}
            />

            <Dropdown
              options={custom_options.jacket.lining}
              state={setLining}
              selected={lining}
              title={"Lining"}
            />
            <Dropdown
              options={custom_options.jacket.button}
              state={setButton}
              selected={button}
              title={"Buttons"}
            />
            <Dropdown
              options={custom_options.jacket.lapel}
              state={setLapel}
              selected={lapel}
              title={"Lapel"}
            />
            <Dropdown
              options={custom_options.jacket.canvas}
              state={setCanvas}
              selected={canvas}
              title={"Canvas"}
            />
          </>
        )}

        <button
          type="button"
          onClick={() => trigger("trouser")}
          className={styles.selector_dropdown}
        >
          <p>Trouser Customization</p>
          {trouserToggle ? (
            <ChevronDown strokeWidth={1.5} />
          ) : (
            <ChevronUp strokeWidth={1.5} />
          )}
        </button>

        {trouserToggle && (
          <>
            <Dropdown
              options={custom_options.trouser.waistband}
              state={setWaistband}
              selected={waistband}
              icon={null}
              title={"Waistband"}
            />
            <Dropdown
              options={custom_options.trouser.pocket}
              state={setPocket}
              selected={pocket}
              icon={null}
              title={"Pockets"}
            />
            <Dropdown
              options={custom_options.trouser.pleat}
              state={setPleat}
              selected={pleat}
              icon={null}
              title={"Pleat"}
            />
            <Dropdown
              options={custom_options.trouser.hem}
              state={setHem}
              selected={hem}
              icon={null}
              title={"Hem Finishing"}
            />

            <Dropdown
              options={custom_options.trouser.button}
              state={setTrouserButton}
              selected={trouserButton}
              icon={null}
              title={"Buttons"}
            />
          </>
        )}

        <h3>Additional Styling:</h3>

        <button
          type="button"
          onClick={() => trigger("material")}
          className={styles.selector_dropdown}
        >
          <p>Material & Measurements</p>
          {materialToggle ? (
            <ChevronDown strokeWidth={1.5} />
          ) : (
            <ChevronUp strokeWidth={1.5} />
          )}
        </button>

        {materialToggle && (
          <>
            <Dropdown
              options={custom_options.materials}
              state={setJacketMaterial}
              selected={jacketMaterial}
              title={"Jacket Material"}
            />
            <Dropdown
              options={custom_options.colors}
              state={setJacketColor}
              selected={jacketColor}
              title={"Jacket Color"}
            />

            <Dropdown
              options={custom_options.materials}
              state={setTrouserMaterial}
              selected={trouserMaterial}
              title={"Trouser Material"}
            />
            <Dropdown
              options={custom_options.colors}
              state={setTrouserColor}
              selected={trouserColor}
              title={"Trouser Color"}
            />

            <h4>Jacket Sizing:</h4>

            <div className={styles.inputbox}>
              <input
                type="text"
                value={jacketSizing.sleeve}
                placeholder="Sleeve Length (inches)"
                onChange={(e) => handleInputChange(e, "jacket", "sleeve")}
              />
            </div>

            <div className={styles.inputbox}>
              <input
                type="text"
                value={jacketSizing.shoulder}
                placeholder="Shoulder Width (inches)"
                onChange={(e) => handleInputChange(e, "jacket", "shoulder")}
              />
            </div>

            <div className={styles.inputbox}>
              <input
                type="text"
                value={jacketSizing.chest}
                placeholder="Chest Around (inches)"
                onChange={(e) => handleInputChange(e, "jacket", "chest")}
              />
            </div>

            <div className={styles.inputbox}>
              <input
                type="text"
                value={jacketSizing.stomach}
                placeholder="Stomach (inches)"
                onChange={(e) => handleInputChange(e, "jacket", "stomach")}
              />
            </div>

            <h4>Trouser Sizing:</h4>

            <div className={styles.inputbox}>
              <input
                type="text"
                value={trouserSizing.leg}
                placeholder="Leg Length (inches)"
                onChange={(e) => handleInputChange(e, "trouser", "leg")}
              />
            </div>

            <div className={styles.inputbox}>
              <input
                type="text"
                value={trouserSizing.waist}
                placeholder="Pants Waist (inches)"
                onChange={(e) => handleInputChange(e, "trouser", "waist")}
              />
            </div>

            <div className={styles.inputbox}>
              <input
                type="text"
                value={trouserSizing.hips}
                placeholder="Hips (inches)"
                onChange={(e) => handleInputChange(e, "trouser", "hips")}
              />
            </div>

            <div className={styles.inputbox}>
              <input
                type="text"
                value={trouserSizing.thigh}
                placeholder="Thigh (inches)"
                onChange={(e) => handleInputChange(e, "trouser", "thigh")}
              />
            </div>
          </>
        )}

        <button
          type="button"
          onClick={toggle_waistcoat}
          id={styles.waistcoat_toggle}
        >
          {waistcoat ? (
            <>
              <Ban strokeWidth={3} /> <p>Waistcoat</p>
            </>
          ) : (
            <>
              <CirclePlus strokeWidth={3} />
              <p>Waistcoat</p>
            </>
          )}
        </button>

        {waistcoat && (
          <>
            <h3>Waistcoat:</h3>
            <Dropdown
              options={custom_options.waistcoat.closure}
              state={setClosure}
              selected={closure}
              title={"Closure"}
            />

            <Dropdown
              options={custom_options.waistcoat.style}
              state={setWaistcoatStyle}
              selected={waistcoatStyle}
              title={"Style"}
            />

            <Dropdown
              options={custom_options.waistcoat.pocket}
              state={setWaistcoatPocket}
              selected={waistcoatPocket}
              title={"Pocket"}
            />

            <Dropdown
              options={custom_options.waistcoat.back}
              state={setBackside}
              selected={backside}
              title={"Back"}
            />

            <Dropdown
              options={custom_options.waistcoat.lining}
              state={setWaistcoatLining}
              selected={waistcoatLining}
              title={"Lining"}
            />

            <Dropdown
              options={custom_options.waistcoat.button}
              state={setWaistcoatButton}
              selected={waistcoatButton}
              title={"Buttons"}
            />
          </>
        )}

        <div className={styles.buttonbox}>
          <button type="button" onClick={back} className={styles.previous}>
            <ChevronLeft /> Back
          </button>

          <button type="button" onClick={next} className={styles.next}>
            Confirm <ChevronRight />
          </button>
        </div>
      </aside>
    </section>
  );
};

//Third state results
const ThankYou = ({}) => {
  return (
    <section className={styles.ThankYou}>
      <img src="/favicon.ico" alt="" />
      <h2>Thank you for your order!</h2>
      <p>
        We are proccessing your request and will get back to you via email.
        Please feel free to check our <Link href={"/catalog"}>catalog</Link>, or
        you can learn more <Link href={"/about"}>about us</Link>. DMP
        Collections is happy to be of service.
      </p>
    </section>
  );
};

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
  const [personalInformation, setPersonalInformation] = useState({});
  const [style, setStyle] = useState(custom_options.jacket.style[0]);
  const [lining, setLining] = useState(custom_options.jacket.lining[0]);
  const [button, setButton] = useState(custom_options.jacket.button[0]);
  const [lapel, setLapel] = useState(custom_options.jacket.lapel[0]);
  const [canvas, setCanvas] = useState(custom_options.jacket.canvas[0]);
  const [waistband, setWaistband] = useState(
    custom_options.trouser.waistband[0]
  );
  const [pocket, setPocket] = useState(custom_options.trouser.pocket[0]);
  const [pleat, setPleat] = useState(custom_options.trouser.pleat[0]);
  const [hem, setHem] = useState(custom_options.trouser.hem[0]);
  const [trouserButton, setTrouserButton] = useState(
    custom_options.trouser.button[0]
  );
  const [waistcoat, setWaistcoat] = useState(false);
  const [closure, setClosure] = useState(custom_options.waistcoat.closure[0]);
  const [waistcoatStyle, setWaistcoatStyle] = useState(
    custom_options.waistcoat.style[0]
  );
  const [waistcoatPocket, setWaistcoatPocket] = useState(
    custom_options.waistcoat.pocket[0]
  );
  const [backside, setBackside] = useState(custom_options.waistcoat.back[0]);
  const [waistcoatLining, setWaistcoatLining] = useState(
    custom_options.waistcoat.lining[3]
  );
  const [waistcoatButton, setWaistcoatButton] = useState(
    custom_options.waistcoat.button[0]
  );
  const [jacketMaterial, setJacketMaterial] = useState(
    custom_options.materials[0]
  );
  const [trouserMaterial, setTrouserMaterial] = useState(
    custom_options.materials[0]
  );
  const [jacketSizing, setJacketSizing] = useState({
    sleeve: "",
    shoulder: "",
    chest: "",
    stomach: "",
  });
  const [trouserSizing, setTrouserSizing] = useState({
    leg: "",
    waist: "",
    hips: "",
    thigh: "",
  });

  const [jacketColor, setJacketColor] = useState(custom_options.colors[3]);
  const [trouserColor, setTrouserColor] = useState(custom_options.colors[3]);

  const [currentForm, setCurrentForm] = useState(1);
  const [loading, setLoading] = useState(false);

  const previous = () => {
    setCurrentForm(currentForm - 1);
  };

  const next = () => {
    setCurrentForm(currentForm + 1);
  };

  const submit = async () => {
    setLoading(true);

    const customSuit = {
      jacket: {
        style,
        lining,
        button,
        lapel,
        canvas,
      },
      trousers: {
        waistband,
        pocket,
        pleat,
        hem,
        trouserButton,
      },
      waistcoat: waistcoat
        ? {
            closure,
            waistcoatStyle,
            waistcoatPocket,
            backside,
            waistcoatLining,
            waistcoatButton,
          }
        : undefined,
      options: {
        jacketMaterial,
        trouserMaterial,
        jacketSizing,
        trouserSizing,
        jacketColor,
        trouserColor,
      },
    };

    const req = {
      personalInformation,
      customSuit,
    };

    try {
      const response = await fetch("/api/custom-suit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Email sent successfully");
        setLoading(false);
        setCurrentForm(3);
      } else {
        console.error("Failed to send email:", result.error);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      {loading && <Loading />}

      {!loading && currentForm === 1 && (
        <Welcome
          next={next}
          personalInformation={personalInformation}
          setPersonalInformation={setPersonalInformation}
        />
      )}
      {!loading && currentForm === 2 && (
        <Editor
          next={submit}
          back={previous}
          style={style}
          setStyle={setStyle}
          lining={lining}
          setLining={setLining}
          button={button}
          setButton={setButton}
          lapel={lapel}
          setLapel={setLapel}
          canvas={canvas}
          setCanvas={setCanvas}
          waistband={waistband}
          setWaistband={setWaistband}
          pocket={pocket}
          setPocket={setPocket}
          pleat={pleat}
          setPleat={setPleat}
          hem={hem}
          setHem={setHem}
          trouserButton={trouserButton}
          setTrouserButton={setTrouserButton}
          waistcoat={waistcoat}
          setWaistcoat={setWaistcoat}
          closure={closure}
          setClosure={setClosure}
          waistcoatStyle={waistcoatStyle}
          setWaistcoatStyle={setWaistcoatStyle}
          waistcoatPocket={waistcoatPocket}
          setWaistcoatPocket={setWaistcoatPocket}
          backside={backside}
          setBackside={setBackside}
          waistcoatLining={waistcoatLining}
          setWaistcoatLining={setWaistcoatLining}
          waistcoatButton={waistcoatButton}
          setWaistcoatButton={setWaistcoatButton}
          jacketMaterial={jacketMaterial}
          setJacketMaterial={setJacketMaterial}
          trouserMaterial={trouserMaterial}
          setTrouserMaterial={setTrouserMaterial}
          jacketSizing={jacketSizing}
          setJacketSizing={setJacketSizing}
          trouserSizing={trouserSizing}
          setTrouserSizing={setTrouserSizing}
          jacketColor={jacketColor}
          setJacketColor={setJacketColor}
          trouserColor={trouserColor}
          setTrouserColor={setTrouserColor}
        />
      )}
      {!loading && currentForm === 3 && <ThankYou />}
    </main>
  );
}
