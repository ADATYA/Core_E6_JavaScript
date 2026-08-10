function filterActiveUsers(users) {
    // 1. Check if input is not an array OR if the array is empty
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }

    // 2. Validate every object inside the array
    for (const user of users) {
        if (typeof user !== 'object' || user === null || !('isActive' in user)) {
            return "Invalid";
        }
    }

    // 3. Filter and return users with isActive: true
    return users.filter(user => user.isActive === true);
}

// Output:
// Input 1
filterActiveUsers([
    { name: "A", isActive: true },
    { name: "B", isActive: false }
]);
// Output: [ { name: "A", isActive: true } ]


// Input 2
filterActiveUsers([
    { name: "Rafi", isActive: true },
    { name: "Sadia", isActive: true }
]);
// Output: [ { name: "Rafi", isActive: true }, { name: "Sadia", isActive: true } ]