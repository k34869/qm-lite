import { ref } from 'vue'

const scrollTop = ref(0)
const scrollDirection = ref(true)
const lastScrollTop = ref(0)

export function useScroll() {
    const initScroll = (callback) => {    
        window.addEventListener('scroll', () => {
            scrollTop.value = window.pageYOffset || document.documentElement.scrollTop
            if (scrollTop.value > lastScrollTop.value && scrollDirection.value === true) {
                scrollDirection.value = false
            } else if (scrollTop.value <= lastScrollTop.value && scrollDirection.value === false) {
                scrollDirection.value = true
            }
            callback(scrollTop, lastScrollTop, scrollDirection)
            lastScrollTop.value = scrollTop.value
        });
    }

    return {
        initScroll,
        scrollDirection,
        lastScrollTop,
        scrollTop
    }
}