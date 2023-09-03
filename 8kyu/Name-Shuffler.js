// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// My solution
function nameShuffler(str) {
    const words = str.split(' ');

    if (words.length >= 2) {
        const firstName = words[0];
        const lastName = words[1];

        const shuffledName = `${lastName} ${firstName}`;

        return shuffledName;
    } else {

        return str;
    }
}