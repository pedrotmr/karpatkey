import express from "express";
import { router as assetRoutes } from "./assets/assets.routes";

export const app = express();
const port = 3001;

app.use("/assets", assetRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
