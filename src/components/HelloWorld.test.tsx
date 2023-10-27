import React from "react";
import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";
import userEvent from "@testing-library/user-event";

describe("Hello World component", () => {
  test("renders Hello World", () => {
    render(<HelloWorld />);
    const textHElement = screen.getByText(/Hello World/i);
    expect(textHElement).toBeInTheDocument();
  });

  test("renders default paragraph", () => {
    render(<HelloWorld />);
    const textdfElement = screen.getByText(/not in a real browser/i);
    expect(textdfElement).toBeInTheDocument();
  });

  test("renders paragraph after button click", () => {
    render(<HelloWorld />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const textTogElement = screen.getByText(/fast iteration speed/i);
    expect(textTogElement).toBeInTheDocument();
  });

  test("renders paragraph hidden after button click", () => {
    render(<HelloWorld />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const textHidElement = screen.queryByText(/not in a real browser/i);
    expect(textHidElement).toBeNull();
  });
});
