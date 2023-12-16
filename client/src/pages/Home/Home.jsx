import React, { useEffect } from "react";
import { Product } from "../../Components/Product/Product";
import { Slider } from "../../Components/Slider/Slider";

export const Home = () => {
  // const url = window.location.href

  // useEffect(()=>{
  // const scrollToProducts =()=>{
  //   if(url.includes("#products")){
  //     window.scroll({
  //       top:700,
  //       behavior: "smooth",
  //     })
  //     return
  //   }
  //   scrollToProducts();
  // }
  // },[url])
  return (
    <div>
      {/* <Slider/> */}
      <Product />
    </div>
  );
};
