import TaskType from "./TaskType";

type TaskResponseType = {
  status: number,
  data?: TaskType | TaskType[],
  message: string
}

export default TaskResponseType;
