import trLocaleObject from "date-fns/locale/tr/index";

export const groupedBarData = [
	{ group: "Dataset 1", key: "Qty", value: 65000 },
	{ group: "Dataset 1", key: "More", value: -29123 },
	{ group: "Dataset 1", key: "Sold", value: -35213 },
	{ group: "Dataset 1", key: "Restocking", value: 51213 },
	{ group: "Dataset 1", key: "Misc", value: 16932 },
	{ group: "Dataset 2", key: "Qty", value: 32432 },
	{ group: "Dataset 2", key: "More", value: -21312 },
	{ group: "Dataset 2", key: "Sold", value: -56456 },
	{ group: "Dataset 2", key: "Restocking", value: -21312 },
	{ group: "Dataset 2", key: "Misc", value: 34234 },
	{ group: "Dataset 3", key: "Qty", value: -12312 },
	{ group: "Dataset 3", key: "More", value: 23232 },
	{ group: "Dataset 3", key: "Sold", value: 34232 },
	{ group: "Dataset 3", key: "Restocking", value: -12312 },
	{ group: "Dataset 3", key: "Misc", value: -34234 },
	{ group: "Dataset 4", key: "Qty", value: -32423 },
	{ group: "Dataset 4", key: "More", value: 21313 },
	{ group: "Dataset 4", key: "Sold", value: 64353 },
	{ group: "Dataset 4", key: "Restocking", value: 24134 },
	{ group: "Dataset 4", key: "Misc", value: 24134 }
];

export const groupedBarOptions = {
	title: "Grouped bar (discrete)",
	axes: {
		left: {
			mapsTo: "value"
		},
		bottom: {
			scaleType: "labels",
			mapsTo: "key"
		}
	}
};

// Horizontal Grouped
export const groupedHorizontalBarData = groupedBarData;

export const groupedHorizontalBarOptions = {
	title: "Grouped horizontal bar (discrete)",
	axes: {
		left: {
			scaleType: "labels",
			mapsTo: "key"
		},
		bottom: {
			mapsTo: "value"
		}
	}
};

// Simple bar
export const simpleBarData = [
	{ group: "Qty", value: 65000 },
	{ group: "More", value: 29123 },
	{ group: "Sold", value: 35213 },
	{ group: "Restocking", value: 51213 },
	{ group: "Misc", value: 16932 }
];

export const simpleBarOptions = {
	title: "Simple bar (discrete)",
	axes: {
		left: {
			mapsTo: "value"
		},
		bottom: {
			mapsTo: "group",
			scaleType: "labels"
		}
	}
};

// Simple bar with long labels
export const simpleBarLongLabelData = [
	{
		group:
			"6591DA8668C339B1B39297C61091E320C35391AB7AFC15B469F96B8A2DD0C231",
		value: 65000
	},
	{
		group:
			"347FEDE2F7403759069E5F84B65B49D2467D8914B5184738699259AA310EB0F9",
		value: 29123
	},
	{
		group:
			"232D788298773BB389DBB8FCE44D3FB4E878879BE7AFB0B303BCE0D56EBB92E2",
		value: 35213
	},
	{
		group:
			"58B01AADFA87E5547A218B3C6CE3AF07B8DF7BAB9E12BF60FD2BBB739C46B86E",
		value: 51213
	},
	{ group: "Qty", value: 16932 }
];

export const simpleBarLongLabelOptions = {
	title: "Simple bar (truncated labels)",
	axes: {
		left: {
			mapsTo: "value"
		},
		bottom: {
			mapsTo: "group",
			scaleType: "labels"
		}
	},
	legend: {
		truncation: {
			type: "end_line",
			threshold: 10,
			numCharacter: 12
		}
	}
};

export const simpleBarFixedDomainOptions = {
	title: "Simple bar (customized domain)",
	axes: {
		left: {
			mapsTo: "value",
			domain: [-100000, 100000]
		},
		bottom: {
			scaleType: "labels",
			mapsTo: "group"
		}
	}
};

// Horizontal Simple
export const simpleHorizontalBarData = simpleBarData;
export const simpleHorizontalBarLongLabelData = simpleBarLongLabelData;

export const simpleHorizontalBarOptions = {
	title: "Simple horizontal bar (discrete)",
	axes: {
		left: {
			mapsTo: "group",
			scaleType: "labels"
		},
		bottom: {
			mapsTo: "value"
		}
	}
};

