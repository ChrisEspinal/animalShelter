import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import './CustomModal.css';

class CustomModal extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="warning" className="btns" onClick={this.openModal} data-target=".kf-modal-lg">
            Watch Clip 
          </Button>
        </div>
        <Modal size="lg"show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Outdoor Fun!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="embed-responsive embed-responsive-16by9 video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/OXVcMogNVRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CustomModal;