import React from "react";
import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function Pagination(props) {
  const [gotoCart, setGotoCart] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [placeholder, setPlaceholder] = useState("Cart no");

  const EMPTYERROR = "Enter the cart no.";
  const NOCARTNOFOUND = "No such cart id found!";

  const setErrorAndErrorMessage = (error, errorMessage) => {
    setError(error);
    setErrorMessage(errorMessage || EMPTYERROR);
  };

  const displayError = (errorMessage) => {
    const timeout = 5000;
    setTimeout(() => {
      setError(false);
      setPlaceholder("Cart no");
    }, timeout);
    return <div>{errorMessage}</div>;
  };

  return (
    <section className="flex items-center gap-10">
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            props.activeCart > 1
              ? props.setActiveCartAndData(props.activeCart - 1)
              : props.setActiveCartAndData(props.activeCart);
          }}
        >
          <FaArrowCircleLeft
            className={`${
              props.activeCart === 1
                ? "hover:cursor-not-allowed opacity-40"
                : ""
            } hover:cursor-pointer`}
          />
        </button>
        <div>
          Cart {props.activeCart} of {props.limit}
        </div>

        <button
          onClick={() => {
            props.activeCart <= props.data.length - 1
              ? props.setActiveCartAndData(props.activeCart + 1)
              : props.setActiveCartAndData(props.activeCart);
          }}
        >
          <FaArrowCircleRight
            className={`${
              props.activeCart === props.data.length
                ? "hover:cursor-not-allowed opacity-40"
                : ""
            } hover:cursor-pointer`}
          />
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <div>Go to</div>
        <input
          value={gotoCart || ''}
          className="border-2 w-24 rounded-md px-1 py-1"
          type="number"
          onChange={(e) => setGotoCart(Number(e.target.value))}
          placeholder={placeholder}
        ></input>
        <button
          onClick={() => {
            if (
              gotoCart != null &&
              gotoCart > 0 &&
              gotoCart <= props.data.length
            ) {
              props.setActiveCartAndData(gotoCart);
              setPlaceholder("Cart no");
              setGotoCart(null);
              setErrorAndErrorMessage(false, "");
            } else {
              gotoCart === null || gotoCart === 0
                ? setErrorAndErrorMessage(true, EMPTYERROR)
                : setErrorAndErrorMessage(true, NOCARTNOFOUND);
              setGotoCart(null);
            }
          }}
          className="px-4 py-1.5 text-white rounded-md bg-red-500 hover:bg-red-700"
        >
          Go
        </button>
        {error && displayError(errorMessage)}
      </div>
    </section>
  );
}

export default Pagination;
