// @ts-nocheck
import React, { useMemo, useCallback } from "react";
import styled from "styled-components";
import { DxcQuickNav, DxcStack } from "@dxc-technology/halstack-react";
import PageLayout from "./PageLayout";
import DocFooter from "./DocFooter";
import Section from "./Section";

type DocContainerTypes = {
  section: SectionType;
  githubLink: string;
};

type SectionType = {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5;
  content?: React.ReactNode;
  subSections?: SectionType[];
};

type Link = {
  label: string;
  links?: Link[];
};

const DocumentationContainer = ({
  section,
  githubLink,
}: DocContainerTypes): JSX.Element => {
  const getSubSectionsLinks = useCallback((section) => {
    const linksList: Link[] = [];
    section.subSections?.map((subSection: SectionType) => {
      if (subSection.subSections) {
        linksList.push({
          label: subSection.title,
          links: getSubSectionsLinks(subSection),
        });
      } else {
        linksList.push({
          label: subSection.title,
        });
      }
    });
    return linksList;
  }, []);

  const links = useMemo(
    () => getSubSectionsLinks(section),
    [getSubSectionsLinks, section]
  );
  return (
    <Container>
      <PageLayout>
        <ContentContainer>
          <DxcStack gutter="xxxlarge">
            <Section
              title={section.title}
              subSections={section.subSections}
              level={1}
              key={`section-${section.title}`}
            >
              {section.content}
            </Section>
            <DocFooter githubLink={githubLink} />
          </DxcStack>
        </ContentContainer>
      </PageLayout>
      <QuickNavContainer>
        <DxcQuickNav title={section.title} links={links}></DxcQuickNav>
      </QuickNavContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuickNavContainer = styled.div`
  max-height: calc(100vh - 150px);
  position: sticky;
  top: 150px;
  width: 300px;
`;

export default DocumentationContainer;
