const futureDate = new Date();
futureDate.setDate(10); // Set the day to the 10th.
futureDate.setMonth(6); // Set the month to July (0-based).
futureDate.setFullYear(2024); // Set the year to 2024.
futureDate.setHours(3); // Set the hour to 3 PM.
futureDate.setMinutes(30); // Set the minutes to 30.
futureDate.setSeconds(0); // Set the seconds to 0.
console.log(futureDate);
const index = String(new Date()).lastIndexOf(':') + 0;
const date = String(new Date()).slice(0, index);
console.log(date);
export {};
