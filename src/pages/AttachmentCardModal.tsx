"use client";

import React from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const AttachmentCardModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-md mx-auto p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default AttachmentCardModal;
