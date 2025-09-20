import { conexionBD } from "./clases/conexionDB";

export async function runSingleton() {
  const conexion = conexionBD.obtenerInstancia("localhost", 300, "brandon");
  conexion.conectar();
  conexion.desconectar();
}
