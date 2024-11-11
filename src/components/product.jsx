import React from "react";
import formatAmount from "../utilities/formatCurrencies";

function Product(props) {
  return (
    <div className="py-2 lg:py-4 w-full font-poppins">
      <div className="border-2 rounded-md" key={props.product.id}>
        <div className="flex">
          <div className="w-2/5 flex justify-center rounded-l-md">
            <img className="m-auto hover:scale-105 transition-transform ease-in-out" src={props.product.thumbnail}></img>
          </div>
          <div className="w-3/5 px-4 lg:px-8 py-3 lg:py-8 bg-[#F1F2F7]">
            <div className="text-base lg:text-2xl font-semibold">{props.product.title}</div>
            <div className="py-3 lg:py-6 flex gap-14">
              <div className="leading-4 lg:leading">
                Price{" "}
                <span className="text-sm lg:text-base font-semibold">
                  {formatAmount("USD", props.product.price)}
                </span>
              </div>
              <div className="text-sm leading-4 lg:leading-none lg:text-base">
                Quantity{" "}
                <span className="font-semibold">{props.product.quantity}</span>
              </div>
            </div>
            <div className="text-sm lg:text-base">
              Total{" "}
              <span className="font-semibold">
                {formatAmount("USD", props.product.total)}
              </span>
            </div>
            <div className="text-sm lg:text-base">
              Discounted percentage{" "}
              <span className="font-semibold">
                {props.product.discountPercentage}%
              </span>
            </div>
            <hr className="bg-gray-500 h-[2px]" />
            <div className="text-sm lg:text-base py-2">
              Discounted price{" "}
              <span className="font-semibold">
                {formatAmount("USD", props.product.discountedTotal)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
