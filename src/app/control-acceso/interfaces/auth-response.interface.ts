/**
 * Intefaz con el token string
 */
export interface AuthResponse{
  jwt_token:string,
  idusuario:string,
  rol:string
}
/**
 * Interfaz con email y password.
 */
export interface UsuarioLogin{
  email:string,
  password:string
}
export interface ExisteEmail{
  respuesta:boolean;
}

