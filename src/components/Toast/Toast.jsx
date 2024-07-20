import { useEffect } from "react";
import { IoCheckmarkCircle, IoCloseCircle, IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

export const Toast = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-eucalyptus";
      case "error":
        return "bg-bittersweet";
      default:
        return "bg-gray-500";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <IoCheckmarkCircle size={24} />;
      case "error":
        return <IoCloseCircle size={24} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between max-w-sm w-full p-4 text-white shadow-lg rounded-lg ${getBgColor()} transition-transform transform ${
        isVisible ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      {getIcon()}
      <span className="ml-2">{message}</span>
      <button onClick={onClose} className="ml-4">
        <IoClose size={20} />
      </button>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
