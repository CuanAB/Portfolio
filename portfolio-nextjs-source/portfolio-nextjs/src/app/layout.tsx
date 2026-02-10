// ── src/app/layout.tsx ──

import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

// Font setup
const dmSans = DM_Sans({
  subsets:  ["latin"],
  variable: "--font-dm-sans",
  display:  "swap",
});
const dmSerif = DM_Serif_Display({
  subsets:  ["latin"],
  weight:   ["400"],
  style:    ["normal", "italic"],
  variable: "--font-dm-serif",
  display:  "swap",
});

export const metadata: Metadata = {
  title:       "Ngô Bá Quân — Data Analyst | SQL · Power BI · Python",
  description: "Data Analyst specializing in SQL, Power BI, and Python. I turn data into decisions that drive business growth.",
  keywords:    ["Data Analyst", "Power BI", "SQL", "Python", "Portfolio", "Hanoi", "Vietnam"],
  authors:     [{ name: "Ngô Bá Quân", url: "https://www.linkedin.com/in/quanngo2004" }],
  openGraph: {
    title:       "Ngô Bá Quân — Data Analyst Portfolio",
    description: "I turn data into decisions. SQL · Power BI · Python · Excel",
    type:        "website",
    locale:      "en_US",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Ngô Bá Quân — Data Analyst",
    description: "I turn data into decisions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch(e){}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${dmSerif.variable} font-sans`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
