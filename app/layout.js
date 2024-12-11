import localFont from "next/font/local";
import Nav from "./components/nav";
import "./globals.css";

export const metadata = {
  title: "Dz Jobs",
  description: "Your website to get a job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body
        className={` antialiased  `}
      >  <Nav/>
        {children}
      </body>
    </html>
  );
}
