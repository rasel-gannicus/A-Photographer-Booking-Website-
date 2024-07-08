import React, { useState } from "react";
import { useGetAllProductQuery } from "../../../../Redux/Features/product/productApi";
import { ClipLoader } from "react-spinners";

const AllProductsAdmin = () => {
  const [count, setCount] = useState(54);
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

  if (!isLoading && !isError && data.length > 0) {
    // console.log(data);
    content = data.map((item) => (
      <tr
        key={item._id}
        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-start items-center gap-3"
        >
          <img width={60} height={60} alt="product image" src={item.img} />
          {/* {item.Title} */}
        </th>
        <td className="px-6 py-4 text-black font-semibold ">{item.catagory.toUpperCase()}</td>
        <td className="px-6 py-4">{item.Ratings}</td>
        <td className="px-6 py-4 flex flex-col  gap-1 md:flex md:flex-row">
          <label
            //   onClick={() => enableEdit(item._id)}
            htmlFor="my_modal_7"
            className="btn btn-xs btn-warning font-normal rounded-none"
          >
            Edit
          </label>
          <button
            //   onClick={() => handleDelete(item._id)}
            htmlFor="my_modal_7"
            className=" px-3 btn-neutral text-white bg-slate-700 font-normal ms-1 rounded-none"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-40">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Item name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Ratings
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProductsAdmin;
