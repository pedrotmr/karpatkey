import { Router } from "express";
import { getAssets } from "./assets.controller";

export const router = Router();

router.get("/", getAssets);
