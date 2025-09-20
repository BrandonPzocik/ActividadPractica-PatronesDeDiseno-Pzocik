import { notifierFactory } from "./clases/notifierFactory";

export async function runFactory() {
  const envioNoticaciones = new notifierFactory();
  const mensaje1 = envioNoticaciones.notificar("Email");
  mensaje1.send("carlos", "hola a que hora volves?");
  const mensaje2 = envioNoticaciones.notificar("SMS");
  mensaje2.send("Carla", "Nos vemos a la 17hs");
  const mensaje3 = envioNoticaciones.notificar("WhatsApp");
  mensaje3.send("brandon", "estudia para los parciales");
}
