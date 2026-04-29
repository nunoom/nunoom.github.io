import "./globals.css";

export const metadata = {
  title: "Nuno Mendes · Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
