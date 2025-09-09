import { ISubscriber } from "./ISubscriber";

export interface IPublisher {
  subscriber(subscriber: ISubscriber): void;
  unsubscribe(subscriber: ISubscriber): void;
  publish(message: string): void;
}
