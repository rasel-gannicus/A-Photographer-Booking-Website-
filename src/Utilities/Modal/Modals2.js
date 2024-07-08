import React from "react";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../Redux/Features/modal/modalSlice";
import { useGetSingleProductQuery } from "../../Redux/Features/product/productApi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { ClipLoader } from "react-spinners";

const Modals2 = () => {
  const modalDetails = useSelector((state) => state.modal);

  //-- getting value from redux store to know if the modal is active or not
  const modalStatus = modalDetails.modalShow;

  //-- getting value from redux store to know the _id of the product that we want to show details in the modal section
  const dataId = modalDetails.showDataId;

  //   --- this dispatch is to hide modal by setting the modal status 'false' in redux store
  const dispatch = useDispatch();

  //   --- getting single product details from mongodb using redux
  const { data, isLoading, isError, error, isSuccess } =
    useGetSingleProductQuery(dataId);
  // --- deciding what to show in UI while fetching data from server
  let content = null;

  // --- when fetching-data process is in loading state
  if (isLoading && !isError) {
    content = (
      <div className="loader-in-middle2  mt-5">
        <ClipLoader color="black" size={40} />
      </div>
    );
  }

  // --- when there is a error happened while fetching-data
  if (!isLoading && isError) {
    console.log(error);
    content = <div className="error-text">{error?.error}</div>;
  }

  // --- when we finally get the data
  if (!isLoading && !isError && isSuccess) {
    content = (
      <div className="modals-2-innerBody">
        <div className="modal-left-side">
          <div className="product-img-parent">
            <div className="product-img">
              <img src={data?.img} alt="" />
            </div>
          </div>
        </div>
        <div className="modal-right-side">
          <div>
            <p className="text-yellow-400">Category : </p>
            <p>{data?.catagory} Photography </p>
          </div>
          <div>
            <p className="font-bold">Price : </p>
            <p> $ {data?.price} </p>
          </div>
          <div>
            <p>Description : </p>
            <p> .... </p>
          </div>
          <div className="modal-button-section">
            <button>Buy Now</button>
            <button>
              {" "}
              <FontAwesomeIcon
                icon={faHeartCirclePlus}
                style={{ marginRight: "10px" }}
              />
              Favourite
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`modals-2 ${modalStatus && "active"}`}>
      <div className="modals-2-body">
        <div className="modals-2-title">
          <button onClick={() => dispatch(hideModal())}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <h5>Product Details </h5>
        </div>
        {content}
        <div className="modals-2-footer"></div>
      </div>
    </div>
  );
};

export default Modals2;
