"use client";
import { Provider } from "react-redux";
import store from "./store/store";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout, Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedMenu, setSelectedMenu] = useState<string>("home");
  const router = useRouter();

  const handleMenuClick = (e: { key: string }) => {
    setSelectedMenu(e.key);

    if (e.key === "home") {
      router.push("/");
    } else if (e.key === "cart") {
      router.push("/basket");
    }
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider store={store}>
          <Layout
            className="layout"
            style={{ minHeight: "100vh", width: "100%" }}
          >
            <Layout.Header>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["home"]}
                onClick={handleMenuClick}
                selectedKeys={[selectedMenu]}
                items={[
                  { key: "home", label: "Home" },
                  {
                    key: "cart",
                    label: "Cart",
                    icon: <ShoppingCartOutlined />,
                  },
                ]}
              />
            </Layout.Header>
            <Layout.Content style={{ padding: "0 50px" }}>
              <div className="site-layout-content">{children}</div>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: "center" }}>
              Copyright © Kadir Levent Kabadayı 2025.
            </Layout.Footer>
          </Layout>
        </Provider>
      </body>
    </html>
  );
}
