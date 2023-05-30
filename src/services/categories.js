import Api from "./api";

const getCategories = async () => {
  const response = await Api.get("/categories");
  return response.data;
};

export default getCategories;
