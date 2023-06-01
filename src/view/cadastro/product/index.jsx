import Dropdown from "../../../components/dropdown/dropdown";
import { createProduct } from "../../../services/product";
import getCategories from "../../../services/categories";
import Button from "../../../components/button";
import { useEffect, useState } from "react";
import "./styles.css";

const NewProducs = () => {
  const [dropdownValue, setDropdownValue] = useState();
  const [categories, setCategories] = useState();

  const value = {
    title: "title",
    description: "description",
    image: "image",
  };

  const [forms, setForms] = useState({
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
    rate: 0,
    countRate: 0,
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
    console.log(forms);
  };

  const handleSubmit = async (event) => {
    try {
      await createProduct(forms).then((res) => console.log(res));
    } catch (error) {
      throw new Error(error);
    }
    event.preventDefault();
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
            ></Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewProducs;
