import { signOut } from "firebase/auth";
import { Button, Modal } from "flowbite-react";
import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import auth from "../firebase.init";
import { errorMessage, successMessage } from "../popupMsg";

const ModalFlowBite = ({ openModal, setOpenModal }) => {
  // --- logging out user
  const handleLogout = () => {
    setOpenModal(false);
    signOut(auth)
      .then(() => {
        successMessage('Log out Successful !')
      })
      .catch((err) => {
        console.log(err);
        errorMessage(err);
      });
  };
  return (
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to Log out?
          </h3>
          <div className=" flex flex-col   md:flex md:flex-row  justify-center gap-4">
            <Button color="failure" onClick={() => handleLogout()}>
              {"Logout"}
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalFlowBite;
