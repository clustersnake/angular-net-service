namespace tareas_back.Models;

public class TareaModel
{
  public int Id { get; set; }
  public required string Titulo { get; set; }
  public string? Descripcion { get; set; }
  public Boolean Completada { get; set; }
}
