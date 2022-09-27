
package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controller.UsuarioController;


@WebServlet(name = "ServletUsuarioListar", urlPatterns = {"/ServletUsuarioListar"})
public class ServletUsuarioListar extends HttpServlet {
	private static final long serialVersionUID = 1L;
        
        
        
        public ServletUsuarioListar() {
        super();
        }
        
        protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
         
            UsuarioController usuario = new UsuarioController();
            
            boolean ordenar = Boolean.parseBoolean(request.getParameter("ordenar"));
		String orden = request.getParameter("orden");
		
		String usuarioStr = usuario.listar(ordenar, orden);
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		out.println(usuarioStr);
		out.flush();
		out.close();
            
        
        }
        
        protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
       

   
        
    


}
