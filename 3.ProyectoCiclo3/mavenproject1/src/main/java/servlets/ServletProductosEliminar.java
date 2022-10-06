package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import controller.ProductoController;

/**
 *
 * @author Yolima Alejandra
 */
@WebServlet("/ServletProductosEliminar")
public class ServletProductosEliminar extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public ServletProductosEliminar() {
        super();
        // TODO Auto-generated constructor stub
    }
    
     protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        

        ProductoController producto = new ProductoController();

        String num_parte = request.getParameter("num_parte");
        System.out.println("prueba eliminar "+num_parte);
        String result = producto.eliminarP(num_parte);

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
