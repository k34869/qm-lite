function isVoid(variable) {
    return typeof variable === 'undefined' || variable === null
}

function chunkArray(arr, size) {
    const result = [];
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
        if (temp.length === size) {
            result.push(temp);
            temp = [];
        }
    }
    if (temp.length) result.push(temp);
    return result;
}

export {
    isVoid,
    chunkArray
}