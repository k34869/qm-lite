function isVoid(variable) {
    return typeof variable === 'undefined' || variable === null
}

function staticClone(variable) {
    const jsonStrng = JSON.stringify(variable)
    return JSON.parse(jsonStrng)
}

export {
    isVoid,
    staticClone
}