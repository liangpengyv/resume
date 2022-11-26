import './assets/css/index.css'
import { XMindEmbedViewer } from "xmind-embed-viewer"

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


viewer.addEventListener('map-ready', () => {
  viewer.setZoomScale(80)
})