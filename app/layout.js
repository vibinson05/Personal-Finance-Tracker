import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main className="ml-64 p-5">{children}</main>
      </body>
    </html>
  );
}