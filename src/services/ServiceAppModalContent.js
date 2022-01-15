import * as React from "react";
let modalRef = React.createRef();

function showModal(renderContent) {
  modalRef.current.showModalContent(renderContent);
}

function hideModal() {
  modalRef.current.closeModalContent();
}

const ServiceAppModalContent = { modalRef, showModal, hideModal };
export default ServiceAppModalContent;
