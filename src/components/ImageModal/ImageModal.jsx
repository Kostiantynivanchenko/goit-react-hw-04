import Modal from "react-modal";
import PropTypes from "prop-types"; // Import PropTypes
import s from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(1, 1, 1, 0.9)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    overflow: "hidden",
    background: "transparent",
  },
};

const ImageModal = ({ modalIsOpen, closeModal, imageUrl, imageAlt }) => {
  console.log(modalIsOpen);

  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={s.wrapperModalImg}>
        <img className={s.modalImg} src={imageUrl} alt={imageAlt} />
      </div>
    </Modal>
  );
};

// Add PropTypes validation
ImageModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired, // modalIsOpen should be a boolean and is required
  closeModal: PropTypes.func.isRequired, // closeModal should be a function and is required
  imageUrl: PropTypes.string.isRequired, // imageUrl should be a string and is required
  imageAlt: PropTypes.string.isRequired, // imageAlt should be a string and is required
};

export default ImageModal;
