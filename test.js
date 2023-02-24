repeat = (arr) => {
    res = [];
    arr.forEach(() => {
        res = [...res, ...arr];
    });

    return res;
};


console.log(repeat([1,2,3]));

reformat = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    res = word.toLowerCase();
    res = res.charAt(0).toUpperCase() + res.slice(1);
    let removedLettersCount = 0;

    for (let i = 0; i < res.length; i++) {
        if (vowels.includes(res[i - removedLettersCount])) {
            res = res.slice(0, i - removedLettersCount) + res.slice(i + 1 - removedLettersCount)
            removedLettersCount += 1;
        }
    }

    return res;
}

console.log(reformat('liMeSHArp DeveLoper TEST'))


next_binary_number = (arr) => {
    let ones = 0;
    for (let i=arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr[i] = 1;
            break;
        } else if (arr[i] === 1) {
            ones += 1;
            arr[i] = 0;
        }
    }

    if (ones === arr.length) {
        arr.unshift(1);
    }

    return arr;
}

console.log(next_binary_number([1,0,0,0,0,0,0,0,0,1]));