"use strict";
console.log('Armstrong Number');
function isArmstrong(num) {
    var sum = 0;
    var temp = num;
    var len = String(temp).split("").length;
    while (temp > 0) {
        var remainder = temp % 10;
        sum += Math.pow(remainder, len);
        temp = Math.floor(temp / 10);
    }
    if (sum == num)
        return true;
    else
        return false;
}
function getnextArmstrong(num1) {
    while (num1 < Number.MAX_SAFE_INTEGER) {
        num1++;
        if (isArmstrong(num1)) {
            return num1;
        }
    }
}
console.log(getnextArmstrong(153));
console.log("Adding functionality to getnextArtmstrong()");
function isArmstrong3(num) {
    var sum = 0;
    var temp = num;
    var len = String(temp).split("").length;
    while (temp > 0) {
        var remainder = temp % 10;
        sum += Math.pow(remainder, len);
        temp = Math.floor(temp / 10);
    }
    if (sum == num)
        return true;
    else
        return false;
}
var nums = 0;
function reset() {
    nums = 0;
    return nums;
}
function getnextArmstrong1() {
    while (nums < 10001) {
        if (nums < 1000) {
            nums++;
            if (isArmstrong3(nums))
                return nums;
            else {
                reset();
                return "Number is above 1000";
            }
        }
    }
}
console.log(getnextArmstrong1());
//# sourceMappingURL=Armstrong.js.map