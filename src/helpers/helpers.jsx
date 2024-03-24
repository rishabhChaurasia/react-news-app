const farhenhiteToCelcius = (farhenhite) => {
  return (farhenhite - 32) * (5 / 9);
};

const calculateTimeDifference = (publishValue) => {
  const publishTime = new Date(publishValue);
  const currentTime = new Date();
  const timeDifferenceInMilliseconds = currentTime - publishTime;
  const hoursDifference = Math.floor(
    timeDifferenceInMilliseconds / (1000 * 60 * 60)
  );
  const daysDifference = Math.floor(hoursDifference / 24);

  if (hoursDifference < 1) {
    return "Just now";
  } else if (hoursDifference < 24) {
    return `${hoursDifference} ${hoursDifference === 1 ? "hour" : "hours"} ago`;
  } else {
    return `${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago`;
  }
};

export { farhenhiteToCelcius, calculateTimeDifference };
