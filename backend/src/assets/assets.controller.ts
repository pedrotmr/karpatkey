import { Request, Response } from "express";
import { mockAssets } from "./assets.model";

export function getAssets(req: Request, res: Response) {
  const {
    type,
    sort = "desc",
    order = "name",
    page = 1,
    limit = 10,
  } = req.query;

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

  if (type) {
    if (!validTypes.includes(type.toString())) {
      return res.status(400).json({ error: "Invalid type parameter" });
    }
    assets = assets.filter((asset) => asset.type === type);
  }

  if (sort) {
    assets = assets.sort((a, b) => {
      const aValue = a[sort as keyof typeof a];
      const bValue = b[sort as keyof typeof a];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return order === "desc"
          ? bValue.localeCompare(aValue)
          : aValue.localeCompare(bValue);
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        return order === "desc" ? bValue - aValue : aValue - bValue;
      } else {
        return 0;
      }
    });
  }

  const start = (Number(page) - 1) * Number(limit);
  const end = Math.min(start + Number(limit), assets.length);
  const paginatedAssets = assets.slice(start, end);

  const result = {
    pages: {
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(assets.length / Number(limit)),
      from: start + 1,
      to: end,
      total: assets.length,
    },
    data: paginatedAssets,
  };

  res.json(result);
}
