import { describe, expect, it } from "vitest"

describe("Status page /api/v1/status", () => {
  it("should receive status 200", async () => {
    const response = await fetch(`${process.env.VITE_API_BASE_URL}/api/v1/status`)

    expect(response.status).toBe(200)
  })
})