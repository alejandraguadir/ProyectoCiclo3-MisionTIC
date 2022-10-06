package controller;

import beans.Usuario;
import java.util.Map;
import java.sql.Date;

public interface IUsuarioController {

    public String login(String username, String password);

    public String addUsers(String username, String password,
            String cedula, String nombre, String apellidos,
            String correo, Date fecha_nac, Integer celular, String rol);

    public String listar(boolean ordenar, String orden);

    public String modificar(
            String cedula, String nombre, String apellidos,
            String correo, Integer celular, String rol, String username);

    public String traerporUsername(String username);

    public String eliminar(String username);
}
