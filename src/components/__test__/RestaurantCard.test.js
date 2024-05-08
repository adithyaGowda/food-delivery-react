import { render, screen } from "@testing-library/react";
import RestaurantCard, { withVegLable } from "../RestaurantCard";
import MOCK_DATA from "../mocks/mockResData.json";
import "@testing-library/jest-dom";

it("Should render the RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const title = screen.getByText("Pizza Hut");

  expect(title).toBeInTheDocument();
});

it("Should render the RestaurantCard component with Veg Only label", () => {
  const RestaurandCardVeg = withVegLable(RestaurantCard);
  render(<RestaurandCardVeg resData={MOCK_DATA} />);

  const title = screen.getByText("Pizza Hut");

  expect(title).toBeInTheDocument();
});
