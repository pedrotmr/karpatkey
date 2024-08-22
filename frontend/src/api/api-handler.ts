import axios, { isAxiosError } from "axios";

const BASE_URL: string = "http://localhost:3001/";

class ApiHandler {
  axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
  });

  async sendRequest<T>(
    method: string,
    endpoint: string,
    data: object = {},
    params: object = {},
  ): Promise<T> {
    try {
      const response = await this.axiosInstance({
        method,
        url: endpoint,
        data,
        params,
      });
      return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const detail = error.response.data.errors?.[0]?.detail;
        throw new Error(detail);
      } else {
        throw new Error(
          `Error occurred while making ${method} request to ${endpoint}`,
        );
      }
    }
  }

  get<T>(endpoint: string, params?: object): Promise<T> {
    return this.sendRequest<T>("GET", endpoint, undefined, params);
  }
}

const api = new ApiHandler();

export default api;
