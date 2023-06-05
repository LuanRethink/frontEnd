import imagePlaceholder from "../../../assets/placeholder.png";
import Dropdown from "../../../components/dropdown/dropdown";
import { createProduct } from "../../../services/product";
import getCategories from "../../../services/categories";
import Button from "../../../components/button";
import { useEffect, useState } from "react";
import "./styles.css";

const NewProducs = () => {
  const [dropdownValue, setDropdownValue] = useState();
  const [categories, setCategories] = useState();
  const [disable, setDisable] = useState(false);

  const value = {
    title: "title",
    description: "description",
    image: "image",
  };

  const [forms, setForms] = useState({
    price: 0,
    rate: 0,
    countRate: 0,
    image: imagePlaceholder,
  });

  useEffect(() => {
    getCategories()
      .then((response) => {
        setDropdownValue(response);
      })
      .catch((err) => alert(err));
  }, []);

  const handleDropdownChange = (category) => {
    setForms((values) => ({ ...values, category: category }));
  };

  const handleSubmit = async () => {
    try {
      setDisable(true);
      new Promise((res, rej) => {
        res(createProduct(forms).then(window.location.reload()));
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForms((values) => ({ ...values, [name]: value }));
    event.preventDefault();
  };

  return (
    <>
      <form className="newProductDiv" onSubmit={handleSubmit}>
        <h1> Cadastro de novo Produto</h1>
        <div className="flex-div">
          <label>Título:</label>
          <input type="text" name={value.title} onChange={handleChange} />
          <label>Descrição:</label>
          <textarea
            type="text"
            id="text-area"
            name={value.description}
            onChange={handleChange}
          />
          <label>Categoria:</label>
          <Dropdown
            children={categories}
            dropdownValue={dropdownValue}
            onChange={handleDropdownChange}
          ></Dropdown>

          <label>URL imagem:</label>
          <input type="text" name={value.image} onChange={handleChange} />
          <div className="buttonsDiv">
            <Button
              title={"Cancelar"}
              type={"reset"}
              background="white"
              visible
            ></Button>
            <Button
              title={"Cadastrar"}
              onclick={handleSubmit}
              type={"submit"}
              visible
              disabled={disable}
            ></Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewProducs;
