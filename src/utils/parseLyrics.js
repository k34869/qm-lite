import { timeToSeconds } from '@/utils/timeToSeconds.js'

export function parseLyrics(lrc) {
    const lines = lrc.split(/\r?\n/).filter(Boolean); // 去掉空行
    const result = [];

    for (let i = 0; i < lines.length; i++) {
        // 匹配时间戳 [mm:ss.xx]
        const match = lines[i].match(/\[(\d{2}:\d{2}\.\d{2})\](.*)/);
        if (!match) continue;

        const startTime = match[1];
        const content = match[2].trim();

        // 找下一行的时间戳，用来作为 endTime
        let endTime = null;
        if (i < lines.length - 1) {
            const nextMatch = lines[i + 1].match(/\[(\d{2}:\d{2}\.\d{2})\]/);
            if (nextMatch) {
                endTime = nextMatch[1];
            }
        }

        result.push({
            startTime,
            startSeconds: timeToSeconds(startTime),
            endTime,
            endSeconds: endTime ? timeToSeconds(endTime) : null,
            content
        });
    }

    return result;
}
