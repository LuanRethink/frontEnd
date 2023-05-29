import setaDireita from "../../assets/setaDireita.svg";
import ImageCard from "../../components/imageCard";
import getProducts from "../../services/products";
import { useState, useEffect, useRef } from "react";
import AboutUs from "./about";
import "./styles.css";

const Home = () => {
  const [exhibitedProducts, setExhibitedProducts] = useState();
  const [seeLessVisible, setSeeLessVisible] = useState();
  const [products, setProducts] = useState();

  const divRef = useRef(null);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
        setExhibitedProducts(response.slice(0, 3));
      })
      .catch((err) => alert(err));
  }, []);

  const seeMore = () => {
    setSeeLessVisible(true);
    setExhibitedProducts(products?.slice(0, exhibitedProducts.length + 3));
  };
  const seeLess = () => {
    const altura = divRef.current.offsetHeight;
    if (!(exhibitedProducts.length - 3 < 3)) {
      setExhibitedProducts(products?.slice(0, exhibitedProducts.length - 3));
      window.scrollTo(0, altura - 800);
    }
    if (exhibitedProducts.length - 3 <= 3) {
      console.log(exhibitedProducts.length - 3 == 3);
      setSeeLessVisible(false);
    }
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
    </>
  );
};

export default Home;
