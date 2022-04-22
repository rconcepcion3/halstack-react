// @ts-nocheck
import React from "react";
import styled from "styled-components";
import { DxcStack } from "@dxc-technology/halstack-react";
import HeadingLink from "./HeadingLink";

type SectionType = {
  title: string;
  level: 1 | 2 | 3 | 4 | 5;
  subSections?: SectionType[];
  content?: React.ReactNode;
  children?: React.ReactNode;
};

const Section = ({
  title,
  subSections,
  level,
  children,
}: SectionType): JSX.Element => {
  return (
    <DxcStack
      gutter={level === 1 ? "xlarge" : level === "2" ? "large" : "medium"}
    >
      <HeadingLink level={level}>{title}</HeadingLink>
      {children}
      {subSections?.map((subSection) => {
        return (
          <Section
            key={`subSection-${subSection.title}`}
            title={subSection.title}
            subSections={subSection.subSections}
            level={level + 1 <= 5 ? level + 1 : 5}
          >
            {subSection.content}
          </Section>
        );
      })}
    </DxcStack>
  );
};

export default Section;
