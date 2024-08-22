import { Request, Response } from "express";
import { mockAssets } from "./assets.model";

export function getAssets(req: Request, res: Response) {
  const { type, sort, page = 1, limit = 10 } = req.query;

  let assets = mockAssets;

  const validTypes = [
    "cryptocurrency",
    "stocks",
    "bonds",
    "commodity",
    "currency",
  ];

  if (type) {
    if (!validTypes.includes(type.toString())) {
      return res.status(400).json({ error: "Invalid type parameter" });
    }
    assets = assets.filter((asset) => asset.type === type);
  }

  if (sort) {
    assets = assets.sort((a, b) =>
      a[sort as keyof typeof a] > b[sort as keyof typeof a] ? 1 : -1
    );
  }

  const start = (Number(page) - 1) * Number(limit);
  const end = start + Number(limit);
  const paginatedAssets = assets.slice(start, end);

  const result = {
    total: assets.length,
    page: Number(page),
    limit: Number(limit),
    data: paginatedAssets,
  };

  res.json(result);
}
