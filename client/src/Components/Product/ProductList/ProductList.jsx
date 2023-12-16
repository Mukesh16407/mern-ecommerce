import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";

import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { ProductItem } from "../ProductItem/ProductItem";
import Search from "../../Search/Search";

const { Meta } = Card;

export const ProductList = ({ product }) => {
  const { images, title, description, slug } = product;
  return (
    // <div>
    //   <div>
    //     <div>
    //       <BsFillGridFill size={22} color="orangered" />
    //       <FaListAlt size={24} color="#0066d4" />
    //       <p>
    //         <b>5</b> Products found.
    //       </p>
    //     </div>
    //     {/* Search Icon */}
    //     <div>
    //       <Search />
    //     </div>
    //     <div>
    //       <label>Sort by:</label>
    //       <select>
    //         <option value="latest">Latest</option>
    //         <option value="lowest-price">Lowest Price</option>
    //         <option value="highest-price">Highest Price</option>
    //         <option value="a-z">A - Z</option>
    //         <option value="z-a">Z - A</option>
    //       </select>
    //     </div>
    //     <div>
    //       <div>{product.title}</div>
    //       {/* <ProductItem/> */}
    //     </div>
    //   </div>
    // </div>
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : laptop}
          style={{ height: "150px", objectFit: "cover" }}
          className="p-1"
        />
      }
      actions={[
        <Link to={`/product/${slug}`}>
          <EyeOutlined className="text-warning" /> <br /> View Product
        </Link>,
        <>
          <ShoppingCartOutlined className="text-danger" /> <br /> Add to Cart
        </>,
      ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 40)}...`}
      />
    </Card>
  );
};
