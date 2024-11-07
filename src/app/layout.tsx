import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/component/Footer";
import { Roboto } from "next/font/google";

// Initialize the Roboto font
const roboto = Roboto({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Governor Initiative",
  description:
    "Governor Initiative Artificial Intelligence, Web 3.0 and Metaverse",
  icons: {
    icon: { url: "/logo.png", type: "image/png" }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Add the font class here */}
      <body className={roboto.className}>
        <div className="mt-20 mb-20">{children}</div>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
