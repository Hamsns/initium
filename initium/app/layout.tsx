import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Initium — Voices of today. Visions of tomorrow.",
  description:
    "Youth-led research, blogs, and podcasts turning ideas into policy impact."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Brevo form styles */}
        <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        />
        <style>{`
          .sib-form-block__button {
            background-color: #3498DB !important;
            color: #FFFFFF !important;
            border-radius: 12px !important;
            padding: 12px 18px !important;
          }
          .sib-form-block__button:hover {
            background-color: #2ECC71 !important;
          }
          .sib-container--large {
            border-radius: 16px !important;
            border-color: #E5E7EB !important;
          }
          .sib-form {
            background-color: #F8F9FA !important;
          }
        `}</style>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Brevo runtime script */}
        <script
          defer
          src="https://sibforms.com/forms/end-form/build/main.js"
        ></script>
      </body>
    </html>
  );
}
