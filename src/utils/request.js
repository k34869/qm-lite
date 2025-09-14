import { snackbar } from 'mdui/functions/snackbar.js';

const baseUrl = 'http://localhost:3300'
let count = 0

export function request(url, options = {}, retryDelay = 3000) {
    const requestUrl = /^http:\/\/|^https:\/\//.test(url) ? url : `${baseUrl}${url}`

    return new Promise((resolve) => {
        const attempt = () => {
            fetch(requestUrl, options)
                .then(response => {
                    if (response.ok) {
                        count = 0
                        resolve(response); // 请求成功
                    } else {
                        if (count === 0) {
                            snackbar({ message: `❌加载失败, ${retryDelay / 1000}s 后重试...` })
                            count = 1
                        }
                        setTimeout(attempt, retryDelay);
                    }
                })
                .catch(() => {
                    if (count === 0) {
                        snackbar({ message: `❌加载失败, ${retryDelay / 1000}s 后重试...` })
                        count = 1
                    }
                    setTimeout(attempt, retryDelay);
                });
        }

        attempt(); // 初次请求
    });
}
