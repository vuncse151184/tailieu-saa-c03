import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: './docs',

  title: 'AWS SAA-C03',
  description: 'Tài liệu ôn thi AWS Solutions Architect Associate (SAA-C03) - Tiếng Việt',
  lang: 'vi-VN',

  appearance: 'dark',

  head: [
    ['meta', { name: 'theme-color', content: '#0A1633' }],
  ],

  themeConfig: {
    siteTitle: 'AWS SAA-C03',

    nav: [
      { text: 'Tổng quan', link: '/00-tong-quan-overview' },
      {
        text: 'Dịch vụ AWS',
        items: [
          { text: '01 · Compute Services', link: '/01-compute-services' },
          { text: '02 · Storage Services', link: '/02-storage-services' },
          { text: '03 · Database Services', link: '/03-database-services' },
          { text: '04 · Networking Services', link: '/04-networking-services' },
          { text: '05 · Security Services', link: '/05-security-services' },
          { text: '06 · Management & Governance', link: '/06-management-governance' },
          { text: '07 · Application Integration', link: '/07-application-integration' },
          { text: '08 · Developer Tools', link: '/08-developer-tools' },
          { text: '09 · Analytics & Big Data', link: '/09-analytics-bigdata' },
          { text: '10 · Migration & Transfer', link: '/10-migration-transfer' },
          { text: '11 · API Integration', link: '/11-api-integration' },
          { text: '12 · ML & AI', link: '/12-ml-ai' },
          { text: '13 · Other Services', link: '/13-other-services' },
          { text: '14 · So sánh Services', link: '/14-so-sanh-services' },
        ],
      },
      {
        text: 'Kiến trúc',
        items: [
          { text: 'A · Nền tảng kiến trúc', link: '/A-nen-tang-kien-truc' },
          { text: 'B · Bảo mật & Compliance', link: '/B-bao-mat-compliance' },
          { text: 'C · Kiến trúc Web App', link: '/C-kien-truc-web-app' },
          { text: 'D · Kiến trúc Lưu trữ', link: '/D-kien-truc-luu-tru' },
          { text: 'E · Kiến trúc Database', link: '/E-kien-truc-database' },
        ],
      },
      {
        text: 'Luyện thi',
        items: [
          { text: 'S · Practice Exam', link: '/S-practice-exam' },
          { text: 'K · Kịch bản thi', link: '/K-kich-ban-thi' },
          { text: 'L · Quyết định nhanh', link: '/L-quyet-dinh-nhanh' },
          { text: 'P · Architecture Diagrams', link: '/P-architecture-diagrams' },
          { text: 'Q · Service Comparisons', link: '/Q-service-comparisons' },
          { text: 'R · Performance Benchmarks', link: '/R-performance-benchmarks' },
          { text: 'T · Hands-on Labs', link: '/T-hands-on-labs' },
        ],
      },
      {
        text: 'Đề thi thử',
        items: [
          { text: 'Exam 1 · 390 câu hỏi', link: '/exam-1' },
        ],
      },
      { text: '🎯 Quiz', link: '/quiz.html' },
    ],

    sidebar: [
      {
        text: '📌 Giới thiệu',
        items: [
          { text: 'Hướng dẫn sử dụng (README)', link: '/README' },
          { text: 'Tổng quan SAA-C03', link: '/00-tong-quan-overview' },
          { text: 'Tóm tắt tài liệu', link: '/SUMMARY' },
        ],
      },
      {
        text: '☁️ Dịch vụ AWS',
        collapsed: false,
        items: [
          { text: '01 · Compute Services', link: '/01-compute-services' },
          { text: '02 · Storage Services', link: '/02-storage-services' },
          { text: '03 · Database Services', link: '/03-database-services' },
          { text: '04 · Networking Services', link: '/04-networking-services' },
          { text: '05 · Security Services', link: '/05-security-services' },
          { text: '06 · Management & Governance', link: '/06-management-governance' },
          { text: '07 · Application Integration', link: '/07-application-integration' },
          { text: '08 · Developer Tools', link: '/08-developer-tools' },
          { text: '09 · Analytics & Big Data', link: '/09-analytics-bigdata' },
          { text: '10 · Migration & Transfer', link: '/10-migration-transfer' },
          { text: '11 · API Integration', link: '/11-api-integration' },
          { text: '12 · ML & AI', link: '/12-ml-ai' },
          { text: '13 · Other Services', link: '/13-other-services' },
          { text: '14 · So sánh Services', link: '/14-so-sanh-services' },
        ],
      },
      {
        text: '🏗️ Kiến trúc',
        collapsed: false,
        items: [
          { text: 'A · Nền tảng kiến trúc', link: '/A-nen-tang-kien-truc' },
          { text: 'B · Bảo mật & Compliance', link: '/B-bao-mat-compliance' },
          { text: 'C · Kiến trúc Web App', link: '/C-kien-truc-web-app' },
          { text: 'D · Kiến trúc Lưu trữ', link: '/D-kien-truc-luu-tru' },
          { text: 'E · Kiến trúc Database', link: '/E-kien-truc-database' },
        ],
      },
      {
        text: '🎯 Luyện thi',
        collapsed: false,
        items: [
          { text: 'K · Kịch bản thi', link: '/K-kich-ban-thi' },
          { text: 'L · Quyết định nhanh', link: '/L-quyet-dinh-nhanh' },
          { text: 'M · Keywords Mapping', link: '/M-keywords-mapping' },
          { text: 'P · Architecture Diagrams', link: '/P-architecture-diagrams' },
          { text: 'Q · Service Comparisons', link: '/Q-service-comparisons' },
          { text: 'R · Performance Benchmarks', link: '/R-performance-benchmarks' },
          { text: 'S · Practice Exam', link: '/S-practice-exam' },
          { text: 'T · Hands-on Labs', link: '/T-hands-on-labs' },
        ],
      },
      {
        text: '📝 Đề thi thử',
        collapsed: false,
        items: [
          { text: 'Exam 1 · 390 câu hỏi', link: '/exam-1' },
        ],
      },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Tìm kiếm',
            buttonAriaLabel: 'Tìm kiếm tài liệu',
          },
          modal: {
            noResultsText: 'Không tìm thấy kết quả cho',
            resetButtonTitle: 'Xóa tìm kiếm',
            footer: {
              selectText: 'để chọn',
              navigateText: 'để điều hướng',
              closeText: 'để đóng',
            },
          },
        },
      },
    },

    outline: {
      level: [2, 3],
      label: 'Mục lục',
    },

    docFooter: {
      prev: 'Trang trước',
      next: 'Trang tiếp',
    },

    lastUpdated: {
      text: 'Cập nhật lần cuối',
    },

    footer: {
      message: 'AWS SAA-C03 Study Materials',
      copyright: 'Built with VitePress · Chúc bạn đậu chứng chỉ! 🎉',
    },
  },

  ignoreDeadLinks: true,

  markdown: {
    lineNumbers: true,
  },
})
