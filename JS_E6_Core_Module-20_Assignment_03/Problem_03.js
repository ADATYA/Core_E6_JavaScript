function countHashtags(caption) {
    // 1. Check if input is not a string
    if (typeof caption !== 'string') {
        return "Invalid";
    }

    // 2. Split caption into individual words
    const words = caption.split(" ");
    let hashtagCount = 0;
    let longestTag = "";

    // 3. Loop through words to find hashtags
    for (const word of words) {
        if (word.startsWith("#") && word.length > 1) {
            hashtagCount++;
            const tagWithoutHash = word.slice(1);
            
            // Update longestTag if current tag is strictly longer
            if (tagWithoutHash.length > longestTag.length) {
                longestTag = tagWithoutHash;
            }
        }
    }

    // 4. Return result object
    return { hashtagCount, longestTag };
}

//Output:

// Input 1
countHashtags("Loving this weather today #sunny #vibes #weekend");
// Output: { hashtagCount: 3, longestTag: "weekend" }

// Input 2: কোনো হ্যাশট্যাগ না থাকলে
countHashtags("No hashtags here");
// Output: { hashtagCount: 0, longestTag: "" }

// Input 3: দুটি হ্যাশট্যাগের দৈর্ঘ্য সমান হলে প্রথমটি নিবে (#ai)
countHashtags("#ai #ml data science");
// Output: { hashtagCount: 2, longestTag: "ai" }