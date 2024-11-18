import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const AppLayout = ({ children }) => {
  return (
    <>
      <body className={` font-mono antialiased bg-neutral-950 text-white `}>
        <ToastContainer pauseOnHover theme="colored" />
        {children}
      </body>
    </>
  );
};

export default AppLayout;
