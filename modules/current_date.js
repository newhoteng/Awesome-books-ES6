import { DateTime } from '../node_modules/luxon/src/luxon.js';

/* eslint-disable no-unused-vars */
let displayCurrentDate;
export default displayCurrentDate = () => {
  const dt = DateTime.local(new Date());
  const justhour = dt.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
  const result = `${justhour}`;
  return result;
};
