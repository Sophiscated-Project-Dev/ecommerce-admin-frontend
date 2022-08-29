import Footer from "./autharea/components/Footer";
import Header from "./autharea/components/Header";
import Sidebar from "./autharea/components/Sidebar";

const Layout = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Header />
        </div>
      </div>
      {/* -------------------Header---------------- */}

      {props.children}
      {/* -------------------Footer---------------- */}
      <Footer />
    </div>
  );
};

export default Layout;
