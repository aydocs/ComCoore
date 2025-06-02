import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Ana Sayfa', href: getPermalink('/') },
    { text: 'Blog', href: '/blog' },
  ],
  actions: [{ text: 'İletişim', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Menü',
      links: [
        { text: 'Ana Sayfa', href: getPermalink('/') },
        { text: 'Blog', href: getPermalink('/blog') },

      ],
    },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://ComCoore.com/">ComCoore Yazılım</a> · Tüm hakları saklıdır.
  `,
};
