import Footer from "./components/footer";
import "./globals.css";
import Navbar from "./components/navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className=" flex flex-row ">
          <Navbar />
          {children}
        </div>



        {/* <Footer /> */}
      </body>
    </html>
  )
}
