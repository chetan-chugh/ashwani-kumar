export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { bg:'#050408', card:'#0b0912', line:'#201b2d', mute:'#9893a8', dim:'#6a6480', ink:'#f3f0fb', blue:'#a77bf2', cyan:'#d764f0' },
    fontFamily: {
      sans:['Inter','Noto Sans Devanagari','sans-serif'],
      display:['Sora','Noto Sans Devanagari','sans-serif'],
      mono:['JetBrains Mono','Noto Sans Devanagari','ui-monospace','monospace'],
    },
  } },
  plugins: [],
}
