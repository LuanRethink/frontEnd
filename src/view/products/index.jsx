import Header from "../../layout/header";
import Footer from "../../layout/footer";
import ImageCard from "../../components/imageCard";
import windows from "../../assets/windows.webp";
import "./styles.css";

const Products = () => {
  return (
    <>
      <Header />
      <div className="productsInputArea">
        <div>
          <input placeholder="Procurando por algum produto?"></input>
        </div>
        <div>
          <input placeholder="Selecione a categoria"></input>
        </div>
      </div>
      <div className="productsListTitle">
        <h2>Products List</h2>
      </div>
      <div className="imagesDiv">
        <ImageCard imagePath={windows} price="122,3" title="Irmão"></ImageCard>
        <ImageCard imagePath={windows} price="122,3" title="Irmão"></ImageCard>
        <ImageCard imagePath={windows} price="122,3" title="Irmão"></ImageCard>
        <ImageCard imagePath={windows} price="122,3" title="Irmão"></ImageCard>
        <ImageCard imagePath={windows} price="122,3" title="Irmão"></ImageCard>
        <ImageCard imagePath={windows} price="122,3" title="Irmão"></ImageCard>
      </div>

      <Footer />
    </>
  );
};

export default Products;
