import { AxiosAdapter } from "./clases/AxiosAdapter";
import { FetchAdapter } from "./clases/FetchAdapter";
import { SimpleHttpClient } from "./clases/SimpleHttpClient";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const URL = "https://jsonplaceholder.typicode.com/todos/1";

export async function runAdapter() {
  console.log("-- Adapter --");

  //FetchAdapter
  const fetchClient = new SimpleHttpClient(new FetchAdapter());
  const todoWithFetch = await fetchClient.get<Todo>(URL);
  console.log("Con fetch:", todoWithFetch);

  // Cambiamos a AxiosAdapter
  fetchClient.setClient(new AxiosAdapter());
  const todoWithAxios = await fetchClient.get<Todo>(URL);
  console.log("Con axios:", todoWithAxios);
}
