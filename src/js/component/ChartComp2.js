import React, { PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
	{
		name: "Mon",
		average: 28,
		actual: 31
		//amt: 2400
	},
	{
		name: "Tue",
		average: 27,
		actual: 29
		//amt: 2210
	},
	{
		name: "Wed",
		average: 27,
		actual: 27
		//amt: 2290
	},
	{
		name: "Thu",
		average: 27,
		actual: 28
		//amt: 2000
	},
	{
		name: "Fri",
		average: 29,
		actual: 28
		//amt: 2181
	},
	{
		name: "Sat",
		average: 28,
		actual: 27
		//amt: 2500
	},
	{
		name: "Sun",
		average: 29,
		actual: 27
		//amt: 2100
	}
];

const dataMonth = [
	{
		name: "I",
		average: 28,
		actual: 28
		//amt: 2400
	},
	{
		name: "II",
		average: 27,
		actual: 28
		//amt: 2210
	},
	{
		name: "III",
		average: 27,
		actual: 29
		//amt: 2290
	},
	{
		name: "IV",
		average: 28,
		actual: 28
		//amt: 2000
	}
];
export default class ChartComp2 extends PureComponent {
	// static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

	render() {
		return (
			<div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
				<div style={{ marginTop: "20px" }}>
					<h2>Daily Load Time</h2>
					<LineChart
						width={500}
						height={350}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5
						}}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type="monotone"
							dataKey="actual"
							stroke="#d88496"
							activeDot={{ r: 7 }}
							name="Actual time"
						/>
						<Line type="monotone" dataKey="average" stroke="#82ca9d" name="Average time" />
					</LineChart>
				</div>
				<div style={{ marginTop: "20px" }}>
					<h2>Weekly Load Time</h2>
					<LineChart
						width={500}
						height={350}
						data={dataMonth}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5
						}}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type="monotone"
							dataKey="actual"
							stroke="#d88496"
							activeDot={{ r: 7 }}
							name="Actual time"
						/>
						<Line type="monotone" dataKey="average" stroke="#82ca9d" name="Average time" />
					</LineChart>
				</div>
			</div>
		);
	}
}
