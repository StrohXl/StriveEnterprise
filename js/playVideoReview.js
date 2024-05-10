const video = document.getElementById('video-review')
const contentVideoButton = document.getElementsByClassName('content-video-button')[0]

const playVideo=()=>{
    contentVideoButton.classList.add('remove')
    video.play()
}