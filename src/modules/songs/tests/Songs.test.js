import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import Songs from "../components/Songs";

test('song flow', async () => {
  const { container } = render(<Songs />);
  const user = userEvent.setup();
  //
  expect(() => screen.getByTestId('selected-song')).toThrow();
  //
  const allStarButton = container.querySelector('div[data-key="All Star"] button[class="btn btn-primary"]');
  expect(allStarButton).toBeInTheDocument();
  // do click a song
  await user.click(allStarButton);
  //
  const selectedSongDiv = screen.getByTestId('selected-song');
  expect(selectedSongDiv).toBeInTheDocument();
  //
  const titlePara = screen.getByTestId('detailed-title');
  expect(titlePara).toHaveTextContent('Title: All Star');
  //
  const durationPara = screen.getByTestId('detailed-duration');
  expect(durationPara).toHaveTextContent('Duration: 3:15');
})
