import getCategories from "../../services/categories";
import ImageCard from "../../components/imageCard";
import getProducts from "../../services/products";
import Dropdown from "./dropdown";
import Loader from "../../components/loader";
import { useState, useEffect } from "react";
import "./styles.css";

const Products = () => {
  const [products, setProducts] = useState();
  const [dropdownValue, setDropdownValue] = useState("");

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response))
      .catch((err) => alert(err));
    getCategories()
      .then((response) => {
        setDropdownValue(response);
      })
      .catch((err) => alert(err));
  }, []);

  const options = [
    { label: "Fruit", value: "fruit" },

    { label: "Vegetable", value: "vegetable" },

    { label: "Meat", value: "meat" },
  ];

  const handleChange = (event) => {
    console.log(dropdownValue);
    setDropdownValue(event.target.value);
  };

  return dropdownValue ? <></> : <></>;

  return (
    <div>
      <div className="productsInputArea">
        <div className="productsInputDiv">
          <input placeholder="Procurando por algum produto?"></input>
        </div>
        <div className="productsInputDiv">
          <Dropdown
            options={dropdownValue}
            placeHolder="Selecione a categoria"
            value={dropdownValue}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="productsListDiv">
        <div className="productsListTitle">
          <h1>Products List</h1>
        </div>
        <div className="imagesDiv">
          {!products ? (
            <Loader />
          ) : (
            products?.map((product) => (
              <a href={`/products/${product.id}`}>
                <ImageCard
                  key={product.id}
                  imagePath={product.image}
                  price={product.price.toFixed(2)}
                  title={product.title}
                />
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
