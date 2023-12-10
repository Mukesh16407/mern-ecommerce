import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AdminNav from "../../../Components/Nav/AdminNav";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../functions/product";
import ProductUpdateForm from "../../../Components/form/ProductUpdateForm";

const initialState = {
  title: "",
  description: "",
  price: "",
  categories: [],
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["Black", "Brown", "Silver", "White", "Blue"],
  brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
  color: "",
  brand: "",
};

const ProductUpdate = () => {
  // state
  const [values, setValues] = useState(initialState);

  const { user } = useSelector((state) => state.auth);
  const { slug } = useParams();

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = () => {
    getProduct(slug).then((p) => {
      // console.log("single product", p);
      setValues({ ...values, ...p.data });
    });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          {/* {JSON.stringify(values)} */}
          <ProductUpdateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
          />

          <div className="p-3">Product update</div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
