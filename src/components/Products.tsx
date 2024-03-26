import React, { useEffect, useState } from "react";
import instance from "~/api";
import { Link } from "react-router-dom";
import { getAllproduct } from "~/api/product";
import { SProduct } from "~/interface/product";

const Products = () => {
  const [products, setProducts] = useState<SProduct[]>([]);
  useEffect(() => {
    const getProductTT = async () => {
      try {
        const { data } = await instance.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductTT();
  }, []);

  return (
    <>
      <h2>San pham ban chay</h2>
      {products.map((products: SProduct) => (
        <div key={products.id}>
          <div>
            <Link to={`/product/${products.id}`}>
              <img src={products.thumbnail} alt={products.title} />
              <h5>{products.title}</h5>
              <p>{products.price}</p>
              <p>{products.description}</p>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
