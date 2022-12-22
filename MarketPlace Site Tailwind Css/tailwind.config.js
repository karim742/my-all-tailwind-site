/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
  './html/graphicsDesign/graphicsDesign.html',
  './html/graphicsDesign/logoDesign.html'
],
  theme: {
    extend: {
      backgroundImage: {
        'brifBanner': "url('/images/catagorybg/brif_bg.jpg')",
        'graphicBg': "url('/images/catagorybg/grapics_bg.jpg')",
        'merketingBg': "url('/images/catagorybg/marketing_bg.jpg')",
        'videoanimationBg':"url('/images/catagorybg/videoanimation_bg.jpg')",
        'translationBg': "url('/images/catagorybg/translation_bg.jpg')",
        'musicAudio': "url('/images/catagorybg/audio_programming.jpg')",
        'programming': "url('/images/catagorybg/proggraming_development.jpg')",
        'business': "url('/images/catagorybg/business.jpg')",
        'other': "url('/images/catagorybg/other.jpg')",
        'follow': "url('/images/catagorybg/follower.png')",
        'comment': "url('/images/catagorybg/comments.png')",
        'wgraphicBg': "url('/images/catagorybg/wgrapics_bg.jpg')",
      }
    },
  },
  plugins: [],
}
