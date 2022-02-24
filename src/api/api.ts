import axios, { AxiosInstance } from "axios";

export class Api {
  protected server: AxiosInstance;

  constructor(private baseUrl?: string) {
    this.server = axios.create({
      baseURL: this.baseUrl,
      headers: { 'content-type': 'application/json' },
      timeout: 10000
    });
  };
};