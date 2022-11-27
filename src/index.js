import './assets/css/index.css'
import { XMindEmbedViewer } from './xmind-source'

const viewer = new XMindEmbedViewer({
  el: '#app',
  styles: {
    width: '100%',
    height: '100%'
  },
})

fetch('./files/简历-梁鹏宇-前端开发（remote）.xmind')
  .then(res => res.arrayBuffer())
  .then(file => viewer.load(file))

const loadingEle = document.getElementById('loading')
viewer.addEventListener('map-ready', () => {
  loadingEle.style.opacity = '0'
  loadingEle.style.visibility = 'hidden'
  viewer.setZoomScale(80)
})