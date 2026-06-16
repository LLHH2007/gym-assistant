import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gym Assistant — Lịch Tập Gym 3 Ngày",
  description:
    "Ứng dụng hỗ trợ lịch tập gym 3 ngày/tuần dành cho cả nam và nữ. Chương trình Push/Pull/Legs với bài tập chi tiết, số sets, reps và thời gian nghỉ.",
  openGraph: {
    title: "Gym Assistant — Lịch Tập Gym 3 Ngày",
    description:
      "Chương trình tập gym 3 ngày/tuần với bài tập chi tiết cho nam và nữ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
