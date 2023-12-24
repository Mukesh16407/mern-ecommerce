import React from "react";
import { Card, Tabs } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { ProductListItems } from "./ProductListItems";

export const SingleProduct = ({ product }) => {
  const { title, images, description } = product;

  return (
    <div>
      <ProductListItems product={product} />
    </div>
  );
};
