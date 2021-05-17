import './Chart.css';
import ChartBar from './ChartBar';

const Chart = ({dataPoints}) => {
    const dataPointValues = dataPoints.map(
      (dataPoint) => dataPoint.value
    );
    const totalMaximum = Math.max(...dataPointValues);

    const renderedChartBar = dataPoints.map(dp => {
        return (
          <ChartBar
            key={dp.label}
            value={dp.value}
            label={dp.label}
            maxValue={totalMaximum}
          />
        );
    })

    return <div className="chart">{renderedChartBar}</div>;
}

export default Chart;