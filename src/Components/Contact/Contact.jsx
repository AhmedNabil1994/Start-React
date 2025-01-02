// libraries
import React, { useContext, useEffect } from "react";
// css file
import style from "./contact.module.css";
// child components
import Title from "../Title/Title";
// context
import { TitleContext } from "../../context/TitleContext";

export default function Contact() {
  const { title, setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("Contact");
  }, []);

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
                    <input
                      type="text"
                      placeholder="userName"
                      className={`form-control ${style.input}`}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-5">
                    <input
                      type="number"
                      placeholder="userAge"
                      className={`form-control ${style.input}`}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-5">
                    <input
                      type="email"
                      placeholder="userEmail"
                      className={`form-control ${style.input}`}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-5">
                    <input
                      type="password"
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
