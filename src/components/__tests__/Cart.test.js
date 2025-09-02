import { mockResMenu } from "../../mocks/mockResMenu";
import RestaurantMenu from ".././RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react";
import appStore from "../../utills/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResMenu),
  });
});
it("should load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
  const AccordianHeader = screen.getByText("Recommended(20)");
  fireEvent.click(AccordianHeader);
  // expect(screen.getByText("Veggie Feast")).toBeInTheDocument;
  const itemCardsBeforeClick = screen.getAllByTestId("item");
  expect(itemCardsBeforeClick.length).toBe(20);

  const AddButtons = screen.getAllByText("+ADD");
  fireEvent.click(AddButtons[0]);
  fireEvent.click(AddButtons[1]);

  const cartHeader = screen.getByText("Cart(2)");
  expect(cartHeader).toBeInTheDocument();

  const items = screen.getAllByTestId("item");
  expect(items.length).toBe(22);
});
