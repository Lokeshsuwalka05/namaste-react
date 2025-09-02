import { fireEvent, getByTestId, render } from "@testing-library/react";
import mockDataResList from "../../mocks/mockDataResList";
import Body from "../Body";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockDataResList),
  });
});
it("should load ResList with burger input text", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const resListBeforeSearch = screen.getAllByTestId("ResCard");
  expect(resListBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const serachInput = screen.getByTestId("searchInput");

  fireEvent.change(serachInput, { target: { value: "Pizza" } });
  fireEvent.click(searchBtn);

  const resListAfterSearch = screen.getAllByTestId("ResCard");
  expect(resListAfterSearch.length).toBe(3);
});
it("should load ResList after click on Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const resListBeforeSearch = screen.getAllByTestId("ResCard");
  expect(resListBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(searchBtn);
  const resListAfterSearch = screen.getAllByTestId("ResCard");
  expect(resListAfterSearch.length).toBe(16);
});
