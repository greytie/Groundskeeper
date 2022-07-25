type Props = {
    title: string;
    children: React.ReactNode;
}

export function Card({title, children}: Props) {
	return (
		<div className="bg-gray-700 w-5/6 h-96 rounded-lg ml-20 px-20 py-10">
			<h1 className="text-3xl font-bold text-slate-100">
                {title}
			</h1>
            {children}
		</div>
	);
}


