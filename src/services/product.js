import Api from "./api";

const getProduct = async (id) => {
  const response = await Api.get(`/products/${id}`);
  return response.data;
};

export default getProduct;
