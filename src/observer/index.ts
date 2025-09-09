import { Profesor } from "./clases/Profesor";
import { Student } from "./clases/student";

export async function runObserver() {
  console.log("-- Observer --");

  const prof = new Profesor();
  const ana = new Student("Ana");
  const luis = new Student("Luis");

  // Suscribir alumnos
  prof.subscriber(ana);
  prof.subscriber(luis);

  // Publicar primera tarea
  prof.publish("TP1: Algoritmos — entrega viernes 18:00.");

  // Dar de baja a Luis
  prof.unsubscribe(luis);

  // Publicar segunda tarea
  prof.publish("TP2: Patrones — entrega martes 18:00.");
}
