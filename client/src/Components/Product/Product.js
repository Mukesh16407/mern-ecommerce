import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, STORE_PRODUCTS } from '../../redux/slice/ProductSlice';
import { ProductList } from './ProductList/ProductList';

export const Product = () => {

    const products = useSelector(selectProducts);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(STORE_PRODUCTS({
        products:"Hello"
      }))
    },[dispatch])
  return (
    <section>
      <div>
        <aside>

        </aside>
        <div>
          <ProductList/>
        </div>
      </div>

    </section>
  )
}
