import Api from "./api";

const getProducts = async () => {
  const response = await Api.get("/products");
  return response.data;
};

export default getProducts;
