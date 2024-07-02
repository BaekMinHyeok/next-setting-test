import { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: {
        default: "Next.js Title",
        template: "%s | Next.js",
    },
    description: "Generated by Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <header className="bg-yellow-400 p-2 my-2">
                    <nav>
                        <ul className="flex space-x-2">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link href="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="flex p-4">{children}</main>
                <footer className="bg-cyan-400 p-2 my-2">Footer</footer>
            </body>
        </html>
    );
}
