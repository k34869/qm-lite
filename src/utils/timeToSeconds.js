export function timeToSeconds(time) {
    const [min, rest] = time.split(':');
    const [sec, ms = '0'] = rest.split('.');
    return parseInt(min) * 60 + parseInt(sec) + parseInt(ms) / 100;
}