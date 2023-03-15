import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import Layout from "../Components/Layout";
import { useEffect } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-svg-core/styles.css';





function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');

    
  }, []);
  
  return (
   
    
  
      <Layout  >
        <Component {...pageProps} />
      </Layout>
  
      
      
  );
}

export default MyApp;
