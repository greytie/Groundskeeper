import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Card } from "../components/Card";
import { itemListAtom } from "../recoil/atoms/ItemListAtom";

export function Schedule() {
	const [inputValue, setInputValue] = useState('');
	const setItemList = useSetRecoilState(itemListAtom);

	const scheduleItem = () => {
		setItemList((oldItemList) => [
			...oldItemList,
			inputValue
		]);
		setInputValue('');
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
