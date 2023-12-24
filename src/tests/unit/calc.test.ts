import { expect, test } from "vitest"
import Sum from "../../models/Sum"


test("Test test", () => {

  expect(Sum(1, 1)).toBe(2)
})
