
console.log("****************Ternary Operator & FE*****************");
console.log("------------------------------------------------------");
console.log("TCS interview eligibilty");
function tcsInterviewEligibility(gradScore, hscScore, sscScore, candidateName) {
    var result = (gradScore>=70 || hscScore>=80 || sscScore>90)?`   Congrates ${candidateName} you are eligible for TCS interview`:
    `   ${candidateName} unfortunately you are not eligible for interview`;
    console.log(result);
}

tcsInterviewEligibility(80,86,90, "Akash");
tcsInterviewEligibility(70,65,55, "Nikhil");
tcsInterviewEligibility(60,79,88, "Suraj");
console.log("------------------------------------------------------");