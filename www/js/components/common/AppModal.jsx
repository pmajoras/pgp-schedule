"use strict";
import React from "react";
import { Modal, Button } from 'react-bootstrap';

export default class AppModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bsSize = this.props.bsSize || "large";
    const modalTitle = this.props.title || "";
    const modalTitleId = this.props.titleId || "contained-modal-title-lg";
    const closeButtonMessage = this.props.closeButtonMessage || "Fechar";

    return (
      <Modal {...this.props} bsSize={bsSize} aria-labelledby={modalTitleId}>
        <Modal.Header closeButton>
          <Modal.Title id={modalTitleId}>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>{closeButtonMessage}</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}