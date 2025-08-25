const baseUrl = 'http://localhost:3300'

export function request(url, options = {}, retryDelay = 2000) {
    const requestUrl = /^http:\/\/|^https:\/\//.test(url) ? url : `${baseUrl}${url}`

    return new Promise((resolve) => {
        const attempt = () => {
            fetch(requestUrl, options)
                .then(response => {
                    if (response.ok) {
                        resolve(response); // 请求成功
                    } else {
                        console.warn(`请求失败，状态码: ${response.status}，${retryDelay}ms 后重试...`);
                        setTimeout(attempt, retryDelay);
                    }
                })
                .catch(err => {
                    console.warn(`请求错误: ${err.message}，${retryDelay}ms 后重试...`);
                    setTimeout(attempt, retryDelay);
                });
        }

        attempt(); // 初次请求
    });
}
