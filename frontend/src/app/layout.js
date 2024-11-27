import localFont from "next/font/local";
import "./globals.css";

const helveticaNueueMedium = localFont({
  src: "./fonts/HelveticaNeueMedium.woff",
  variable: "--font-helvetica-neue-medium",
  weight: "100 900",
});

export const metadata = {
  title: "Feyn by FeynAI",
  description: "If you know, you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNueueMedium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
