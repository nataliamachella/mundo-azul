import { AuthProvider } from "../context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Mundo Azul</title>
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
