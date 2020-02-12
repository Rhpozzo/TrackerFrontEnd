import React, { PureComponent } from "react";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from "recharts";

const data = [
	{
		subject: "Mon",
		A: 35,
		B: 33,
		fullMark: 50
	},
	{
		subject: "Tue",
		A: 33,
		B: 28,
		fullMark: 50
	},
	{
		subject: "Wed",
		A: 30,
		B: 38,
		fullMark: 50
	},
	{
		subject: "Thu",
		A: 36,
		B: 29,
		fullMark: 50
	},
	{
		subject: "Fri",
		A: 37,
		B: 31,
		fullMark: 50
	},
	{
		subject: "Sat",
		A: 27,
		B: 33,
		fullMark: 50
	},
	{
		subject: "Sun",
		A: 25,
		B: 26,
		fullMark: 50
	}
];

const dataWeek = [
	{
		name: "Week I",
		uv: 33,
		pv: 29,
		amt: 40
	},
	{
		name: "Week II",
		uv: 30,
		pv: 28,
		amt: 40
	},
	{
		name: "Week III",
		uv: 35,
		pv: 27,
		amt: 40
	},
	{
		name: "Week IV",
		uv: 36,
		pv: 31,
		amt: 40
	}
];

export default class ChartCar2 extends PureComponent {
	static jsfiddleUrl = "https://jsfiddle.net/alidingling/6ebcxbx4/";

	render() {
		return (
			<div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
				<div style={{ marginTop: "20px" }}>
					<RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
						<PolarGrid />
						<PolarAngleAxis dataKey="subject" />
						<PolarRadiusAxis />
						<Radar name="Company Load Time" dataKey="B" stroke="#9fd884" fill="#9fd884" fillOpacity={0.7} />
						<Radar name="Van N2 Load Time" dataKey="A" stroke="#d88496" fill="#d88496" fillOpacity={0.4} />
						<Legend />
					</RadarChart>
				</div>
				<div style={{ marginTop: "20px" }}>
					<BarChart
						width={600}
						height={500}
						data={dataWeek}
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
						<Bar dataKey="pv" fill="#82ca9d" name="Company Load Time" />
						<Bar dataKey="uv" fill="#d88496" name="Van N2 Load Time" />
					</BarChart>
				</div>
			</div>
		);
	}
}
