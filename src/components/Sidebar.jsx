import React, { useEffect, useState } from "react";
import { FaBagShopping, FaTrash } from "react-icons/fa6";
import { allProducts } from "../../API";

const Sidebar = ({ hide, sethide, cart, quantity, addCart }) => {
  const [products, setallProducts] = useState(allProducts);
  const [price, setPrice] = useState(0);

  console.log(products);

  const grandTotal = () => {
    let p = 0;
    cart.map((item) => (p = p + item.price * item.quantity));

    setPrice(p);
  };

  useEffect(() => {
    grandTotal();
  });

  const deleteItem = (product) => {
    const ind = products.indexOf(product);
    console.log(ind);
    const arr = products;
    arr[ind].pickItem = false;
    setallProducts([...arr]);

    const updateCart = cart.filter((item) => item.id !== product.id);
    addCart(updateCart);
  };
  return (
    <div className={`sidebar ${hide ? "" : "show"} h-100`}>
      <div className="container container-fluid h-100 bg-primary">
        <div className="row bg-light py-3">
          <div className="d-flex justify-content-between">
            <h5>
              <FaBagShopping /> {cart.length} Item
            </h5>

            <button
              onClick={() => sethide(true)}
              className="btn btn-outline-primary"
            >
              Close
            </button>
          </div>
        </div>

        {cart.map((item, i) => {
          return (
            <div key={i} className="cartItem">
              <div className="row">
                <div className="col-5">
                  <img className="img-fluid" src={item.img} alt="" />
                </div>
                <div className="col-7">
                  <h5 className="text-light">{item.itemName}</h5>
                  <h6 className="text-light">{item.price} BDT</h6>

                  <div className="quantity">
                    <button
                      onClick={() => quantity(item, -1)}
                      className="btn btn-secondary"
                    >
                      -
                    </button>
                    <input type="text" value={item.quantity} name="" id="" />
                    <button
                      onClick={() => quantity(item, 1)}
                      className="btn btn-secondary"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-light fw-bold subtotal">
                    {item.price * item.quantity} BDT
                  </p>

                  <button className="delete" onClick={() => deleteItem(item)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div className="grandTotal">
          <h5 className="text-primary">Place Order {price} BDT</h5>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
