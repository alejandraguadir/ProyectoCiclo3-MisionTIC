package controller;

import java.util.Map;
import java.sql.Date;

public interface IUsuarioController {
    
    public String login(String username, String password);
    
    public String addUsers(String username, String password,
            String cedula, String nombre, String apellidos,
            String correo, Date fecha_nac, Integer celular, String rol);
    
     public String listar(boolean ordenar, String orden);
     
    public String modificar(String username, String nuevaPassword,
            String nuevaCedula, String nuevoNombre, String nuevosApellidos,
            String nuevoCorreo, Date nuevaFecha_nac, Integer nuevoCelular, String nuevoRol);
    
}