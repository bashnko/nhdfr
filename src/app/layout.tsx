import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "bashneko",
    description: "I work across dev, cloud, and systems—building simple, reliable software. This is where I share my experiments, tools, and lessons learned.",
    keywords: [
        "bashneko",
        "bashnko",
        "dev",
        "cloud",
        "systems",
        "software",
        "terminal",
        "automation",
        "Linux",
        "TypeScript",
        "Go",
        "blog",
        "workflow",
        "dotfiles",
        "experiments",
        "tools",
        "lessons learned",
    ],
    authors: [{ name: "bashneko" }],
    creator: "bashneko",
    publisher: "bashneko",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://bashneko.dev"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "bashneko",
        description: "I work across dev, cloud, and systems—building simple, reliable software. This is where I share my experiments, tools, and lessons learned.",
        url: "https://bashneko.dev",
        siteName: "bashneko",
        images: [
            {
                url: "/web-app-manifest-512x512.png",
                width: 512,
                height: 512,
                alt: "bashneko",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "bashneko",
        description: "I work across dev, cloud, and systems—building simple, reliable software. This is where I share my experiments, tools, and lessons learned.",
        images: ["/web-app-manifest-512x512.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            {
                rel: "mask-icon",
                url: "/favicon.svg",
            },
        ],
    },
    manifest: "/manifest.json",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem>
                    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
                        <div className="absolute inset-0 bg-[#191724]" />
                    </div>
                    <main className="flex-1 relative">{children}</main>
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}
