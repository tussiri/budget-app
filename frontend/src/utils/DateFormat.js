import moment from "moment";

export const DateFormat = (date) => {
  return moment(date).format("MM/DD/YYYY");
};
