import api from "../api-handler";
import { AssetRespose } from "./type";

export const getAssets = async (params?: any) => {
  const assets = await api.get<AssetRespose>("assets", params);
  return assets;
};
