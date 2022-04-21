import React, { useState } from "react";
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
  const getSubSections = (subSections: SectionType[]) => {
    const finalSubsections: SectionType[] = [];
    subSections.map((subSection) => {
      finalSubsections.push({
        title: subSection.title,
        content: subSection.content && subSection.content,
        level: level + 1,
      });

      if (subSection.subSections) {
        const result = getSubSections(subSection.subSections);
        result.map((item) => {
          item.level++;
          finalSubsections.push(item);
        });
      }
    });
    return finalSubsections;
  };

  const finalSubsections = subSections && getSubSections(subSections);

  return (
    <DxcStack gutter="large">
      <HeadingLink level={level < 5 ? level : 5}>{title}</HeadingLink>
      {children}
      {finalSubsections?.map((subSection) => {
        return (
          <>
            <HeadingLink
              level={
                subSection.level && subSection.level < 5 ? subSection.level : 5
              }
              key={`subSection-${subSection}`}
            >
              {subSection.title}
            </HeadingLink>
            <>{subSection?.content}</>
          </>
        );
      })}
    </DxcStack>
  );
};

export default Section;
