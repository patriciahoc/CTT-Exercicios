import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = () => {
  const notify = () =>
    toast.error("Você deve aceitar os termos", {
      position: "top-center",
      autoClose: 2500,
    });

  return (
    <div>
      <button onClick={notify}>Teste</button>
      <ToastContainer position="top-center" autoClose={2500} />
    </div>
  );
};

export default Alert;
