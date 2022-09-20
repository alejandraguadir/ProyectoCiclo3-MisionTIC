package controller;

import java.sql.Date;
import java.util.Map;

public interface IUsuarioController {

    public String login(String password, String cedula, String nombre, String apellido, String correo, Date fecha_nac, int celular, String rol );

   // public String register(String password, String cedula, String nombre, String apellido, String correo, Date fecha_nac, int celular, String rol);

    
}
