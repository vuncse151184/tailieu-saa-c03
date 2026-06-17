import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return

    // Quiz là file tĩnh trong /public. VitePress mặc định chặn link .html (SPA router
    // sẽ báo 404). Gắn thuộc tính target để router bỏ qua → điều hướng full-page thật.
    const fixQuizLinks = () => {
      document.querySelectorAll<HTMLAnchorElement>('a[href$="quiz.html"]').forEach((a) => {
        if (!a.hasAttribute('target')) a.setAttribute('target', '_self')
      })
    }

    // Hiệu ứng chuyển trang: fade + slide khi điều hướng giữa các trang
    const animate = () => {
      const main = document.querySelector('.VPContent') as HTMLElement | null
      if (!main) return
      main.classList.remove('page-enter')
      void main.offsetWidth // ép reflow để animation phát lại
      main.classList.add('page-enter')
    }

    const orig = router.onAfterRouteChanged
    router.onAfterRouteChanged = (to: string) => {
      orig?.(to)
      requestAnimationFrame(() => {
        animate()
        fixQuizLinks()
      })
    }

    // chạy lần đầu sau khi DOM dựng xong + theo dõi thay đổi DOM (hero render)
    const onReady = () => {
      fixQuizLinks()
      new MutationObserver(fixQuizLinks).observe(document.body, {
        childList: true,
        subtree: true,
      })
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', onReady)
    } else {
      onReady()
    }
  },
} satisfies Theme
