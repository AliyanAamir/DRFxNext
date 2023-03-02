
import Footer from './Footer/components/Footer';
import Navbar from './Navbar/components/Navbar';


function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />

    </div>
  );
}

export default Layout;