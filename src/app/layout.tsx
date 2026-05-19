import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MajorSkill Agent Lab',
  description: '本科专业能力发展智能体实验平台',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
