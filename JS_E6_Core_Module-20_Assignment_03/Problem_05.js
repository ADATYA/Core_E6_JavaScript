/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students) || students.length === 0) {
        return "Invalid";
    }

    for (const student of students) {
        if (
            typeof student !== 'object' ||
            student === null ||
            !('name' in student) ||
            !('score' in student) ||
            typeof student.score !== 'number' ||
            Number.isNaN(student.score)
        ) {
            return "Invalid";
        }
    }

    const qualified = students.filter(student => student.score >= 70);
    const names = qualified.map(student => student.name.toUpperCase());

    return names.slice(0, 3);
}

//Outpuit:

generateLeaderboard([]);                               // Output: "Invalid"
generateLeaderboard("students");                       // Output: "Invalid"
generateLeaderboard([{ name: "Rafi" }]);               // Output: "Invalid"
generateLeaderboard([{ name: "Rafi", score: "90" }]);   // Output: "Invalid"