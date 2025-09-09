import { ISubscriber } from "../interfaces/ISubscriber";

export class Student implements ISubscriber {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(`[Alumno ${this.name}] Nueva notificación: ${message}`);
  }
}
