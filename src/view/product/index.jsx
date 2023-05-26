import ImageCard from "../../components/imageCard";
import getProduct from "../../services/product";
import { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import "./styles.css";
import Loader from "../../components/loader";

const Product = () => {
  const [product, setProduct] = useState();
  useEffect(() => {
    getProduct(5)
      .then((response) => setProduct(response))
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
                  value={product.rating.rate}
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
            <div className="productDetails">
              {/* <tr className="small-spacing">
                <td>
                  <b>Marca</b>
                </td>
                <td> Marca</td>
              </tr>
              <tr className="small-spacing">
                <td>
                  <b>Material</b>
                </td>
                <td> Marca</td>
              </tr>
              <tr className="small-spacing">
                <td>
                  <b>Dimensões do produto</b>
                </td>
                <td> Marca</td>
              </tr>
              <tr className="small-spacing">
                <td>
                  <b>Tipo de montagem</b>
                </td>
                <td> Marca</td>
              </tr>
              <tr className="small-spacing">
                <td>
                  <b>Tipo de acabamento</b>
                </td>
                <td> Marca</td>
              </tr> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
