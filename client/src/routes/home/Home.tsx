import { useSelector } from "react-redux";
import { Card } from "../../components/Card";


export function Home() {
	const items: string[] = useSelector((state: any) => state.todayItems)

	return (
		<Card title="Today:">
			<ol>
				{
					items.map((item) => (
						<li key={item}><span>{item}</span></li>
					))
				}
			</ol>
		</Card>
	);
}
