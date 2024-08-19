import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <span className="d-inline-block mb-2 me-2">
        <Button
          onClick={this.toggle}
          className="mb-2 me-2 btn-icon btn-icon-only btn-shadow btn-outline-2x"
          outline
          color="light"
        >
          {/* <i className="lnr-dinner btn-icon-wrapper"> </i> */}
          <i class="fa fa-fw" aria-hidden="true" title="Copy to use sliders">
            
          </i>
        </Button>
        {/* <Button color="primary" onClick={this.toggle}>
          Basic Modal
        </Button> */}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button color="link" onClick={this.toggle}>
              Cancel
            </Button>
            <Button color="primary" onClick={this.toggle}>
              Search
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </span>
    );
  }
}

export default ModalExample;
