import {render, screen, waitFor} from "../test-utils";
import OrderEntry from "../../components/entry/OrderEntry";
import {server} from "../../../../mocks/server";
import {rest} from "msw";
import userEvent from "@testing-library/user-event";

test("simple overall flow", async () => {
  const { container } = render(<OrderEntry />);
  const user = userEvent.setup();

  await waitFor(async () => {
    const totalPartLabels = await screen.findAllByRole("heading", {level: 6, name: /Total price of/i});
    expect(totalPartLabels).toHaveLength(2);
  });
  // first total
  const totalLabel = screen.getByRole("heading", {level: 5, name: /Total order price: /i});
  expect(totalLabel).toHaveTextContent("$0");

  // check contain a scoop
  const chocolateLabel = screen.getByText(/Chocolate/i);
  expect(chocolateLabel).toHaveTextContent("[$1.5]");

  // check contain a topping
  const hotFudgeLabel = screen.getByText(/Hot fudge/i);
  expect(hotFudgeLabel).toHaveTextContent("[$0.3]");

  // check not contain the last item (scoops)
  const strawberryLabel = screen.queryAllByText(/Strawberry/i);
  expect(strawberryLabel).toHaveLength(0);

  // toppings
  const beansLabel = screen.queryAllByText(/Beans/i);
  expect(beansLabel).toHaveLength(0);

  // check scoops sum
  const scoopsSum = screen.getByRole("heading", {level: 6, name: /Total price of scoops/i});
  expect(scoopsSum).toHaveTextContent("$0");

  // check toppings sum
  const toppingsSum = screen.getByRole("heading", {level: 6, name: /Total price of toppings/i});
  expect(toppingsSum).toHaveTextContent("$0");

  // input, click some field, check total part + over all labels
  const chocolateInput = container.querySelector(`input[name="scoops-1"]`);
  expect(chocolateInput).toHaveValue(null);

  // do click a scoop
  await userEvent.type(chocolateInput, "2");

  // check all sums
  expect(scoopsSum).toHaveTextContent("$3");
  expect(toppingsSum).toHaveTextContent("$0");
  expect(totalLabel).toHaveTextContent("$3");

  // find a topping checkbox
  const hotFudgeInput = container.querySelector(`input[name="toppings-3"]`);

  // do click a topping
  await userEvent.click(hotFudgeInput);

  // check all sums
  expect(scoopsSum).toHaveTextContent("$3");
  expect(toppingsSum).toHaveTextContent("$0.3");
  expect(totalLabel).toHaveTextContent("$3.3");

  // remove an item
  await userEvent.clear(chocolateInput);
  await userEvent.type(chocolateInput, "1");

  // check all sums
  expect(scoopsSum).toHaveTextContent("$1.5");
  expect(toppingsSum).toHaveTextContent("$0.3");
  expect(totalLabel).toHaveTextContent("$1.8");
});

test("api request fail", async () => {
  render(<OrderEntry />)

  server.resetHandlers(
    rest.get("https://api.starter.ikuhi.com/scoops", (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get("https://api.starter.ikuhi.com/toppings", (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });
})
