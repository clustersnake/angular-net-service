type TaskType = {
  id: number;
  titulo: string;
  descripcion?: string;
  estado: 'pendiente' | 'completado';
}
export default TaskType;

