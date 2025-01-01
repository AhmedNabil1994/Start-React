// libraries
import React from "react";
// css file
import style from "./modal.module.css";

export default function Modal({ show, close, image }) {
  {
    /* 
      another syntax (new and easy!!)
        remove the fragment <></> and the {} that carry the ternary
        then write the condition easily 
        return (show && ... complete the code)
    */
  }
  return (
    <>
      {show && (
        <section
          className={`bg-primary bg-opacity-25 ${style.modal}`}
          onClick={() => close()}
        >
          <div className="text-center">
            <img
              src={image}
              alt="image"
              className={style.img}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </section>
      )}
    </>
  );
}
