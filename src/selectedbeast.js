import React from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        // size="lg"
        width={230}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
        onHide={this.props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.clickedCard.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={this.props.clickedCard.image_url}
            alt={this.props.clickedCard.keyword}
            title={this.props.clickedCard.title}
            width={230}
          />
          <p>{this.props.clickedCard.description}</p>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SelectedBeast;
