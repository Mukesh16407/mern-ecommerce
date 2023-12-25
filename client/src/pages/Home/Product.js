import React, { useEffect, useState } from "react";
import { SingleProduct } from "../../Components/card/SingleProduct";
import { useParams } from "react-router-dom";
import { getProduct, productStar } from "../../functions/product";
import { useSelector } from "react-redux";

const Product = () => {
  const [product, setProduct] = useState({});
  const [star, setStar] = useState(0);
  const { user } = useSelector((state) => state.auth);
  const { slug } = useParams();

  console.log(product, "product");
  useEffect(() => {
    loadSingleProduct();
  }, [slug]);

  const loadSingleProduct = () =>
    getProduct(slug).then((res) => setProduct(res.data));

  const onStarClick = (newRating, name) => {
    debugger;
    setStar(newRating);
    //console.table(newRating, name);
    productStar(name, star, user.token).then((res) => {
      console.log("rating clicked", res.data);
      loadSingleProduct(); // if you want to show updated rating in real time
    });
  };

  return (
    <div className="container-fluid">
      <div className="row pt-4">
        <SingleProduct
          product={product}
          onStarClick={onStarClick}
          star={star}
        />
      </div>

      <div className="row">
        <div className="col text-center pt-5 pb-5">
          <hr />
          <h4>Related Products</h4>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Product;
