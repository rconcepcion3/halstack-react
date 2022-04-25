import React from "react";
import styled from "styled-components";
import Title from "../../.storybook/components/Title";
import DxcList from "./List";
import DxcText from "../text/Text";
import DxcLink from "../link/Link";

export default {
  title: "List",
  component: DxcList,
};

const icon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
  </svg>
);

export const Chromatic = () => (
  <>
    <Title title="Icon list" theme="light" level={4} />
    <DxcList type="icon" icon={icon} size="xsmall">
      <DxcText>Icon xsmall. </DxcText>
      <DxcText>Icon xsmall.</DxcText>
    </DxcList>
    <DxcList type="icon" icon={icon} size="small">
      <DxcText>Icon small. </DxcText>
      <DxcText>Icon small.</DxcText>
    </DxcList>
    <DxcList type="icon" icon={icon} size="standard">
      <DxcText>Icon standard. </DxcText>
      <DxcText>Icon standard.</DxcText>
    </DxcList>
    <DxcList type="icon" icon={icon} size="large">
      <DxcText>Icon large. </DxcText>
      <DxcText>Icon large.</DxcText>
    </DxcList>
    <Title title="Number list" theme="light" level={4} />
    <DxcList type="number" size="xsmall">
      <DxcText>Number xsmall.</DxcText>
      <DxcText>Number xsmall.</DxcText>
    </DxcList>
    <DxcList type="number" size="small">
      <DxcText>Number small.</DxcText>
      <DxcText>Number small.</DxcText>
    </DxcList>
    <DxcList type="number" size="standard">
      <DxcText>Number standard.</DxcText>
      <DxcText>Number standard.</DxcText>
    </DxcList>
    <DxcList type="number" size="large">
      <DxcText>Number large.</DxcText>
      <DxcText>Number large.</DxcText>
    </DxcList>

    <Title title="Square" theme="light" level={4} />
    <DxcList type="square" size="xsmall">
      <DxcText>Square xsmall.</DxcText>
      <DxcText>Square xsmall.</DxcText>
    </DxcList>
    <DxcList type="square" size="small">
      <DxcText>Square small.</DxcText>
      <DxcText>Square small.</DxcText>
    </DxcList>
    <DxcList type="square" size="standard">
      <DxcText>Square standard.</DxcText>
      <DxcText>Square standard.</DxcText>
    </DxcList>
    <DxcList type="square" size="large">
      <DxcText>Square large.</DxcText>
      <DxcText>Square large.</DxcText>
    </DxcList>

    <Title title="Circle" theme="light" level={4} />
    <DxcList type="circle" size="xsmall">
      <DxcText>Circle xsmall.</DxcText>
      <DxcText>Circle xsmall.</DxcText>
    </DxcList>
    <DxcList type="circle" size="small">
      <DxcText>Circle small.</DxcText>
      <DxcText>Circle small.</DxcText>
    </DxcList>
    <DxcList type="circle" size="standard">
      <DxcText>Circle standard.</DxcText>
      <DxcText>Circle standard.</DxcText>
    </DxcList>
    <DxcList type="circle" size="large">
      <DxcText>Circle large.</DxcText>
      <DxcText>Circle large.</DxcText>
    </DxcList>

    <Title title="Disc" theme="light" level={4} />
    <DxcList size="xsmall">
      <DxcText>disc xsmall.</DxcText>
      <DxcText>disc xsmall.</DxcText>
    </DxcList>
    <DxcList size="small">
      <DxcText>Disc small.</DxcText>
      <DxcText>Disc small.</DxcText>
    </DxcList>
    <DxcList size="standard">
      <DxcText>Disc standard.</DxcText>
      <DxcText>Disc standard.</DxcText>
    </DxcList>
    <DxcList size="large">
      <DxcText>Disc large.</DxcText>
      <DxcText>Disc large.</DxcText>
    </DxcList>

    <Title title="Multiple lines" theme="light" level={4} />
    <Container>
      <Title title="Number" theme="light" level={4} />
      <DxcList type="number" size="xsmall">
        <DxcText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList type="number" size="small">
        <DxcText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList type="number" size="standard">
        <DxcText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList type="number" size="large">
        <DxcText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
    </Container>
    <Container>
      <Title title="Square" theme="light" level={4} />
      <DxcList type="square" size="xsmall">
        <DxcText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList type="square" size="small">
        <DxcText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList type="square" size="standard">
        <DxcText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList type="square" size="large">
        <DxcText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
    </Container>
    <Container>
      <Title title="Circle" theme="light" level={4} />
      <DxcList type="circle" size="xsmall">
        <DxcText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList type="circle" size="small">
        <DxcText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList type="circle" size="standard">
        <DxcText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList type="circle" size="large">
        <DxcText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
    </Container>
    <Title title="Disc" theme="light" level={4} />
    <Container>
      <DxcList size="xsmall">
        <DxcText>
          {" "}
          xsmall Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList size="small">
        <DxcText>
          {" "}
          small Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList size="standard">
        <DxcText>
          {" "}
          standard Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList size="large">
        <DxcText>
          {" "}
          large Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
    </Container>
    <Container>
      <Title title="Icon" theme="light" level={4} />
      <DxcList type="icon" icon={icon} size="xsmall">
        <DxcText>
          XSMALL Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList type="icon" icon={icon} size="small">
        <DxcText>
          SMALL Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList type="icon" icon={icon} size="standard">
        <DxcText>
          STANDARD Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
      <DxcList type="icon" icon={icon} size="large">
        <DxcText>
          LARGE Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
    </Container>
  </>
);

const Container = styled.div`
  width: 400px;
`;
