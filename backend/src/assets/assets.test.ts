import express from "express";
import request from "supertest";
import { getAssets } from "./assets.controller";
import { Asset, mockAssets } from "./assets.model";

const ASSETS_URL = "/assets";

const app = express();
app.get(ASSETS_URL, getAssets);

describe("GET /assets", () => {
  it("should return all assets with default pagination", async () => {
    const response = await request(app).get(ASSETS_URL);
    expect(response.status).toBe(200);
    expect(response.body.total).toBe(mockAssets.length);
    expect(response.body.page).toBe(1);
    expect(response.body.limit).toBe(10);
    expect(response.body.data.length).toBeLessThanOrEqual(10);
  });

  it("should filter assets by type", async () => {
    const response = await request(app)
      .get(ASSETS_URL)
      .query({ type: "bonds" });
    expect(response.status).toBe(200);
    expect(
      response.body.data.every((asset: Asset) => asset.type === "bonds")
    ).toBe(true);
  });

  it("should sort assets by value", async () => {
    const response = await request(app)
      .get(ASSETS_URL)
      .query({ sort: "value" });
    expect(response.status).toBe(200);
    const sorted = [...response.body.data].sort(
      (a: Asset, b: Asset) => a.value - b.value
    );
    expect(response.body.data).toEqual(sorted);
  });

  it("should paginate assets", async () => {
    const response = await request(app)
      .get(ASSETS_URL)
      .query({ page: 2, limit: 1 });
    expect(response.status).toBe(200);
    expect(response.body.page).toBe(2);
    expect(response.body.limit).toBe(1);
    expect(response.body.data.length).toBe(1);
  });

  it("should return an error when an invalid type parameter is provided", async () => {
    const response = await request(app).get(ASSETS_URL).query({ type: "any" });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid type parameter");
  });
});
