import AppWrapper from "@/components/layouts/appWrapper";
import "@/styles/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jinwen",
  description: "adminPanel",
};

export default function Layout({ children }) {
  return <AppWrapper>{children}</AppWrapper>;
}
