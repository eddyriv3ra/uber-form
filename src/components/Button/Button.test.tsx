import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Button from "./Button";

const handleClickMock = jest.fn();

const buttonProps = {
  label: "text",
  handleClick: handleClickMock,
};

describe("Button Test", () => {
  it("it displays label", () => {
    const { getByText } = render(
      <Button
        label={buttonProps.label}
        handleClick={buttonProps.handleClick}
      />,
    );
    expect(getByText(buttonProps.label)).toHaveTextContent(buttonProps.label);
  });

  it("it handle functions", () => {
    const { getByText } = render(
      <Button
        label={buttonProps.label}
        handleClick={buttonProps.handleClick}
      />,
    );

    fireEvent.click(getByText(buttonProps.label));

    expect(handleClickMock).toHaveBeenCalled();
  });
});
