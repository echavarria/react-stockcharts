'use strict';
var React = require('react');
var EdgeCoordinate = require('./EdgeCoordinate')
var Utils = require('./utils/utils')

var CrossHair = React.createClass({
	propTypes: {
		yAxisPad: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired,
		width: React.PropTypes.number.isRequired,
		mouseXY: React.PropTypes.array.isRequired,
		xDisplayValue: React.PropTypes.string.isRequired,
		yDisplayValue: React.PropTypes.string.isRequired
	},
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return nextProps.mouseXY !== this.props.mouseXY
	},
	getDefaultProps() {
		return {
			namespace: "ReStock.CrossHair",
			yAxisPad: 5
		}
	},
	render() {
		return (
			<g className={'crosshair '}>
				<EdgeCoordinate
					type="horizontal"
					className="horizontal"
					show={true}
					x1={0} y1={this.props.mouseXY[1]}
					x2={this.props.width + this.props.yAxisPad} y2={this.props.mouseXY[1]}
					coordinate={this.props.yDisplayValue}
					edgeAt={this.props.width + this.props.yAxisPad}
					orient="right"
					/>
				<EdgeCoordinate
					type="vertical"
					className="horizontal"
					show={true}
					x1={this.props.mouseXY[0]} y1={0}
					x2={this.props.mouseXY[0]} y2={this.props.height}
					coordinate={this.props.xDisplayValue}
					edgeAt={this.props.height}
					orient="bottom"
					/>
			</g>
		);
	}
});

module.exports = CrossHair;