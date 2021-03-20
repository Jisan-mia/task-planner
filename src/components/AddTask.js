import React, { useState } from "react";
const AddTask = ({ handleSaveTask }) => {
	const [text, setText] = useState("");
	const [day, setDay] = useState("");
	const [reminder, setReminder] = useState(false);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (text.length && day.length) {
			handleSaveTask({ text, day, reminder });
		} else {
			alert("Enter valid input");
		}

		setText("");
		setDay("");
		setReminder(false);
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<div className="form-control">
				<label>Task</label>
				<input
					value={text}
					onChange={(e) => setText(e.target.value)}
					type="text"
					placeholder="Add Task"
				/>
			</div>
			<div className="form-control">
				<label>Day & Time</label>
				<input
					value={day}
					onChange={(e) => setDay(e.target.value)}
					type="text"
					placeholder="Feb 5th at 2:30"
					name="time"
					id="time"
				/>
			</div>
			<div className="form-control-check">
				<label>Reminder</label>
				<input
					value={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)}
					type="checkbox"
					checked={reminder}
					name=""
					id="reminder"
				/>
			</div>

			<input type="submit" className="btn btn-block" value="Save Task" />
		</form>
	);
};

export default AddTask;
