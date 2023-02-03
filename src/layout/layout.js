import Footer from "./footer./footer";
import Navbar from "./navbar/navbar";

export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }