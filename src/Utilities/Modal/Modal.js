import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../Redux/Features/modal/modalSlice";

const Modals = ({}) => {
  const modalStatus = useSelector((state) => state.modal.modalShow);
//   console.log(modalStatus);

  const dispatch = useDispatch();
  return (
    <Modal show={modalStatus} onHide={() => dispatch(hideModal())}       size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(hideModal())}>
          Close
        </Button>
        <Button variant="primary" onClick={() => dispatch(hideModal())}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modals;
