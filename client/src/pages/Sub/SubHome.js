import React, { useState, useEffect } from "react";
import { getSub } from "../../functions/sub";
import { useParams } from "react-router-dom";
import { ProductList } from "../../Components/Product/ProductList/ProductList";

const SubCategoryHome = () => {
  const [subCategory, setSubCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    getSub(slug).then((res) => {
      setSubCategory(res.data);
      setProducts(res.data.products);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {loading ? (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              Loading...
            </h4>
          ) : (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              {products.length} Products in "{subCategory?.sub?.name}"
              SubCategory
            </h4>
          )}
        </div>
      </div>

      <div className="row">
        {products?.map((p) => (
          <div className="col" key={p._id}>
            <ProductList product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryHome;
