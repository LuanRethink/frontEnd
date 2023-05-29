import getCategories from "../../services/categories";
import ImageCard from "../../components/imageCard";
import getProducts from "../../services/products";
import Loader from "../../components/loader";
import { useState, useEffect } from "react";
import Dropdown from "./dropdown";
import "./styles.css";

const Products = () => {
  const [products, setProducts] = useState();
  const [dropdownValue, setDropdownValue] = useState();
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
        setFiltered(response);
      })
      .catch((err) => alert(err));
    getCategories()
      .then((response) => {
        setDropdownValue(response);
      })
      .catch((err) => alert(err));
  }, []);

  const filterDropdown = (option) => {
    if (option !== "Selecione a categoria") {
      const result = products?.filter((el) => el.category === option);
      setFiltered(result);
    } else {
      setFiltered(products);
    }
  };

  return !dropdownValue ? (
    <Loader></Loader>
  ) : (
    <div>
      <div className="productsInputArea">
        <div className="productsInputDiv">
          <input placeholder="Procurando por algum produto?"></input>
        </div>
        <div className="productsInputDiv">
          <Dropdown
            children={dropdownValue}
            dropdownValue={dropdownValue}
            onChange={filterDropdown}
          ></Dropdown>
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
            filtered?.map((product) => (
              <a key={product.id} href={`/products/${product.id}`}>
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
