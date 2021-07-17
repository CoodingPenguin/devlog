module.exports = {
  title: `오늘도 정리 내일도 정리`,
  description: ``,
  author: `코딩하는펭귄`,
  introduction: `파이썬과 웹에 관심 많은 펭귄`,
  siteUrl: `https://cooding-penguin.netlify.app`, // Your blog site url
  social: {
    twitter: ``, // Your Twitter account
    github: `CoodingPenguin`, // Your GitHub account
    medium: ``, // Your Medium account
    facebook: ``, // Your Facebook account
    linkedin: ``, // Your LinkedIn account
    instagram: `cooding_penguin`,
  },
  icon: `content/assets/felog.png`, // Add your favicon
  thumbnail: `content/assets/thumbnail.png`,
  resume: {
    title: `About COODINGPENGUIN`,
    description: `파이썬과 웹에 관심 많은 펭귄👩‍💻`,
    thumbnail: `content/assets/thumbnail.png`,
  },
  keywords: [
    `blog`,
    `python`,
    `javascript`,
    `web`,
    `machine learning`,
    `deep learning`,
    `computer vision`,
    `backend`,
    `development`,
  ],
  comment: {
    disqusShortName: '', // Your disqus-short-name. check disqus.com.
    utterances: 'CoodingPenguin/devlog', // Your repository for archive comment
  },
  configs: {
    countOfInitialPost: 7, // Config your initial count of post
  },
  sponsor: {
    buyMeACoffeeId: ``,
  },
  share: {
    facebookAppId: process.env.FB_APP_ID, // Add facebookAppId for using facebook share feature v3.2
  },
  ga: process.env.GOOGLE_ANALYTICS_ID, // Add your google analytics tranking ID
}
