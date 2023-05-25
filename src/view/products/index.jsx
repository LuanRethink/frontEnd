import ImageCard from "../../components/imageCard";
import windows from "../../assets/windows.webp";
import "./styles.css";
import { useState, useEffect } from "react";
import getProducts from "../../services/products";

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response))
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      {/* <div className="productsInputArea">
        <div className="productsInputDiv">
          <input placeholder="Procurando por algum produto?"></input>
        </div>
        <div className="productsInputDiv">
          <input placeholder="Selecione a categoria"></input>
        </div>
      </div> */}
      <div className="productsListDiv">
        <div className="productsListTitle">
          <h1>Products List</h1>
        </div>
        <div className="imagesDiv">
          {products?.map((product) => (
            <ImageCard
              key={product.id}
              imagePath={product.image}
              price={product.price.toFixed(2)}
              title={product.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
