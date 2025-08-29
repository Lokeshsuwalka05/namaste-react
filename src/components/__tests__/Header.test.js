import Header from "../Header";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utills/appStore"

describe("Test Cases for Header Component", () => {
  it("should load Header with a login button", () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });
  it("should load Header with a cart ", () => {
    

    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
  });
  it("should load Header with logout when click on Login ",()=>{
     render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    //quering
    const loginBtn = screen.getByRole("button",{name:"Login"});
    // const logoutBtn=fireEvent.click(loginBtn);
    fireEvent.click(loginBtn)
    //assertion
    // expect(logoutBtn).not.toBeFalsy();
    const logoutBtn=screen.getByRole("button",{name:"Logout"})
    expect(logoutBtn).toBeInTheDocument();
         
  })
});
