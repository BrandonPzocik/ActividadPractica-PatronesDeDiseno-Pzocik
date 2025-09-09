import { Profesor } from "./clases/Profesor";
import { Student } from "./clases/student";

export async function runObserver() {
  console.log("-- Observer --");

  const prof = new Profesor();
  const ana = new Student("Ana");
  const luis = new Student("Luis");

  prof.subscriber(ana);
  prof.subscriber(luis);

  prof.publish("TP1: DataScience — entrega 13:00.");

  prof.unsubscribe(luis);

  prof.publish("TP2: Proyecto — entrega 18:00.");
}
