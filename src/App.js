import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		};
		getTasks();
	}, []);

	//fetch tasks
	const fetchTasks = async () => {
		const res = await fetch("http://localhost:5000/tasks");
		const data = await res.json();
		return data;
	};
	//fetch single task
	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		const data = await res.json();
		return data;
	};

	//delete a task
	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, {
			method: "DELETE",
		});

		const remaingTasks = tasks.filter((task) => task.id !== id);
		setTasks(remaingTasks);
	};

	// toggle reminder
	const toggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id);
		const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(updTask),
		});

		const data = await res.json();

		const toggledTask = tasks.map((task) =>
			task.id === id ? { ...task, reminder: data.reminder } : task
		);

		setTasks(toggledTask);
	};

	// handle save task
	const handleSaveTask = async (task) => {
		const res = await fetch(`http://localhost:5000/tasks`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(task),
		});

		const data = await res.json();
		setTasks([...tasks, data]);

		// const id = Math.floor(Math.random() * 10000) + 1;
		// const newTask = { id, ...task };
		// setTasks([...tasks, newTask]);
	};

	//on add header button
	const onAdd = () => setShowAddTask(!showAddTask);

	return (
		<Router>
			<div className="container">
				<Header onAdd={onAdd} showAddTask={showAddTask} title="Task Tracker" />

				<Route
					path="/"
					exact
					render={(props) => (
						<>
							{showAddTask && <AddTask handleSaveTask={handleSaveTask} />}
							{!tasks.length ? (
								"There is no task."
							) : (
								<Tasks
									onReminderToggle={toggleReminder}
									onDelete={deleteTask}
									tasks={tasks}
								/>
							)}
						</>
					)}
				/>

				<Route path="/about" component={About} />

				<Footer />
			</div>
		</Router>
	);
}

export default App;
