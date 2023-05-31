import Api from "./api";

export const getProduct = async (id) => {
  const response = await Api.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (product) => {
  const response = await Api.post(`/products`, product);
  return response.data;
};

export default "";
