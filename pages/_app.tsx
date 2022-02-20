import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='container'>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer />
    </div>
  );
}

export default MyApp;
