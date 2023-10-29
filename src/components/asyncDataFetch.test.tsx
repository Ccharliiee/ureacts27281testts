import { render, screen } from "@testing-library/react";
import AsyncDataFetch from "./asyncDataFetch";

describe("Async data fetch component", () => {
  test("renders list of posts if data fetch succeeds", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    render(<AsyncDataFetch />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