export const simpleHorizontalBarLongLabelOptions = {
	title: "Simple horizontal bar (truncated labels)",
	axes: {
		left: {
			mapsTo: "group",
			scaleType: "labels",
			truncation: {
				type: "mid_line",
				threshold: 10,
				numCharacter: 14
			}
		},
		bottom: {
			mapsTo: "value"
		}
	},
	legend: {
		truncation: {
			type: "mid_line",
			threshold: 15,
			numCharacter: 12
		}
	}
};

export const simpleBarTimeSeriesData = [
	{ group: "Qty", date: new Date(2019, 0, 1), value: 10000 },
	{ group: "More", date: new Date(2019, 0, 2), value: 65000 },
	{ group: "Sold", date: new Date(2019, 0, 3), value: 30000 },
	{ group: "Restocking", date: new Date(2019, 0, 6), value: 49213 },
	{ group: "Misc", date: new Date(2019, 0, 7), value: 51213 }
];

export const simpleBarTimeSeriesDenseData = [
	{ group: "data1", date: new Date(2019, 1, 1, 10, 20, 0), value: 10000 },
	{ group: "data2", date: new Date(2019, 1, 1, 10, 21, 1), value: 20001 },
	{ group: "data3", date: new Date(2019, 1, 1, 10, 22, 2), value: 10002 },
	{ group: "data4", date: new Date(2019, 1, 1, 10, 23, 3), value: 30003 },
	{ group: "data5", date: new Date(2019, 1, 1, 10, 24, 4), value: 20004 },
	{ group: "data6", date: new Date(2019, 1, 1, 10, 25, 5), value: 10005 },
	{ group: "data7", date: new Date(2019, 1, 1, 10, 26, 6), value: 50006 },
	{ group: "data8", date: new Date(2019, 1, 1, 10, 27, 7), value: 40007 },
	{ group: "data9", date: new Date(2019, 1, 1, 10, 28, 8), value: 30008 },
	{ group: "data10", date: new Date(2019, 1, 1, 10, 29, 9), value: 10000 },
	{ group: "data11", date: new Date(2019, 1, 1, 10, 30, 10), value: 20000 },
	{ group: "data12", date: new Date(2019, 1, 1, 10, 31, 11), value: 10000 },
	{ group: "data13", date: new Date(2019, 1, 1, 10, 32, 12), value: 30000 },
	{ group: "data14", date: new Date(2019, 1, 1, 10, 33, 13), value: 10000 },
	{ group: "data15", date: new Date(2019, 1, 1, 10, 34, 14), value: 40000 },
	{ group: "data16", date: new Date(2019, 1, 1, 10, 35, 15), value: 20000 },
	{ group: "data17", date: new Date(2019, 1, 1, 10, 36, 16), value: 10000 },
	{ group: "data18", date: new Date(2019, 1, 1, 10, 37, 17), value: 65000 },
	{ group: "data19", date: new Date(2019, 1, 1, 10, 38, 18), value: 30000 },
	{ group: "data20", date: new Date(2019, 1, 1, 10, 39, 19), value: 49213 },
];

export const simpleBarTimeSeriesOptions = {
	title: "Simple bar (time series - Turkish)",
	axes: {
		left: {
			mapsTo: "value"
		},
		bottom: {
			mapsTo: "date",
			scaleType: "time"
		}
	},
	timeScale: { localeObject: trLocaleObject }
};

// Horizontal simple time series
export const simpleHorizontalBarTimeSeriesOptions = {
	title: "Simple horizontal bar (time series)",
	axes: {
		left: {
			mapsTo: "date",
			scaleType: "time"
		},
		bottom: {
			mapsTo: "value"
		}
	}
};

// Vertical simple time series with dense data
export const simpleBarTimeSeriesDenseOptions = {
	title: "Simple bar (time series) with dense data",
	axes: {
		left: {
			mapsTo: "value",
		},
		bottom: {
			mapsTo: "date",
			scaleType: "time",
		},
	},
	timeScale: { localeObject: trLocaleObject },
	bars: { maxWidth: 200 }
};

export const simpleHorizontalBarTimeSeriesData = simpleBarTimeSeriesData;

