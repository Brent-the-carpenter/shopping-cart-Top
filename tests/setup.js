import { expect, afterEach, beforeEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);
beforeEach(() => {
  global.fetch = vi.fn((url) =>
    Promise.resolve({
      json: () =>
        Promise.resolve(
          url.endsWith("/products")
            ? [{ id: 1, title: "Item 1", price: 10, image: "item1.jpg" }]
            : { error: "Not found" }
        ),
      ok: url.endsWith("/products"),
    })
  );
});

afterEach(() => {
  cleanup();
});
