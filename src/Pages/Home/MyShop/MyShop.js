import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useProduct from "../../../Utilities/hooks/useProduct";
import "./MyShop.css";
import ShopProuduct from "./ShopProuduct/ShopProuduct";
import { useGetAllProductQuery } from "../../../Redux/Features/product/productApi";
import { ClipLoader } from "react-spinners";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MyShop = (props) => {
  const [count, setCount] = useState(3);

  // --- showing data from mongodb
  const { data, isLoading, isError, error } = useGetAllProductQuery(count);

  // --- deciding what to render while fetching data from server
  let content = null;

  // --- when fetching-data process is in loading state
  if (isLoading && !isError) {
    content = (
      <div className="loader-in-middle2">
        <ClipLoader color="black" size={70} />
      </div>
    );
  }

  // --- when there is a error happened while fetching-data
  if (!isLoading && isError) {
    console.log(error);
    content = <div className="error-text">{error.error}</div>;
  }

  // --- when we finally get the data
  if (!isLoading && !isError && data.length > 0) {
    content = (
      <div className="product-show-div ">
        {data.map((index) => (
          <ShopProuduct
            index={index}
            key={index.img}
            // addProduct={props.addProduct}
          ></ShopProuduct>
        ))}
      </div>
    );
  }

  function loadMoreProduct() {
    setCount(count + 3);
  }
  function loadLess() {
    setCount(count - 3);
  }

  // --- framer motion animation functionality
  const [controls, setControls] = useState("hidden");
  const [ref, inView] = useInView();

  const parent = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeInOut", duration: 1, staggerChildren: 0.2 },
    },
  };

  useEffect(() => {
    if (inView) {
      setControls("visible");
    }
    if (!inView) {
      setControls("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={parent}
      initial={controls}
      animate={controls}
      className="mt-20 home-my-shop overflow-hidden"
    >
      <h2 className="text-4xl font-semibold">
        Some Of My Product <br />
        You Can Buy To Decorate Your Home/Office Wall
      </h2>
      <span className="font-semibold text-lg">
        <small>
          (Hover on the Pic to see 'Add to Cart' & 'Details' Button)
        </small>
      </span>
      {content}
      {/* <p className='loading-text mt-5'><Spinner animation="border" variant="primary" /></p> */}
      <button
        className="loadMoreButton border-2 border-slate-500"
        onClick={loadMoreProduct}
      >
        Load More
      </button>
      {data?.length > 3 && (
        <button
          className="loadMoreButton  border-2 border-slate-500"
          onClick={loadLess}
        >
          Load Less
        </button>
      )}
    </motion.div>
  );
};

export default MyShop;
