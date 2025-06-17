import type { Metadata } from "next";
// Import the font functions from next/font
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Configure the fonts with their weights and subsets
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter', // Use CSS variables for fonts
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

// Define the website's metadata for SEO
export const metadata: Metadata = {
  title: "The Plano Tutor - ABA Therapy & Comprehensive Behavior Data Solutions",
  description: "Expert ABA therapy and comprehensive behavior data collection solutions for home, school, clinic, sports, and organizational settings in Plano, TX.",
};

// This is the RootLayout component that wraps every page
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add the link to the Font Awesome stylesheet */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" 
        />
      </head>
      {/* Apply the font variables to the body tag */}
      <body className={`${inter.variable} ${poppins.variable} bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
