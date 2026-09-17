function studentIntroduction(student) {
    // Check if input is not an object, or is null, or is an array
    if (typeof student !== 'object' || student === null || Array.isArray(student)) {
        return "Invalid";
    }

    // Check if all required properties exist
    if (!('name' in student) || !('age' in student) || !('course' in student)) {
        return "Invalid";
    }

    // Return the formatted string using Template Literals
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

// Input 1
studentIntroduction({ name: "Ram", age: 18, course: "JavaScript" });
// Output: "My name is Rafi. I am 18 years old. I am learning JavaScript."

// Input 2
studentIntroduction({ name: "Sita", age: 22, course: "React" });
// Output: "My name is Sadia. I am 22 years old. I am learning React."
