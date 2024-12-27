import type { Metadata } from "next";
import ThankYou from "./ThankYou";

export const metadata: Metadata = {
  title: "Thank You",
};

const Page = () => {
  return <ThankYou />;
};

export default Page;
