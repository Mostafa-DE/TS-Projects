import axios, { AxiosPromise } from "axios";
import { HasId } from "../../types";

export class HttpRequests<T extends HasId> {
  constructor(public URL: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.URL}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) return axios.put(`${this.URL}/${id}`, data);
    else return axios.post(`${this.URL}`, data);
  }
}
