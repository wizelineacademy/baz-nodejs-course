const getParseDate = () => {
  const today = new Date();
  let hours = today.getHours();
  hours = hours < 10 ? `0${hours}` : hours;

  let mins = today.getMinutes();
  mins = mins < 10 ? `0${mins}` : mins;

  let secs = today.getSeconds();
  secs = secs < 10 ? `0${secs}` : secs;

  const year = today.getFullYear();

  let month = today.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;

  let date = today.getDate();
  date = date < 10 ? `0${date}` : date;

  return `${year}/${month}/${date} ${hours}:${mins}:${secs}`;
};

module.exports = { getParseDate };
