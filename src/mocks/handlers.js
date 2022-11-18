import {rest} from "msw";

export const handlers = [
  rest.get("https://api.starter.ikuhi.com/scoops", (req, res, ctx) => {
    console.log("requested");
    return res(
      ctx.json([
        {
          "id": 1,
          "name": "Chocolate",
          "price": 1.5
        },
        {
          "id": 2,
          "name": "Vanilla",
          "price": 2
        }
      ])
    );
  }),
  rest.get("https://api.starter.ikuhi.com/toppings", (req, res, ctx) => {
    return res(
      ctx.json([
          {
            "id": 1,
            "name": "Cherries",
            "price": 0.2
          },
          {
            "id": 2,
            "name": "M&Ms",
            "price": 0.25
          },
          {
            "id": 3,
            "name": "Hot fudge",
            "price": 0.3
          }
      ])
    );
  }),
];
