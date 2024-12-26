import React from "react";
import Image from "next/image";
import Markdown, { Components } from "react-markdown";
import { MYTHS } from "../../../../helpers/mythHelpers";
import joint from "../../../../myths/bone-femur-joint-svgrepo-com.svg";

export default async function Poem({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const componentsOverride: Components = {
    hr(_) {
      return (
        <Image
          priority
          src={joint}
          alt="Joint Divider"
          width={25}
          height={25}
          className="myth-divider"
        />
      );
    },
  };

  return (
    <div className="text-container">
      <Markdown className="myth-container" components={componentsOverride}>
        {MYTHS[slug].markdown}
      </Markdown>
    </div>
  );
}
