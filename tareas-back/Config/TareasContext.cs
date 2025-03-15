using Microsoft.EntityFrameworkCore;
using tareas_back.Models;

namespace tareas_back.Config;

public class TareasContext : DbContext
{

  public TareasContext(DbContextOptions<TareasContext> options) : base(options)
  { }

  public DbSet<TareaModel> Tareas { get; set; }
}

