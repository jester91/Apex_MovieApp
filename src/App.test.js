import { render, screen, act } from "@testing-library/react";
import App from "./App";
import React from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        movies: "http://movies.imdb",
        value: "Movie DB",
      }),
  })
);

describe("App", () => {
  it("loads the movies", () => {
    act(() => render(<App />));
    expect(container.innerHTML).toMatch("Movie");
    expect(screen.getByText("Movie data")).tobeinthedocument();
  });
});
