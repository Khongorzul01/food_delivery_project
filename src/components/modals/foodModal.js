import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../../styles/modal.css";
// import { useNavigate } from "react-router-dom";

export default function FoodModal(props) {
  console.log(props.data);
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <div className="modal2">
        <div>
          <img
            className="modal-img"
            src={`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${props.data.image}`}
          />
        </div>
        <div>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </Modal>
  );
}