// Stacked bar
export const stackedBarData = [
	{ group: "Dataset 1", key: "Qty", value: 65000 },
	{ group: "Dataset 1", key: "More", value: 29123 },
	{ group: "Dataset 1", key: "Sold", value: 35213 },
	{ group: "Dataset 1", key: "Restocking", value: 51213 },
	{ group: "Dataset 1", key: "Misc", value: 16932 },
	{ group: "Dataset 2", key: "Qty", value: 32432 },
	{ group: "Dataset 2", key: "More", value: 21312 },
	{ group: "Dataset 2", key: "Sold", value: 56456 },
	{ group: "Dataset 2", key: "Restocking", value: 21312 },
	{ group: "Dataset 2", key: "Misc", value: 34234 },
	{ group: "Dataset 3", key: "Qty", value: 12312 },
	{ group: "Dataset 3", key: "More", value: 23232 },
	{ group: "Dataset 3", key: "Sold", value: 34232 },
	{ group: "Dataset 3", key: "Restocking", value: 12312 },
	{ group: "Dataset 3", key: "Misc", value: 34234 },
	{ group: "Dataset 4", key: "Qty", value: 32423 },
	{ group: "Dataset 4", key: "More", value: 21313 },
	{ group: "Dataset 4", key: "Sold", value: 64353 },
	{ group: "Dataset 4", key: "Restocking", value: 24134 },
	{ group: "Dataset 4", key: "Misc", value: 32423 }
];

export const stackedBarOptions = {
	title: "Stacked bar (discrete)",
	axes: {
		left: {
			mapsTo: "value",
			stacked: true
		},
		bottom: {
			mapsTo: "key",
			scaleType: "labels"
		}
	}
};

// horizontal stacked bar
export const stackedHorizontalBarData = stackedBarData;

export const stackedHorizontalBarOptions = {
	title: "Stacked horizontal bar (discrete)",
	axes: {
		left: {
			scaleType: "labels"
		},
		bottom: {
			stacked: true
		}
	}
};

export const stackedBarTimeSeriesData = [
	{ group: "Dataset 1", date: new Date(2019, 0, 1), value: 10000 },
	{ group: "Dataset 1", date: new Date(2019, 0, 5), value: 65000 },
	{ group: "Dataset 1", date: new Date(2019, 0, 8), value: 10000 },
	{ group: "Dataset 1", date: new Date(2019, 0, 13), value: 49213 },
	{ group: "Dataset 1", date: new Date(2019, 0, 17), value: 51213 },
	{ group: "Dataset 2", date: new Date(2019, 0, 3), value: 75000 },
	{ group: "Dataset 2", date: new Date(2019, 0, 6), value: 57312 },
	{ group: "Dataset 2", date: new Date(2019, 0, 8), value: 21432 },
	{ group: "Dataset 2", date: new Date(2019, 0, 15), value: 70323 },
	{ group: "Dataset 2", date: new Date(2019, 0, 19), value: 21300 },
	{ group: "Dataset 3", date: new Date(2019, 0, 1), value: 50000 },
	{ group: "Dataset 3", date: new Date(2019, 0, 5), value: 15000 },
	{ group: "Dataset 3", date: new Date(2019, 0, 8), value: 20000 },
	{ group: "Dataset 3", date: new Date(2019, 0, 13), value: 39213 },
	{ group: "Dataset 3", date: new Date(2019, 0, 17), value: 61213 },
	{ group: "Dataset 4", date: new Date(2019, 0, 2), value: 10 },
	{ group: "Dataset 4", date: new Date(2019, 0, 6), value: 37312 },
	{ group: "Dataset 4", date: new Date(2019, 0, 8), value: 51432 },
	{ group: "Dataset 4", date: new Date(2019, 0, 15), value: 40323 },
	{ group: "Dataset 4", date: new Date(2019, 0, 19), value: 31300 }
];

export const stackedBarTimeSeriesOptions = {
	title: "Stacked bar (time series)",
	axes: {
		left: {
			mapsTo: "value",
			stacked: true
		},
		bottom: {
			mapsTo: "date",
			scaleType: "time"
		}
	}
};

// Stacked horizontal bar (time series)
export const stackedHorizontalBarTimeSeriesOptions = {
	title: "Stacked horizontal bar (time series)",
	axes: {
		left: {
			scaleType: "time"
		},
		bottom: {
			stacked: true
		}
	}
};

