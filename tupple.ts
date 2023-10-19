// type StaffAccount = [number, string, string, string?];

// const staff: StaffAccount[] = [
//   [0, "Adankwo", "adankwo.e@"],
//   [1, "Kanokwan", "kanokwan.s@"],
//   [2, "Aneurin", "aneurin.s@", "Supervisor"],
// ];

// // When you have a set of known types at the beginning of a
// // tuple and then an unknown length, you can use the spread
// // operator to indicate that it can have any length and the
// // extra indexes will be of a particular type:

// type PayStubs = [StaffAccount, ...number[]];

// const payStubs: PayStubs[] = [
//   [staff[0], 250],
//   [staff[1], 250, 260],
//   [staff[0], 300, 300, 300],
// ];

// const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
// const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
// const monthThreePayments = payStubs[2][2];

// // You can use tuples to describe functions which take
// // an undefined number of parameters with types:

// // declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;

// // calculatePayForEmployee(staff[0][0], payStubs[0][1]);
// // calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);