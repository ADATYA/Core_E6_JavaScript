function bonusScore(scores) {
    // value are undefine then show Invalid number.
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid";
    }

    // if array value undefine then showing Invalide
    for (let i = 0; i < scores.length; i++) {
        if (typeof scores[i] !== 'number' || Number.isNaN(scores[i])) {
            return "Invalid";
        }
    }

    //add 10 number each group
    const updatedScores = scores.map(score => score + 10);

    // add new score and returen new value.
    const totalScore = updatedScores.reduce((sum, score) => sum + score, 0);

    return totalScore;
}

//Output:
console.log(bonusScore([80, 65, 90, 75])); 
// Output: 350

console.log(bonusScore([100])); 
// Output: 110

console.log(bonusScore([0, 10])); 
// Output: 30

console.log(bonusScore([])); 
// Output: "Invalid"

console.log(bonusScore("scores")); 
// Output: "Invalid"

console.log(bonusScore([80, "90", 70])); 
// Output: "Invalid"