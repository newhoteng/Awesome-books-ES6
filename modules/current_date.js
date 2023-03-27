import { DateTime } from '../node_modules/luxon/src/luxon.js';

/* eslint-disable no-unused-vars */
let displayCurrentDate;
export default displayCurrentDate = () => {
  const dt = DateTime.local(new Date());
  const justhour = dt.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
  const test = dt.toLocaleString(DateTime.DATETIME_FULL);
  const hourZoneTime = dt.toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET);
  const result = `${justhour} ${test.slice(-5)} (${hourZoneTime.slice(-25)})`;
  return result;
};
