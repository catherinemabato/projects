const rssFeed = require('./build-rss');
const buildPostList = require('./build-post-list');
const buildCaseStudiesList = require('./casestudies');
const { buildToolsManual } = require('./build-tools');
const buildAdoptersList = require('./adopters')
const buildFinanceInfoList = require('./finance')

async function start() {
  await buildPostList();
  rssFeed(
    'blog',
    'AsyncAPI Initiative Blog RSS Feed',
    'AsyncAPI Initiative Blog',
    'rss.xml'
  );
  await buildCaseStudiesList();
  await buildToolsManual();
  await buildAdoptersList();
  await buildFinanceInfoList();
}

module.exports = start;

start();
