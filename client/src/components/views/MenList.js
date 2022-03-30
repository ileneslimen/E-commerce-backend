import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_products } from "../../redux/actions/productActions";
import ProductCard from "./productCard";

function MenList({ search }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_products);
  }, []);
  const products = useSelector((state) => state.productReducer.products);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {products &&
        products
          .filter((el) => el.category == "men")
          .filter((el) => el.title.toUpperCase().includes(search.toUpperCase()))
          .map((product) => <ProductCard product={product}></ProductCard>)}
    </div>
  );
}

export default MenList;
