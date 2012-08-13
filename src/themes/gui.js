JXG.Options = JXG.deepCopy(JXG.Options, {

	angle: {
		fillColor: '#ddd',
		strokeColor: '#000'
	},

	glider : {
		fillColor: '#ff0',
		strokeColor: '#000'
	},

	intersection: {
		fillColor: '#fff'
	},
/*
	line: {
		strokeColor: '#f00' // can't see red lines anymore for NOW ...
	},
*/
	point: {
		size: 4,
		fillColor:   '#c00',
		strokeColor: '#000',

		// snap on majorTicks

		snapX: -1,
		snapY: -1
	},

	polygon: {
		fillColor: '#ffff00',
		highlightFillColor: '#ffff00',
		hasInnerPoints: false
	},

	precision: {
		touchMax: Infinity
	},

	segment: {
		label: {
			position: 'bot',
			offsets: [0,-12]
		}
	}
/*
	slider: {
		point1: { needsRegularUpdate: true },
		point2: { needsRegularUpdate: true },
		baseline: { needsRegularUpdate: true },
		highline: { needsRegularUpdate: true },
		ticks: { needsRegularUpdate: true }
	},

	renderer: 'canvas'
*/
});

if (JXG.isAndroid || JXG.isApple()) {
    JXG.Options.curve.RDPsmoothing = false;
    JXG.Options.curve.numberPointsHigh = 600;
    JXG.Options.curve.numberPointsLow = 100;
    JXG.Options.curve.doAdvancedPlot = false;
}