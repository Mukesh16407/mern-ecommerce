import React, { useState, useEffect } from "react";
import { getCategory } from "../../functions/category";
import { useParams } from "react-router-dom";

const CategoryHome = () => {
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { slug } = useParams();
  console.log(slug);
  useEffect(() => {
    setLoading(true);
    getCategory(slug).then((c) => {
      console.log(JSON.stringify(c.data, null, 4));
      setCategory(c.data);
    });
  }, []);

  return <h1>{slug}</h1>;
};

export default CategoryHome;
