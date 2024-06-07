import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import styles from "./MainLayout.module.css";
import { ToastContainer } from "react-toastify";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.Main}>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer style={{ marginTop: 100 }} />
    </>
  );
};
