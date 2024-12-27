import { AuthProvider } from "./context/AuthContext";
import "./globals.css";
export const metadata = {
  title: "Dz Jobs",
  description: "Your website to get a job",
};

export default function RootLayout({ children }) {
  return ( 
  
      <html lang="en">
        <AuthProvider>
          <body
            className={` antialiased  `}
          > 
              {children}
          </body>
        </AuthProvider>
      </html>
    
  );
}
