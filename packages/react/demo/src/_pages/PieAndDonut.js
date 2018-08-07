import React from "react";

import { PieChart } from "@peretz/charts-react";

import { randomizeValue, colors } from "../utils";

const pieOptions = {
	accessibility: false,
	legendClickable: true,
	containerResizable: true,
	colors
};

const pieData = {
	labels: ["2V2N-9KYPM version 1", "L22I-P66EP-L22I-P66EP-L22I-P66EP", "JQAI-2M4L1", "J9DZ-F37AP",
		"YEL48-Q6XK-YEL48", "P66EP-L22I-L22I", "Q6XK-YEL48", "XKB5-L6EP", "YEL48-Q6XK", "L22I-P66EP-L22I"],
	datasets: [
		{
			label: "Dataset 1",
			backgroundColors: colors,
			data: [100000, 200000, 600000, 100000, 400000, 450000, 300000, 70000, 20000, 120000]
		}
	]
};

export default class PieAndDonut extends React.Component {
	changeDemoData = () => {
		const oldData = this.pieChart.data;

		// Randomize old data values
		const newData = Object.assign({}, oldData);
		newData.datasets = oldData.datasets.map(dataset => {
			const datasetNewData = dataset.data.map(dataPoint => randomizeValue(dataPoint));

			const newDataset = Object.assign({}, dataset, { data: datasetNewData });

			return newDataset;
		});

		this.pieChart.setData(newData);
	}

	render() {
		return (
			<div>
				<h2>Basic Pie</h2>

				<PieChart
					data={pieData}
					options={pieOptions}
					ref={pieChart => this.pieChart = pieChart}
				/>

				<button className="btn--primary" onClick={this.changeDemoData}>
					Change Data
				</button>
			</div>
		)
	}
}
