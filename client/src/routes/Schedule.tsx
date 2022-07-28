import { useState } from "react";
import { Card } from "../components/Card";

export function Schedule() {
	const [inputValue, setInputValue] = useState('');

	const scheduleItem = () => {
	}

	const onChange = ({target: {value}}: any): void => {
		setInputValue(value);
	}
	

	return (
		<Card title="Schedule:">
			{/* Text field */}
			<input type="text" value={inputValue} onChange={onChange} />
			<button onClick={scheduleItem}>Schedule</button>

			{/* Date picker field */}
		</Card>
	);
}
