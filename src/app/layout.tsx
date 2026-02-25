import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "23-F Desclasificado",
  description: "Documentos desclasificados del 23-F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
