process.stdout.write("Countdown: 3");
function name() {
    setTimeout(() => {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("Countdown: 2");
    }, 1000);
}
function name2() {
    setTimeout(() => {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("Countdown: 1");
    }, 2000);
}
function name3() {
    setTimeout(() => {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write("Countdown: Done!\n");
    }, 3000);
}
name();
name2();
name3();
export {};
