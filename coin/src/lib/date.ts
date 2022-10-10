export const getDate = (type?: string) => {
  if (type === "full") {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    return `${day}th of ${monthList[month].full}`;
  } else {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    return ` ${monthList[month].half} ${day}`;
  }
};

const monthList = [
  {
    full: "January",
    half: "Jan",
  },
  {
    full: "February",
    half: "Feb",
  },
  {
    full: "March",
    half: "Mar",
  },
  {
    full: "April",
    half: "Apr",
  },
  {
    full: "May",
    half: "May",
  },
  {
    full: "June",
    half: "Jun",
  },
  {
    full: "July",
    half: "Jul",
  },
  {
    full: "August",
    half: "Aug",
  },
  {
    full: "September",
    half: "Sept",
  },
  {
    full: "October",
    half: "Oct",
  },
  {
    full: "November",
    half: "Nov",
  },
  {
    full: "December",
    half: "Dec",
  },
];
