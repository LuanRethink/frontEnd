import setaDireita from "../../assets/setaDireita.svg";
import getCategories from "../../services/categories";
import { useState, useEffect, useRef } from "react";
import ImageCard from "../../components/imageCard";
import getProducts from "../../services/products";
import AboutUs from "./about";
import "./styles.css";

const Home = () => {
  const [exhibitedProducts, setExhibitedProducts] = useState();
  const [seeLessVisible, setSeeLessVisible] = useState();
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();

  const divRef = useRef(null);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
        setExhibitedProducts(response.slice(0, 3));
      })
      .catch((err) => alert(err));
    getCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((err) => alert(err));
  }, []);

  const seeMore = () => {
    setSeeLessVisible(true);
    setExhibitedProducts(products?.slice(0, exhibitedProducts.length + 3));
  };
  const seeLess = () => {
    const altura = divRef.current;
    if (!(exhibitedProducts.length - 3 < 3)) {
      setExhibitedProducts(products?.slice(0, exhibitedProducts.length - 3));
      window.scrollTo({
        top: altura.offsetHeight - 800,
        behavior: "smooth",
      });
    }
    if (exhibitedProducts.length - 3 <= 3) {
      setSeeLessVisible(false);
    }
  };

  const getFirstImage = (category) => {
    const result = products?.filter((el) => el.category === category);
    return result[0]?.image;
  };

  return (
    <>
      <div className="bestSellingDiv" ref={divRef}>
        <div className="homeInformations">
          <h1>Produtos Mais Vendidos</h1>
          <p> A maneira mais fácil de comprar seus produtos favoritos</p>
        </div>
        <div className="homeProductsListDiv">
          {exhibitedProducts?.map((product) => (
            <a key={product.id} href={`/products/${product.id}`}>
              <ImageCard
                key={product.id}
                imagePath={product.image}
                price={product.price.toFixed(2)}
                title={product.title}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="homeProductsEnd">
        <button type="button" className="seeMore" onClick={seeMore}>
          Ver mais <img src={setaDireita}></img>
        </button>
        <button
          type="button"
          className={`seeLess ${seeLessVisible ? "visible" : "hidden"}`}
          onClick={seeLess}
        >
          Ver menos
        </button>
      </div>
      <AboutUs></AboutUs>
      <div className="categoriessDiv">
        <div className="homeCategories">
          <h1> Categories </h1>
          <p> Find what you are looking for </p>
        </div>
        <div className="homeCategoriesDisplay">
          {categories?.map((category) => (
            <ImageCard
              key={category}
              imagePath={getFirstImage(category)}
              title={category}
              centralizeText={true}
            />
          ))}
        </div>
        <br></br>
        <div className="explore">
          Explore <img src={setaDireita}></img>
        </div>
      </div>
    </>
  );
};

export default Home;
