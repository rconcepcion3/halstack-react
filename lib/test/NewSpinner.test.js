import React from "react";
import { render } from "@testing-library/react";
import DxcNewSpinner from "../src/new-spinner/Spinner";

describe("Spinner component tests", () => {
  test("Spinner renders with correct label", () => {
    const { getByText } = render(<DxcNewSpinner label="test-loading"></DxcNewSpinner>);
    expect(getByText("test-loading")).toBeTruthy();
  });

  test("Spinner shows value correctly", () => {
    const { getByText } = render(<DxcNewSpinner label="test-loading" value={75} showValue></DxcNewSpinner>);
    expect(getByText("75%")).toBeTruthy();
  });

  test("Small spinner hides value and label correctly", () => {
    const { queryByText } = render(<DxcNewSpinner mode="small" label="test-loading" value={75} showValue></DxcNewSpinner>);
    expect(queryByText("test-loading")).toBeFalsy();
    expect(queryByText("75%")).toBeFalsy();
  });

  test("Overlay spinner shows value and label correctly", () => {
    const { getByText } = render(<DxcNewSpinner mode="overlay" label="test-loading" value={75} showValue></DxcNewSpinner>);
    expect(getByText("test-loading")).toBeTruthy();
    expect(getByText("75%")).toBeTruthy();
  });
});
