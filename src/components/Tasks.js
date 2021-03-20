import React from "react";
import Task from "./Task";
const Tasks = ({ tasks, onDelete, onReminderToggle }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task
					key={task.id}
					onReminderToggle={onReminderToggle}
					onDelete={onDelete}
					task={task}
				/>
			))}
		</>
	);
};

export default Tasks;
