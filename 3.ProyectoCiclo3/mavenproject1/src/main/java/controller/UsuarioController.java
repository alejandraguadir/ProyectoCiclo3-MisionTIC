package controller;

import java.sql.ResultSet;
import java.sql.Statement;
import com.google.gson.Gson;

import beans.Usuario;
import connection.DBConnection;
import java.sql.Date;

public class UsuarioController implements IUsuarioController {

    @Override
    public String login(String username, String password) {

        Gson gson = new Gson();

        DBConnection con = new DBConnection();

        String sql = "Select * from usuario where username = '" + username
                + "' and password = '" + password + "'";
        try {
            Statement st = con.getConnection().createStatement();
            ResultSet rs = st.executeQuery(sql);
            

            while (rs.next()) {
                String cedula = rs.getString("cedula");
                String nombre = rs.getString("nombre");
                String apellidos = rs.getString("apellidos");
                String correo = rs.getString("correo");
                Date fecha_nac = rs.getDate("fecha_nac");
                String celular = rs.getString("celular");
                String rol = rs.getString("rol");
                
//Agregar un split
                Usuario usuario
                        = new Usuario(username, password, cedula, nombre, apellidos, correo, , celular, rol);
                return gson.toJson(usuario);
            }
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        } finally {
            con.desconectar();
        }

        return "false";
    }
}