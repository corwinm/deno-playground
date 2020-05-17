import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("hello world", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});

async function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

Deno.test("async hello world", async () => {
  const x = 1 + 2;

  await delay(100);
  if (x !== 3) {
    throw Error("x should be equal to 3");
  }
});
