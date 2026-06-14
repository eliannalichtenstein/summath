import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SumMath V2",
  description: "SumMath quiz MVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
