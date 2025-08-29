import ResCard from "../ResCard";
import mockData from "../../mocks/mockData";
import { screen,render } from "@testing-library/react";
import "@testing-library/jest-dom"
import { withDiscountLabel } from "../ResCard";
const ResCardWithlabel=withDiscountLabel(ResCard);
describe("test cases for resCard",()=>{
  it("should load ResCard with the name of Restaurant",()=>{
        render(<ResCard resObj={mockData}/>);
        const name=screen.getByText("Pizza Hut");
        expect(name).toBeInTheDocument();
  })
  it("should load ResCard withPromoted Label",()=>{
        render(<ResCardWithlabel resObj={mockData}/>);
        screen.debug();
        const name=screen.getByText(/ITEMS AT/);
        expect(name).toBeInTheDocument();
  })
})