// eslint-disable-next-line no-unused-vars
import { Metric } from 'web-vitals';

function reportHandler(metric: Metric) {
  console.warn(metric);
}

export default reportHandler;
