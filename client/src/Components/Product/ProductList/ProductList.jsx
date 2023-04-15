import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { ProductItem } from '../ProductItem/ProductItem';
import Search from '../../Search/Search';

export const ProductList = () => {
  return (
    <div>
      <div>
        <div>
          <BsFillGridFill
          size={22}
          color="orangered"/>
          <FaListAlt size={24} color="#0066d4" />
          <p>
            <b>5</b> Products found.
          </p>
        </div>
        {/* Search Icon */}
        <div>
          <Search/>
        </div>
        <div >
          <label>Sort by:</label>
          <select  >
            <option value="latest">Latest</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-price">Highest Price</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
        </div>
        <div>
          <ProductItem/>
        </div>
      </div>
    </div>
  )
}
