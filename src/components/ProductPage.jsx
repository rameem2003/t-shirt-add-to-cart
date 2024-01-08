import React, { useState } from "react";
import { allProducts } from "../../API";

const ProductPage = ({ addtoCart }) => {
  const [products, setallProducts] = useState(allProducts);
  const handleCart = (item) => {
    const ind = products.indexOf(item);
    const arr = products;
    arr[ind].pickItem = true;
    setallProducts([...arr]);

    // let object = { ...item, pickItem: true };
    addtoCart(item);
  };

  return (
    <div className="productPage">
      <div className="container">
        <h1 className="text-center py-4">All Products</h1>

        <div className="row">
          {products.map((product, i) => {
            return (
              <div key={i} className="card mx-2" style={{ width: "18rem" }}>
                <img src={product.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{product.itemName}</h5>
                  <h6>{product.price} BDT</h6>
                  <p className="card-text">{product.about}</p>

                  {product.pickItem ? (
                    <button href="#" className="btn btn-secondary w-100 mb-2">
                      Added to cart
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCart(product)}
                      href="#"
                      className="btn btn-primary w-100 mb-2"
                    >
                      Add to Order
                    </button>
                  )}

                  <button href="#" className="btn btn-warning w-100">
                    Compare
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
