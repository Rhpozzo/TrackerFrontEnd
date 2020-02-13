import React, { PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
	{
		name: "Monday",
		average: 28,
		actual: 26
		//amt: 2400
	},
	{
		name: "Tuesday",
		average: 27,
		actual: 26
		//amt: 2210
	},
	{
		name: "Wednsday",
		average: 27,
		actual: 27
		//amt: 2290
	},
	{
		name: "Thursday",
		average: 27,
		actual: 26
		//amt: 2000
	},
	{
		name: "Friday",
		average: 29,
		actual: 27
		//amt: 2181
	},
	{
		name: "Saturday",
		average: 28,
		actual: 27
		//amt: 2500
	},
	{
		name: "Sunday",
		average: 29,
		actual: 28
		//amt: 2100
	}
];

const dataMonth = [
	{
		name: "Week I",
		average: 28,
		actual: 26
		//amt: 2400
	},
	{
		name: "Week II",
		average: 27,
		actual: 27
		//amt: 2210
	},
	{
		name: "Week III",
		average: 27,
		actual: 27
		//amt: 2290
	},
	{
		name: "Week IV",
		average: 28,
		actual: 26
		//amt: 2000
	}
];
export default class ChartComp3 extends PureComponent {
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
							stroke="#d8af84"
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
							stroke="#d8af84"
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
