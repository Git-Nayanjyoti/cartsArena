import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Product from "../components/product";
import formatAmount from "../utilities/formatCurrencies";
import Pagination from "../components/pagination";

function CartPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeCart, setActiveCart] = useState(1);
  const [activeCartData, setActiveCartData] = useState([]);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/carts");
      if (response && response.data && response.data.carts) {
        setData(response.data.carts);
        setActiveCartData(response.data.carts[activeCart - 1]);
      } else {
        setError("No data found");
      }
    } catch (err) {
      setError("Error fetching data: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const setActiveCartAndData = (activeCart) => {
    setActiveCart(activeCart);
    setActiveCartData(data[activeCart - 1]);
  };

  return (
    <div className="px-4 py-8 max-w-6xl m-auto">
      {loading && <p>Loading....</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <div>
          <div className="flow-root py-4">
            <div className="float-left font-semibold text-3xl">Carts Arena</div>
            <div className="float-right">
              User ID:{" "}
              <span className="font-semibold">
                {activeCartData.userId}
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Pagination
              activeCart={activeCart}
              limit={data.length}
              setActiveCartAndData={setActiveCartAndData}
              data={data}
            />
          </div>
          <div className="py-6">
            {activeCartData.products.map((item) => (
              <Product product={item} key={item.id} />
            ))}
          </div>
          <div className="flow-root">
            <div className="float-right text-right">
              <div className="flow-root">
                <div className="px-6 float-left">Total products</div>
                <div className="float-right font-semibold">
                  {activeCartData.totalProducts}
                </div>
              </div>
              <div className="flow-root">
                <div className="px-6 float-left">Total quantity</div>
                <div className="float-right font-semibold">
                  {activeCartData.totalQuantity}
                </div>
              </div>
              <div className="flow-root">
                <div className="px-6 float-left">Total</div>
                <div className="float-right font-semibold">
                  {formatAmount("USD", activeCartData.total)}
                </div>
              </div>
              <div className="flow-root">
                <div className="px-6 float-left">Discounted total</div>
                <div className="float-right font-semibold">
                  {formatAmount("USD", activeCartData.discountedTotal)}
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 flow-root">
            <button className="py-2 float-right px-4 bg-red-500 hover:bg-red-700 text-white rounded-md">
              Proceed to payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