export const stackedHorizontalBarTimeSeriesData = stackedBarTimeSeriesData;

// simple bar - empty state
export const simpleBarEmptyStateData = [];
export const simpleBarEmptyStateOptions = {
	title: "Simple bar (empty state)",
	axes: {
		left: {
			primary: true
		},
		bottom: {
			scaleType: "labels",
			secondary: true
		}
	}
};

// simple bar - skeleton
export const simpleBarSkeletonData = [];
export const simpleBarSkeletonOptions = {
	title: "Simple bar (skeleton)",
	axes: {
		left: {
			primary: true
		},
		bottom: {
			scaleType: "labels",
			secondary: true
		}
	},
	data: {
		loading: true
	}
};

// grouped bar - empty state
export const groupedBarEmptyStateData = [];
export const groupedBarEmptyStateOptions = {
	title: "Grouped bar (empty state)",
	axes: {
		left: {
			primary: true
		},
		bottom: {
			scaleType: "labels",
			secondary: true
		}
	}
};

// grouped bar - skeleton
export const groupedBarSkeletonData = [];
export const groupedBarSkeletonOptions = {
	title: "Grouped bar (skeleton)",
	axes: {
		left: {
			primary: true
		},
		bottom: {
			scaleType: "labels",
			secondary: true
		}
	},
	data: {
		loading: true
	}
};

// stacked bar - empty state
export const stackedBarEmptyStateData = [];
export const stackedBarEmptyStateOptions = {
	title: "Stacked bar (empty state)",
	axes: {
		left: {
			primary: true
		},
		bottom: {
			scaleType: "labels",
			secondary: true
		}
	}
};

// stacked bar - skeleton
export const stackedBarSkeletonData = [];
export const stackedBarSkeletonOptions = {
	title: "Stacked bar (skeleton)",
	axes: {
		left: {
			primary: true
		},
		bottom: {
			scaleType: "labels",
			secondary: true
		}
	},
	data: {
		loading: true
	}
};

// simple horizontal bar - empty state
export const simpleHorizontalBarEmptyStateData = [];
export const simpleHorizontalBarEmptyStateOptions = {
	title: "Simple horizontal bar (empty state)",
	axes: {
		left: {
			primary: true,
			scaleType: "labels"
		},
		bottom: {
			secondary: true
		}
	}
};

// simple horizontal bar - skeleton
export const simpleHorizontalBarSkeletonData = [];
export const simpleHorizontalBarSkeletonOptions = {
	title: "Simple horizontal bar (skeleton)",
	axes: {
		left: {
			primary: true,
			scaleType: "labels"
		},
		bottom: {
			secondary: true
		}
	},
	data: {
		loading: true
	}
};

// grouped horizontal bar - empty state
export const groupedHorizontalBarEmptyStateData = [];
export const groupedHorizontalBarEmptyStateOptions = {
	title: "Grouped horizontal bar (empty state)",
	axes: {
		left: {
			primary: true,
			scaleType: "labels"
		},
		bottom: {
			secondary: true
		}
	}
};

// grouped horizontal bar - skeleton
export const groupedHorizontalBarSkeletonData = [];
export const groupedHorizontalBarSkeletonOptions = {
	title: "Grouped horizontal bar (skeleton)",
	axes: {
		left: {
			primary: true,
			scaleType: "labels"
		},
		bottom: {
			secondary: true
		}
	},
	data: {
		loading: true
	}
};

// stacked horizontal bar - empty state
export const stackedHorizontalBarEmptyStateData = [];
export const stackedHorizontalBarEmptyStateOptions = {
	title: "Stacked horizontal bar (empty state)",
	axes: {
		left: {
			primary: true,
			scaleType: "labels"
		},
		bottom: {
			secondary: true
		}
	}
};

// stacked horizontal bar - skeleton
export const stackedHorizontalBarSkeletonData = [];
export const stackedHorizontalBarSkeletonOptions = {
	title: "Stacked horizontal bar (skeleton)",
	axes: {
		left: {
			primary: true,
			scaleType: "labels"
		},
		bottom: {
			secondary: true
		}
	},
	data: {
		loading: true
	}
};
