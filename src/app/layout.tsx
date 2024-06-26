
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


export const metadata: Metadata = {
    title: "NextJS Tailwind App",
    description: "Generated by create next app and tailwind",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
