// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// My solution
function abbrevName(name) {

    const nameArray = name.split(" ");

    const initials = nameArray.map(word => word.charAt(0).toUpperCase());

    const result = initials.join(".");

    return result;
}