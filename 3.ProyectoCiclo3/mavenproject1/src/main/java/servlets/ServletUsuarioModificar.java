/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlets;

import controller.UsuarioController;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Yolima Alejandra
 */
@WebServlet(name = "ServletUsuarioModificar")
public class ServletUsuarioModificar extends HttpServlet {

    private static final long serialVersionUID = 1L;

    public ServletUsuarioModificar() {
        super();
        // TODO Auto-generated constructor stub
    }

    
    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
                throws ServletException, IOException {
		// TODO Auto-generated method stub
		 UsuarioController usuario = new UsuarioController();

        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String cedula = request.getParameter("cedula");
        String nombre = request.getParameter("nombre");
        String apellidos = request.getParameter("apellidos");
        String correo = request.getParameter("correo");
        Date fecha_nac = Date.valueOf(request.getParameter("fecha_nac"));
        Integer celular = Integer.parseInt(request.getParameter("celular"));
        String rol = request.getParameter("rol");

        String result = usuario.modificar(username, password, cedula, nombre, apellidos, correo, fecha_nac, celular, rol);

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println(result);
        out.flush();
        out.close();
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     * response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }
                
}

