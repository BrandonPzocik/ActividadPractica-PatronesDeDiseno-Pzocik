import { INotifier } from "../interfaces/INotifier";

class sendWhatsApp implements INotifier {
  send(to: string, message: string) {
    console.log(`para ${to}, ${message}, desde WhatsApp`);
  }
}

class sendEmail implements INotifier {
  send(to: string, message: string) {
    console.log(`para ${to}, ${message}, desde Email`);
  }
}

class sendsms implements INotifier {
  send(to: string, message: string) {
    console.log(`para ${to}, ${message}, desde sms`);
  }
}

export class notifierFactory {
  public notificar(channel: string): INotifier {
    if (channel === "WhatsApp") {
      return new sendWhatsApp();
    } else if (channel === "Email") {
      return new sendEmail();
    } else if (channel === "SMS") {
      return new sendsms();
    }
    throw new Error("tipo de canal no reconocido");
  }
}
