import React, { useMemo, useCallback } from "react";
import styled from "styled-components";
import { DxcQuickNav, DxcStack } from "@dxc-technology/halstack-react";
import PageLayout from "./PageLayout";
import DocFooter from "./DocFooter";
import Section from "./Section";

type DocContainerTypes = {
  title: string;
  sections: SectionType[];
  githubLink: string;
};

type SectionType = {
  title: string;
  level: 1 | 2 | 3 | 4 | 5;
  content?: React.ReactNode;
  subSections?: SectionType[];
};

type Link = {
  label: string;
  links?: Link[];
};

const DocumentationContainer = ({
  title,
  sections,
  githubLink,
}: DocContainerTypes): JSX.Element => {
  const getSubSectionsLinks = useCallback((section) => {
    const linksList: Link[] = [];
    if (section.subSections) {
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
    } else {
      linksList.push({ label: section.title });
    }
    return linksList;
  }, []);

  const getQuickNavLinks = useCallback(() => {
    let linksList: Link[] = [];
    sections.map((section) => {
      linksList = getSubSectionsLinks(section);
    });

    return linksList;
  }, [sections, getSubSectionsLinks]);

  const links = useMemo(() => getQuickNavLinks(), [getQuickNavLinks]);

  return (
    <Container>
      <PageLayout>
        <ContentContainer>
          <DxcStack gutter="xxxlarge">
            {sections.map((section, index) => {
              return (
                <Section
                  title={section.title}
                  subSections={section.subSections}
                  level={index + 1}
                  key={`section-${section.title}`}
                >
                  {section.content}
                </Section>
              );
            })}
            <DocFooter githubLink={githubLink} />
          </DxcStack>
        </ContentContainer>
      </PageLayout>
      <QuickNavContainer>
        <DxcQuickNav title={title} links={links}></DxcQuickNav>
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
