import { AuthProvider } from "../context/AuthContext";
import { Englebert, Roboto, Poppins } from "next/font/google";
import styles from "../styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "700"],
});

const englebert = Englebert({
  subsets: ["latin"],
  variable: "--font-englebert",
  display: "swap",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html
      className={`${englebert.variable} ${roboto.variable} ${poppins.variable}`}
    >
      <head>
        <title>Mundo Azul</title>
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
