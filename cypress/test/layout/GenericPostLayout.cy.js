import MockRouter from '../../utils/router';
import GenericPostLayout from '../../../components/layout/GenericPostLayout';
const post = {
  title: 'Awesome 2020 and What Can Get Better In 2021',
  date: '2020-12-23T05:00:00.000Z',
  type: 'Communication',
  tags: ['Project Status'],
  cover: '/img/posts/2020-summary/cover.webp',
  authors: [
    {
      name: 'Lukasz Gornicki',
      photo: '/img/avatars/lpgornicki.webp',
      link: 'https://twitter.com/derberq',
      byline: 'AsyncAPI Maintainer and Dev Comm Keeper',
    },
  ],
  excerpt:
    'Fuck you COVID-19, AsyncAPI Community is stronger than you think. See the growth of AsyncAPI in 2020 in hard numbers. How we compare to 2019?',
  toc: [
    {
      content: 'Important moments',
      slug: 'important-moments',
      lvl: 2,
      i: 0,
      seen: 0,
    },
    {
      content: 'Slack',
      slug: 'slack',
      lvl: 2,
      i: 1,
      seen: 0,
    },
    {
      content: 'Numbers getting high',
      slug: 'numbers-getting-high',
      lvl: 3,
      i: 2,
      seen: 0,
    },
    {
      content: 'Most present companies',
      slug: 'most-present-companies',
      lvl: 3,
      i: 3,
      seen: 0,
    },
    {
      content: "What's next with Slack",
      slug: 'whats-next-with-slack',
      lvl: 3,
      i: 4,
      seen: 0,
    },
    {
      content: 'LinkedIn',
      slug: 'linkedin',
      lvl: 2,
      i: 5,
      seen: 0,
    },
    {
      content: 'Followers and impressions',
      slug: 'followers-and-impressions',
      lvl: 3,
      i: 6,
      seen: 0,
    },
    {
      content: 'Sponsored marketing',
      slug: 'sponsored-marketing',
      lvl: 3,
      i: 7,
      seen: 0,
    },
    {
      content: "What's next with LinkedIn",
      slug: 'whats-next-with-linkedin',
      lvl: 3,
      i: 8,
      seen: 0,
    },
    {
      content: 'Google Analytics',
      slug: 'google-analytics',
      lvl: 2,
      i: 9,
      seen: 0,
    },
    {
      content: 'Traffic got much higher',
      slug: 'traffic-got-much-higher',
      lvl: 3,
      i: 10,
      seen: 0,
    },
    {
      content: 'Top referring channels',
      slug: 'top-referring-channels',
      lvl: 3,
      i: 11,
      seen: 0,
    },
    {
      content: 'Top blog posts',
      slug: 'top-blog-posts',
      lvl: 3,
      i: 12,
      seen: 0,
    },
    {
      content: "What's next with the website",
      slug: 'whats-next-with-the-website',
      lvl: 3,
      i: 13,
      seen: 0,
    },
    {
      content: 'Twitter',
      slug: 'twitter',
      lvl: 2,
      i: 14,
      seen: 0,
    },
    {
      content: 'Paid marketing',
      slug: 'paid-marketing',
      lvl: 3,
      i: 15,
      seen: 0,
    },
    {
      content: 'Top tweets',
      slug: 'top-tweets',
      lvl: 3,
      i: 16,
      seen: 0,
    },
    {
      content: "What's next with Twitter",
      slug: 'whats-next-with-twitter',
      lvl: 3,
      i: 17,
      seen: 0,
    },
    {
      content: 'GitHub',
      slug: 'github',
      lvl: 2,
      i: 18,
      seen: 0,
    },
    {
      content: 'Most popular repositories',
      slug: 'most-popular-repositories',
      lvl: 3,
      i: 19,
      seen: 0,
    },
    {
      content: 'Traffic growth',
      slug: 'traffic-growth',
      lvl: 3,
      i: 20,
      seen: 0,
    },
    {
      content: "What's next with GitHub",
      slug: 'whats-next-with-github',
      lvl: 3,
      i: 21,
      seen: 0,
    },
    {
      content: 'npm',
      slug: 'npm',
      lvl: 2,
      i: 22,
      seen: 0,
    },
    {
      content: 'Top packages',
      slug: 'top-packages',
      lvl: 3,
      i: 23,
      seen: 0,
    },
    {
      content: "What's next with npm",
      slug: 'whats-next-with-npm',
      lvl: 3,
      i: 24,
      seen: 0,
    },
    {
      content: 'YouTube',
      slug: 'youtube',
      lvl: 2,
      i: 25,
      seen: 0,
    },
    {
      content: 'Watch time goes crazy',
      slug: 'watch-time-goes-crazy',
      lvl: 3,
      i: 26,
      seen: 0,
    },
    {
      content: 'Most popular videos',
      slug: 'most-popular-videos',
      lvl: 3,
      i: 27,
      seen: 0,
    },
    {
      content: "What's next with YouTube",
      slug: 'whats-next-with-youtube',
      lvl: 3,
      i: 28,
      seen: 0,
    },
    {
      content: 'Open Collective',
      slug: 'open-collective',
      lvl: 2,
      i: 29,
      seen: 0,
    },
    {
      content: 'Ultimate questions - how many people use the spec?',
      slug: 'ultimate-questions---how-many-people-use-the-spec',
      lvl: 2,
      i: 30,
      seen: 0,
    },
    {
      content: 'Final words',
      slug: 'final-words',
      lvl: 2,
      i: 31,
      seen: 0,
    },
  ],
  readingTime: 18,
  sectionSlug: '/blog',
  sectionWeight: 0,
  id: 'pages/blog/2020-summary.md',
  isIndex: false,
  slug: '/blog/2020-summary',
};

