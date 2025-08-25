export function formatNumber(num) {
    if (num < 10000) {
        return num.toString();
    } else if (num < 100000000) {
        return (num / 10000).toFixed(1).replace(/\.0$/, '') + '万';
    } else {
        return (num / 100000000).toFixed(1).replace(/\.0$/, '') + '亿';
    }
}