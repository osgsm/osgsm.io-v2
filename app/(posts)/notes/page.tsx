import { Breadcrumb } from "@/components/breadcrumb";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { OpenGraph } from "@/lib/og";

import React from "react";

const Spacer = () => <div style={{ marginTop: "48px" }} />;

export function generateMetadata() {
  const title = "Notes";
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(title)}`;

  return {
    ...OpenGraph,
    title,
    openGraph: {
      title,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  };
}

export default function Page() {
  return (
    <div className="~px-5/8">
      <Breadcrumb />
      <FadeIn.Item>
        <Posts category="notes" />
      </FadeIn.Item>
      <Spacer />
    </div>
  );
}
