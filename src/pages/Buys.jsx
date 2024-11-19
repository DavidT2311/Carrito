import React, { useState, useEffect } from "react";
//Styles
import buysModule from "./Buys.module.css";
//Services
import getProducts from "../services/getProducts";
//Components
import Card from "../components/Card";
import PaginationComponent from "../components/Pagination";
//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  addProductToCart,
  deleteProductFromCart,
  clearCart,
} from "../redux/slices/cartSlice";

const Buys = () => {
  //Elementos para la paginacion Productos
  const [currentPageProducts, setCurrentPageProducts] = useState(1);
  const lastIndexSliceProducts = currentPageProducts * 4;
  const firstIndexSliceProducts = lastIndexSliceProducts - 4;

  //Redux
  const { products, loading } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loading == "idle") dispatch(fetchProducts());
  }, [loading, dispatch]);

  return (
    <main className={buysModule.main}>
      <h1 className={buysModule.title}>Productos</h1>
      <section className={buysModule.main_section}>
        <section className={buysModule.main_intern_section}>
          {products
            .map(
              ({ id, title, price, description, category, image, rating }) => (
                <Card
                  key={id}
                  ID={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  rating={rating}
                  action={dispatch}
                />
              )
            )
            .slice(firstIndexSliceProducts, lastIndexSliceProducts)}
        </section>
        <section className={buysModule.pagination}>
          {products.length == 0 ? (
            <span>Cargando...</span>
          ) : (
            <PaginationComponent
              key={0}
              currentPage={currentPageProducts}
              setCurrentPage={setCurrentPageProducts}
              quantityOfProducts={products.length}
              quantityProductsPerPage={4}
            />
          )}
        </section>
      </section>
    </main>
  );
};

export default Buys;
