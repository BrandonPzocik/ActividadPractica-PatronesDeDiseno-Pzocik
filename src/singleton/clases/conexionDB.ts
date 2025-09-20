import { baseDatos } from "../interface/baseDatos";

export class conexionBD implements baseDatos {
  private static instancia: conexionBD;
  private host: string;
  private puerto: number;
  private usuario: string;

  constructor(host: string, puerto: number, usuario: string) {
    this.host = host;
    this.puerto = puerto;
    this.usuario = usuario;
  }

  public static obtenerInstancia(
    host: string,
    puerto: number,
    usuario: string
  ): conexionBD {
    if (!conexionBD.instancia) {
      conexionBD.instancia = new conexionBD(host, puerto, usuario);
    }
    return conexionBD.instancia;
  }

  public conectar(): void {
    console.log("base de datos conectada");
  }

  public desconectar(): void {
    console.log("base de datos desconectada");
  }
}
