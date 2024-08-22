import express from "express";
import request from "supertest";
import { getAssets } from "./assets.controller";
import { Asset } from "./assets.model";

const ASSETS_URL = "/assets";

const app = express();
app.get(ASSETS_URL, getAssets);

describe("GET /assets", () => {
  it("should paginate assets", async () => {
    const response = await request(app)
      .get(ASSETS_URL)
      .query({ page: 2, limit: 1 });
    expect(response.status).toBe(200);
    expect(response.body.pages.page).toBe(2);
    expect(response.body.pages.limit).toBe(1);
    expect(response.body.data.length).toBe(1);
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

  it("should filter assets by cryptocurrency type", async () => {
    const response = await request(app)
      .get(ASSETS_URL)
      .query({ type: "cryptocurrency" });
    expect(response.status).toBe(200);
    expect(
      response.body.data.every(
        (asset: Asset) => asset.type === "cryptocurrency"
      )
    ).toBe(true);
  });

  it("should return assets sorted by value in ascending order", async () => {
    const response = await request(app).get(
      `${ASSETS_URL}?sort=value&order=asc`
    );
    expect(response.status).toBe(200);
    const assets = response.body.data;
    for (let i = 1; i < assets.length; i++) {
      expect(assets[i].value).toBeGreaterThanOrEqual(assets[i - 1].value);
    }
  });

  it("should return assets sorted by name in descending order", async () => {
    const response = await request(app).get(
      `${ASSETS_URL}?sort=name&order=desc`
    );
    expect(response.status).toBe(200);
    const assets = response.body.data;
    for (let i = 1; i < assets.length; i++) {
      expect(
        assets[i].name.localeCompare(assets[i - 1].name)
      ).toBeLessThanOrEqual(0);
    }
  });

  it("should return an error when an invalid type parameter is provided", async () => {
    const response = await request(app).get(ASSETS_URL).query({ type: "any" });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid type parameter");
  });
});