const postWithoutTitle = {
  date: '2020-12-23T05:00:00.000Z',
  type: 'Communication',
  tags: ['Project Status'],
  cover: '/img/posts/2020-summary/cover.webp',
  authors: [
    {
      name: 'Lukasz Gornicki',
      photo: '/img/avatars/lpgornicki.webp',
      link: 'https://twitter.com/derberq',
      byline: 'AsyncAPI Maintainer and Dev Comm Keeper',
    },
  ],
  excerpt:
    'Fuck you COVID-19, AsyncAPI Community is stronger than you think. See the growth of AsyncAPI in 2020 in hard numbers. How we compare to 2019?',
  toc: [
    {
      content: 'Important moments',
      slug: 'important-moments',
      lvl: 2,
      i: 0,
      seen: 0,
    },
    {
      content: 'Slack',
      slug: 'slack',
      lvl: 2,
      i: 1,
      seen: 0,
    },
    {
      content: 'Numbers getting high',
      slug: 'numbers-getting-high',
      lvl: 3,
      i: 2,
      seen: 0,
    },
    {
      content: 'Most present companies',
      slug: 'most-present-companies',
      lvl: 3,
      i: 3,
      seen: 0,
    },
    {
      content: "What's next with Slack",
      slug: 'whats-next-with-slack',
      lvl: 3,
      i: 4,
      seen: 0,
    },
    {
      content: 'LinkedIn',
      slug: 'linkedin',
      lvl: 2,
      i: 5,
      seen: 0,
    },
    {
      content: 'Followers and impressions',
      slug: 'followers-and-impressions',
      lvl: 3,
      i: 6,
      seen: 0,
    },
    {
      content: 'Sponsored marketing',
      slug: 'sponsored-marketing',
      lvl: 3,
      i: 7,
      seen: 0,
    },
    {
      content: "What's next with LinkedIn",
      slug: 'whats-next-with-linkedin',
      lvl: 3,
      i: 8,
      seen: 0,
    },
    {
      content: 'Google Analytics',
      slug: 'google-analytics',
      lvl: 2,
      i: 9,
      seen: 0,
    },
    {
      content: 'Traffic got much higher',
      slug: 'traffic-got-much-higher',
      lvl: 3,
      i: 10,
      seen: 0,
    },
    {
      content: 'Top referring channels',
      slug: 'top-referring-channels',
      lvl: 3,
      i: 11,
      seen: 0,
    },
    {
      content: 'Top blog posts',
      slug: 'top-blog-posts',
      lvl: 3,
      i: 12,
      seen: 0,
    },
    {
      content: "What's next with the website",
      slug: 'whats-next-with-the-website',
      lvl: 3,
      i: 13,
      seen: 0,
    },
    {
      content: 'Twitter',
      slug: 'twitter',
      lvl: 2,
      i: 14,
      seen: 0,
    },
    {
      content: 'Paid marketing',
      slug: 'paid-marketing',
      lvl: 3,
      i: 15,
      seen: 0,
    },
    {
      content: 'Top tweets',
      slug: 'top-tweets',
      lvl: 3,
      i: 16,
      seen: 0,
    },
    {
      content: "What's next with Twitter",
      slug: 'whats-next-with-twitter',
      lvl: 3,
      i: 17,
      seen: 0,
    },
    {
      content: 'GitHub',
      slug: 'github',
      lvl: 2,
      i: 18,
      seen: 0,
    },
    {
      content: 'Most popular repositories',
      slug: 'most-popular-repositories',
      lvl: 3,
      i: 19,
      seen: 0,
    },
    {
      content: 'Traffic growth',
      slug: 'traffic-growth',
      lvl: 3,
      i: 20,
      seen: 0,
    },
    {
      content: "What's next with GitHub",
      slug: 'whats-next-with-github',
      lvl: 3,
      i: 21,
      seen: 0,
    },
    {
      content: 'npm',
      slug: 'npm',
      lvl: 2,
      i: 22,
      seen: 0,
    },
    {
      content: 'Top packages',
      slug: 'top-packages',
      lvl: 3,
      i: 23,
      seen: 0,
    },
    {
      content: "What's next with npm",
      slug: 'whats-next-with-npm',
      lvl: 3,
      i: 24,
      seen: 0,
    },
    {
      content: 'YouTube',
      slug: 'youtube',
      lvl: 2,
      i: 25,
      seen: 0,
    },
    {
      content: 'Watch time goes crazy',
      slug: 'watch-time-goes-crazy',
      lvl: 3,
      i: 26,
      seen: 0,
    },
    {
      content: 'Most popular videos',
      slug: 'most-popular-videos',
      lvl: 3,
      i: 27,
      seen: 0,
    },
    {
      content: "What's next with YouTube",
      slug: 'whats-next-with-youtube',
      lvl: 3,
      i: 28,
      seen: 0,
    },
    {
      content: 'Open Collective',
      slug: 'open-collective',
      lvl: 2,
      i: 29,
      seen: 0,
    },
    {
      content: 'Ultimate questions - how many people use the spec?',
      slug: 'ultimate-questions---how-many-people-use-the-spec',
      lvl: 2,
      i: 30,
      seen: 0,
    },
    {
      content: 'Final words',
      slug: 'final-words',
      lvl: 2,
      i: 31,
      seen: 0,
    },
  ],
  readingTime: 18,
  sectionSlug: '/blog',
  sectionWeight: 0,
  id: 'pages/blog/2020-summary.md',
  isIndex: false,
  slug: '/blog/2020-summary',
};
describe('Generic Post Layout Component', () => {
  it('renders correct component', () => {
    cy.mount(
      <MockRouter pathname="/blog/2020-summary">
        <GenericPostLayout post={post} />
      </MockRouter>
    );
    cy.get('[data-testid="GenericPostLayout-main-div"]').should('exist');
    cy.get('[data-testid="GenericPostLayout-Head"]').should('exist');
  });

  it('renders Error Page when post is not found ', () => {
    cy.mount(
      <MockRouter pathname="/blog/2020-summary">
        <GenericPostLayout />
      </MockRouter>
    );
  });

  it('renders error  when post title is not found', () => {
    cy.mount(
      <MockRouter pathname="/blog/2020-summary">
        <GenericPostLayout post={postWithoutTitle} />
      </MockRouter>
    );
  });
});
