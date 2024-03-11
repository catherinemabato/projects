interface ItemType {
  href: string;
  imgSrc: string;
  imgTitle: string;
  imgClass: string;
  section: number;
};

export const items : ItemType[] = [
  {
    href: 'https://slack.com/media-kit',
    imgSrc: '/img/supportus/slack.webp',
    imgTitle: 'Slack - Free Standard Subscription.',
    imgClass: 'inline-block px-4 sm:h-10',
    section: 1
  },
  {
    href: 'https://toast.ninja/',
    imgSrc: '/img/supportus/toast.webp',
    imgTitle: 'Toast - Free services.',
    imgClass: 'inline-block px-4 sm:h-10',
    section: 1
  },
  {
    href: 'https://www.netlify.com/',
    imgSrc: '/img/supportus/netlify.webp',
    imgTitle: 'Netlify - Free website deployment.',
    imgClass: 'inline-block px-4 sm:h-10',
    section: 1
  },
  {
    href: 'https://sonarcloud.io/',
    imgSrc: '/img/supportus/sonarcloud.webp',
    imgTitle: 'Sonarcloud - Free tier for automated project scanning.',
    imgClass: 'inline-block px-4 md:h-14',
    section: 2
  },
  {
    href: 'https://www.digitalocean.com/press/',
    imgSrc: '/img/supportus/digitalocean.webp',
    imgTitle: 'DigitalOcean - 500 dollars on cloud services.',
    imgClass: 'inline-block px-2 sm:h-8',
    section: 2
  },
  {
    href: 'https://restream.io/',
    imgSrc: '/img/supportus/restream.webp',
    imgTitle: 'Restream - Free professional plan subscription.',
    imgClass: 'inline-block px-4 sm:h-6',
    section: 2
  },
  {
    href: 'https://sessionize.com/',
    imgSrc: '/img/supportus/sessionize.webp',
    imgTitle: 'Sessionize-Free community license for AACoT Madrid.',
    imgClass: 'inline-block px-4 sm:h-9',
    section: 3
  }
];
