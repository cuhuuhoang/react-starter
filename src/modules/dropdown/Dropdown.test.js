import {render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'
import DropdownMain from "./DropdownMain";

test('dropdown main', () => {
  render(<DropdownMain />);
  //
  const dropdownElement = screen.getByText(/choose a color/i);
  expect(dropdownElement).toBeInTheDocument();
  //
  const badgeElement = screen.getByText(/nothing/i);
  expect(badgeElement).toBeInTheDocument();
  expect(badgeElement).toHaveClass('bg-secondary', 'badge');
  // click dropdown
  fireEvent.click(dropdownElement);
  const redButtonElement = screen.getByText(/The Color Red/i);
  expect(redButtonElement).toBeInTheDocument();
  // click red
  fireEvent.click(redButtonElement);
  expect(badgeElement).toHaveClass('bg-danger', 'badge');
  expect(badgeElement).toHaveTextContent('The Color Red');
  //
  expect(dropdownElement).toHaveTextContent('The Color Red');
});
