import type { Metadata, Viewport } from "next";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import BackgroundField from "@/components/BackgroundField";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SISTER — Summer Institute of Science, Technology & Engineering Research",
  description:
    "SISTER is a FREE, global, project-based research institute empowering high school and early undergraduate students through rigorous STEM and social science research. Run by a coalition of premier student-led organizations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PageTransition>
          <BackgroundField />
          <Nav />
          <main style={{ position: "relative", zIndex: 2 }}>{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
