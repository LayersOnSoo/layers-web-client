import { ThemeProvider } from "./providers/theme-provider";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const AppLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider defaultTheme="system">
        <ToastContainer pauseOnHover theme="colored" />
        {children}
      </ThemeProvider>
    </>
  );
};

export default AppLayout;
