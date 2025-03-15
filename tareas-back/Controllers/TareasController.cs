using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using tareas_back.Config;
using tareas_back.Models;

namespace tareas_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TareasController : ControllerBase
    {

        private readonly TareasContext _context;

        public TareasController(TareasContext context)
        {
            _context = context;
        }


        // GET: api/<TareasController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TareaModel>>> GetTareas()
        {
            return await _context.Tareas.ToListAsync();

        }

        // GET api/<TareasController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TareaModel>> GetTarea(int id)
        {
            var tarea = await _context.Tareas.FindAsync(id);

            if (tarea != null)
            {
                return tarea;
            }
            return NotFound();
        }

        // GET api/<TareasController>/pendientes
        [HttpGet("pendientes")]
        public async Task<ActionResult<IEnumerable<TareaModel>>> GetTareasPendientes(int id)
        {
            return await _context.Tareas.Where(x => !x.Completada).ToListAsync();
        }

        // GET api/<TareasController>/completadas
        [HttpGet("completadas")]
        public async Task<ActionResult<IEnumerable<TareaModel>>> GetTareasCompletadas(int id)
        {
            return await _context.Tareas.Where(x => x.Completada).ToListAsync();
        }

        // POST api/<TareasController>
        [HttpPost]
        public async Task<ActionResult<TareaModel>> PostTarea(TareaModel tarea)
        {
            _context.Tareas.Add(tarea);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTarea), new { id = tarea.Id }, tarea);

        }

        // PUT api/<TareasController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTarea(int id, TareaModel tarea)
        {
            if (id != tarea.Id)
            {
                return BadRequest();
            }

            _context.Entry(tarea).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TareaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        // DELETE api/<TareasController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTarea(int id)
        {
            var tarea = await _context.Tareas.FindAsync(id);
            if (tarea == null)
            {
                return NotFound();
            }

            _context.Tareas.Remove(tarea);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TareaExists(int id)
        {
            return _context.Tareas.Any(e => e.Id == id);
        }
    }
}
