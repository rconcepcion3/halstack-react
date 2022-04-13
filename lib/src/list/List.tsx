//@ts-nocheck
import React from "react";
import styled from "styled-components";
import DxcStack from "../stack/Stack";
import DxcText from "../text/Text";
import ListPropsType from "./types";

const getBulletSize = (size: string) => {
  switch (size) {
    case "xsmall":
      return "3px";
    case "small":
      return "4px";
    case "standard":
      return "5px";
    case "large":
      return "6px";
  }
};
const getTextSize = (size: string) => {
  switch (size) {
    case "xsmall":
      return "0.75rem";
    case "small":
      return "0.875rem";
    case "standard":
      return "1rem";
    case "large":
      return "1.25rem";
    default:
      return "1rem";
  }
};

const getIconSize = (size: string) => {
  switch (size) {
    case "xsmall":
      return "1rem";
    case "small":
      return "1.125rem";
    case "standard":
      return "1.5rem";
    case "large":
      return "1.75rem";
    default:
      return "1rem";
  }
};

const getHeight = (size: string) => {
  return size && 1.5 * getTextSize(size).slice(0, -3);
};
function List({
  children,
  type = "disc",
  gutter = "xxsmall",
  icon = "",
  size = "standard",
}: ListPropsType): JSX.Element {
  return (
    <DxcStack as={type === "number" ? "ol" : "ul"} gutter={gutter}>
      {React.Children.map(children, (child, index) => {
        return (
          <ListItem size={size}>
            <GeneralContent>
              {type === "number" ? (
                <Number>
                  <DxcText size={size}>{index + 1}.</DxcText>
                </Number>
              ) : type === "square" ? (
                <Bullet size={size}>
                  <Square size={size}></Square>
                </Bullet>
              ) : type === "circle" ? (
                <Bullet size={size}>
                  <Circle size={size}></Circle>
                </Bullet>
              ) : type === "icon" ? (
                <Bullet size={size}>
                  <Icon size={size}>{icon}</Icon>
                </Bullet>
              ) : (
                <Bullet size={size}>
                  <Disc size={size}></Disc>
                </Bullet>
              )}
              {type ? React.cloneElement(child, { size }) : { child }}
            </GeneralContent>
          </ListItem>
        );
      })}
    </DxcStack>
  );
}

const Bullet = styled.div<ListPropsType>`
  display: flex;
  align-self: flex-start;
  align-items: center;
  height: ${(props) => `${getHeight(props.size)}rem`};
`;

const GeneralContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

const Icon = styled.div`
  height: ${(props) => `${getHeight(props.size)}rem`};
  width: auto;
  margin-right: 0.5rem;
  align-content: center;

  & > svg {
    height: ${(props) => getIconSize(props.size)};
    width: ${(props) => getIconSize(props.size)};
  }
`;

const Number = styled.div`
  user-select: none;
  margin-right: 0.5rem;
  display: flex;
  box-sizing: border-box;
  align-self: flex-start;
  min-width: 0;
`;

const Square = styled.div<ListPropsType>`
  background-color: black;
  width: ${(props) => getBulletSize(props.size)};
  height: ${(props) => getBulletSize(props.size)};
  margin-right: 0.5rem;
`;

const Circle = styled.div<ListPropsType>`
  width: ${(props) => getBulletSize(props.size)};
  height: ${(props) => getBulletSize(props.size)};
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 0.5rem;
`;

const Disc = styled.div<ListPropsType>`
  background-color: black;
  width: ${(props) => getBulletSize(props.size)};
  height: ${(props) => getBulletSize(props.size)};
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const ListItem = styled.li<ListPropsType>`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  font-size: ${({ size }) => {
    switch (size) {
      case "xsmall":
        return "0.75rem";
      case "small":
        return "0.875rem";
      case "standard":
        return "1rem";
      case "large":
        return "1.25rem";
      default:
        return "1rem";
    }
  }};
`;

export default List;
