import { IHttpClient } from "../interfaces/IHttpClient";

export class SimpleHttpClient {
  constructor(private httpClient: IHttpClient) {}

  setClient(client: IHttpClient) {
    this.httpClient = client;
  }

  async get<T>(url: string): Promise<T> {
    return this.httpClient.get<T>(url);
  }
}
