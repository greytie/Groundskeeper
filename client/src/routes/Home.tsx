import { Card } from "../components/Card";
import { useRecoilValue } from "recoil";
import { itemListAtom } from "../recoil/atoms/ItemListAtom";

export function Home() {
	const itemList = useRecoilValue(itemListAtom);
	return (
		<Card title="Today:">
			<ol>
				{
					itemList.map((item) => (
						<li key={item}><span>{item}</span></li>
					))
				}
			</ol>
		</Card>
	);
}
