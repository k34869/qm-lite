import { SafeArea } from '@capacitor-community/safe-area'

async function init(theme = 'light') {
    await SafeArea.enable({
        config: {
            customColorsForSystemBars: true,
            statusBarColor: '#00000000',
            statusBarContent: theme,
            navigationBarColor: '#00000000'
        }
    })
}

export function enableSafeArea() {
    const themeMedia = window.matchMedia('(prefers-color-scheme: dark)')
    init(themeMedia.matches ? 'light' : 'dark')
    themeMedia.addListener(async event => {
        if (event.matches) {
            await init('light')
        } else {
            await init('dark')
        }
    })
}