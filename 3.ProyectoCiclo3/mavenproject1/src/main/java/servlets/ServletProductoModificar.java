package servlets;

import beans.Producto;
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
@WebServlet("/ServletProductoModificar")
public class ServletProductoModificar extends HttpServlet {

    private static final long serialVersionUID = 1L;

    public ServletProductoModificar() {
        super();

    }
    
   protected void doGet(HttpServletRequest request, HttpServletResponse response) 
                throws ServletException, IOException {
		// TODO Auto-generated method stub
		 ProductoController producto = new ProductoController();

        System.out.println("*****************************************");  
        String num_parte = request.getParameter("num_parte");
        String nombre = request.getParameter("nombre");
        Integer cantidad = Integer.parseInt(request.getParameter("cantidad"));       
        String descripcion = request.getParameter("descripcion");
        double precio = Double.parseDouble(request.getParameter("precio"));
        
       String result = producto.modificar(nombre, cantidad, descripcion, precio, num_parte);
       
//        String result = producto.modificar(num_parte, nombre, cantidad, descripcion, precio);
        
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

