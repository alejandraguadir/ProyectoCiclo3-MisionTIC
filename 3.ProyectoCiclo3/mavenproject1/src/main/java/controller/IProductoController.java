package controller;

import java.util.Map;
import java.sql.Date;

public interface IProductoController {

    public String addProducto(String num_parte, String nombre, String categoria, int cantidad, String descripcion, Date fecha_in, double precio);

    public String listar(boolean ordenar, String orden);

    public String traerProducto(String num_parte);

    public String modificar(String nombre, int cantidad, String descripcion, double precio, String num_parte);

    public String eliminarP(String num_parte);

}
