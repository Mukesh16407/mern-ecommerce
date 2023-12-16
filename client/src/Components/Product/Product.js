import React from "react";

import Jumbotron from "../card/Jumbotron";
import NewArrivals from "../home/NewArrivals";

export const Product = () => {
  // useEffect(()=>{
  //   dispatch(STORE_PRODUCTS({
  //     products:"Hello"
  //   }))
  // },[dispatch])

  return (
    <>
      <div className="jumbotron text-danger h1 font-weight-bold text-center">
        <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
      </div>
      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Best Sellers
      </h4>
    </>
    // <section>
    //   <div>
    //     <aside>

    //     </aside>
    //     <div>
    //       <ProductList/>
    //     </div>
    //   </div>

    // </section>
  );
};
