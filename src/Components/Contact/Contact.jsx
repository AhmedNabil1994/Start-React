// libraries
import React, { useContext, useEffect, useState } from "react";
// css file
import style from "./contact.module.css";
// child components
import Title from "../Title/Title";
// context
import { TitleContext } from "../../context/TitleContext";

export default function Contact() {
  const { title, setTitle } = useContext(TitleContext);
  const [labelsState, setLabelsState] = useState({});

  useEffect(() => {
    setTitle("Contact");
  }, []);
  const handleChannge = ({ target: { id, value } }) => {
    console.log("work");
    
    // implicit distructuring of id and value
    setLabelsState((prev) => ({
      ...prev,
      /* 
        object key based of name of input id
        the value is a condition based on the input is empty or not
          true if not empty input value
          to use it in conditional rendering
      */
      [id]: value !== "",
    }));
  };

  return (
    <section className="py-5" style={{ marginTop: "106px" }}>
      <Title title={`${title} section`} color="#2c3e50" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form className="form mt-5">
              <div className="row">
                <div className="col-12">
                  <div className="mb-5">
                    <label
                      className={`${style.label} ${
                        labelsState.userName ? style.show : style.hide
                      }`}
                      htmlFor="userName"
                    >
                      userName:
                    </label>
                    <input
                    /* 
                      onChange={(e)=>handleChannge(e)} works but
                      the below more clean and no need to pass
                      evebt object
                    */ 
                      onChange={handleChannge}
                      type="text"
                      id="userName"
                      placeholder="userName"
                      className={`form-control ${style.input}`}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-5">
                    <label
                      className={`${style.label} ${
                        labelsState.userAge ? style.show : style.hide
                      }`}
                      htmlFor="userAge"
                    >
                      userAge:
                    </label>
                    <input
                      onChange={handleChannge}
                      type="number"
                      id="userAge"
                      placeholder="userAge"
                      className={`form-control ${style.input}`}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-5">
                    <label
                      className={`${style.label} ${
                        labelsState.userEmail ? style.show : style.hide
                      }`}
                      htmlFor="userEmail"
                    >
                      userEmail:
                    </label>
                    <input
                      onChange={handleChannge}
                      type="email"
                      id="userEmail"
                      placeholder="userEmail"
                      className={`form-control ${style.input}`}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-5">
                    <label
                      className={`${style.label} ${
                        labelsState.userPassword ? style.show : style.hide
                      }`}
                      htmlFor="userPassword"
                    >
                      userPassword:
                    </label>
                    <input
                      onChange={handleChannge}
                      type="password"
                      id="userPassword"
                      placeholder="userPassword"
                      className={`form-control ${style.input}`}
                    />
                  </div>
                </div>
                <div className="col-sm-4 col-md-5 col-lg-4">
                  <button className={`btn ${style.btn}`}>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
