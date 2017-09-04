/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *Orbiter transfers from ground to internal power
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

var countdown = 60;

while (countdown >= 0) {
    var msg = ""
    switch (countdown) {
        case 50:
            var msg = "Orbiter transfers from ground to internal power";
            break;
        case 31:
            var msg = "Ground launch sequencer is go for auto sequence start";
            break;
        case 16:
            var msg = "Activate launch pad sound suppression system";
            break;
        case 10:
            var msg = "Activate main engine hydrogen burnoff system";
            break;
        case 6:
            var msg = "Main engine start";
            break;
        case 0:
            var msg = "Solid rocket booster ignition and liftoff!";
            break;
    }
    if (msg != "") {
        console.log(msg);
    }
    else {
        console.log("T-" + countdown + " seconds");
    }
    countdown--;
}