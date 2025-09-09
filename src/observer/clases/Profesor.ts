import { IPublisher } from "../interfaces/IPublisher";
import { ISubscriber } from "../interfaces/ISubscriber";

export class Profesor implements IPublisher {
  private subscribers: ISubscriber[] = [];

  subscriber(subscriber: ISubscriber): void {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber: ISubscriber): void {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }
  publish(message: string): void {
    console.log(`[Profesor] publico: ${message}`);
    this.subscribers.forEach((subscriber) => subscriber.update(message));
  }
}
