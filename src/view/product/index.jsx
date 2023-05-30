import ImageCard from "../../components/imageCard";
import getProduct from "../../services/product";
import Loader from "../../components/loader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import "./styles.css";

const Product = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    getProduct(id)
      .then((response) => setProduct(...response))
      .catch((err) => alert(err));
  }, []);

  return !product ? (
    <Loader />
  ) : (
    <>
      <div className="productDiv">
        <br></br>
        <p>{product.title}</p>
        <div className="productContent">
          <ImageCard imagePath={product.image}></ImageCard>
          <div className="productInformation">
            <div className="clientRating">
              <p>
                <b>Nome:</b> {product.title}
              </p>
              <p>
                <b>Categoria:</b> {product.category}
              </p>
              <div className="ratingDiv">
                <Rating
                  name="read-only"
                  value={parseFloat(product.rating.rate)}
                  readOnly
                  precision={0.1}
                />
                <span>{product.rating.count} avaliações de clientes</span>
              </div>
            </div>
            <div className="productPrice">
              <h1>R$ {product.price.toFixed(2)}</h1>
              <b>Descrição do Produto:</b>
              <p>
                <b>{product.description}</b>
              </p>
            </div>
            <div className="productDetails"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
