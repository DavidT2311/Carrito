const getProducts = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const json = data.json();
  return json;
};

export default getProducts;
