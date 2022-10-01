package controller;

import java.sql.ResultSet;
import java.sql.Statement;
import com.google.gson.Gson;

import beans.Usuario;
import connection.DBConnection;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

public class UsuarioController implements IUsuarioController {

    @Override
    public String login(String username, String password) {

        Gson gson = new Gson();

        DBConnection con = new DBConnection();

        String sql = "Select * from usuario where username = '" + username
                + "' and password = '" + password + "'";
        System.out.println(sql);
        try {
            Statement st = con.getConnection().createStatement();
            ResultSet rs = st.executeQuery(sql);

            while (rs.next()) {
                String cedula = rs.getString("cedula");
                String nombre = rs.getString("nombre");
                String apellidos = rs.getString("apellido");
                String correo = rs.getString("correo");
                Date fecha_nac = rs.getDate("fecha_nac");
                Integer celular = rs.getInt("celular");
                String rol = rs.getString("rol");

                Usuario usuario
                        = new Usuario(username, password, cedula, nombre, apellidos, correo, fecha_nac, celular, rol);
                return gson.toJson(usuario);
            }
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        } finally {
            con.desconectar();
        }

        return "false";
    }

    @Override
    public String addUsers(String username, String password,
            String cedula, String nombre, String apellidos,
            String correo, Date fecha_nac, Integer celular, String rol) {

        Gson gson = new Gson();

        DBConnection con = new DBConnection();
        String sql = "Insert into usuario values('" + username + "', '" + password + "',  '" + cedula + "', '" + nombre
                + "', '" + apellidos + "', '" + correo + "', '" + fecha_nac + "',  '" + celular + "', '" + rol + "')";

        try {
            Statement st = con.getConnection().createStatement();
            st.executeUpdate(sql);

            Usuario usuario = new Usuario(username, password, cedula, nombre, apellidos, correo, fecha_nac, celular, rol);

            st.close();

            return gson.toJson(usuario);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());

        } finally {
            con.desconectar();
        }

        return "false";

    }

    @Override
    public String listar(boolean ordenar, String orden) {

        Gson gson = new Gson();

        DBConnection con = new DBConnection();
        String sql = "Select * from usuario";

        if (ordenar == true) {
            sql += " order by rol " + orden;
        }

        List<String> usuarios = new ArrayList<String>();

        try {

            Statement st = con.getConnection().createStatement();
            ResultSet rs = st.executeQuery(sql);

            while (rs.next()) {

                String username = rs.getString("username");
                String password = rs.getString("password");
                String cedula = rs.getString("cedula");
                String nombre = rs.getString("nombre");
                String apellidos = rs.getString("apellido");
                String correo = rs.getString("correo");
                Date fecha_nac = rs.getDate("fecha_nac");
                Integer celular = rs.getInt("celular");
                String rol = rs.getString("rol");

                Usuario usuario = new Usuario(username, password, cedula, nombre, apellidos, correo, fecha_nac, celular, rol);

                usuarios.add(gson.toJson(usuario));

            }
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        } finally {
            con.desconectar();
        }

        return gson.toJson(usuarios);

    }

    @Override
    public String modificar(String username, String nuevaPassword,
            String nuevaCedula, String nuevoNombre, String nuevosApellidos,
            String nuevoCorreo, Date nuevaFecha_nac, Integer nuevoCelular, String nuevoRol) {

        DBConnection con = new DBConnection();

        String sql = "Update usuario set password = '" + nuevaPassword
                + "', cedula = '" + nuevaCedula + "', "
                + "nombre = '" + nuevoNombre + "', apellido = '"
                + nuevosApellidos + "', correo = " + nuevoCorreo + "', fecha_nac = '" + nuevaFecha_nac + "', celular = '" + nuevoCelular + "', rol'" + nuevoRol;

        try {

            Statement st = con.getConnection().createStatement();
            st.executeUpdate(sql);

            return "true";
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        } finally {
            con.desconectar();
        }

        return "false";

    }

    @Override
    public String traerporUsername(String username) {
        Gson gson = new Gson();

        DBConnection con = new DBConnection();

        String sql = " SELECT * FROM usuario WHERE username = '" + username+"'";
        Usuario usuario = null;

        try {

            Statement st = con.getConnection().createStatement();
            ResultSet rs = st.executeQuery(sql);

            while (rs.next()) {

                String password = rs.getString("password");
                String cedula = rs.getString("cedula");
                String nombre = rs.getString("nombre");
                String apellidos = rs.getString("apellido");
                String correo = rs.getString("correo");
                Date fecha_nac = rs.getDate("fecha_nac");
                Integer celular = rs.getInt("celular");
                String rol = rs.getString("rol");

                usuario = new Usuario(username, password, cedula, nombre, apellidos, correo, fecha_nac, celular, rol);

            }
        } catch (Exception ex) {

            System.out.println(ex.getMessage());
        } finally {
            con.desconectar();
        }

        return gson.toJson(usuario);

    }
}
