import Dropdown from "../../components/dropdown/dropdown";
import getCategories from "../../services/categories";
import ImageCard from "../../components/imageCard";
import getProducts from "../../services/products";
import Search from "../../components/search";
import Loader from "../../components/loader";
import { useState, useEffect } from "react";
import "./styles.css";

const Products = () => {
  const productPlaceHolder = "Procurando por algum produto?";

  const [inputValue, setInputValue] = useState(productPlaceHolder);
  const [dropdownValue, setDropdownValue] = useState();
  const [products, setProducts] = useState();
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

  const filterValue = () => {
    if (inputValue !== productPlaceHolder) {
      const result = filtered?.filter((products) =>
        products.title.includes(inputValue)
      );
      setFiltered(result);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return !dropdownValue ? (
    <Loader />
  ) : (
    <div>
      <div className="productsInputArea">
        <Search
          placeholder={inputValue}
          onChange={handleChange}
          onClick={filterValue}
        ></Search>

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
