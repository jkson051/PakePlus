const config = {
  gatawayUrl: 'https://imtest.yy3w.com',
  photoUrl: 'https://imtest.yy3w.com/static/photo/',
  chatUrl: 'https://imtest.yy3w.com/static/chat/',
  wsUrl: 'ws://47.106.131.145:8383',
  openJudge: true
};

if (typeof window !== 'undefined' && window.document) {
  window.__gconf = config;
} else {
  module.exports = config;
}
