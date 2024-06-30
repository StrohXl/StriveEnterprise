const video = document.getElementById('video-review')
const video2 = document.getElementById('video-review2')
const video3 = document.getElementById('video-review3')
const contentVideoButton = document.getElementsByClassName('content-video-button')[0]
const contentVideoButton2 = document.getElementsByClassName('content-video-button2')[0]
const contentVideoButton3 = document.getElementsByClassName('content-video-button3')[0]

const playVideo=()=>{
    contentVideoButton.classList.add('remove')
    video.play()
}
const playVideo2=()=>{
    contentVideoButton2.classList.add('remove')
    video2.play()
}
const playVideo3=()=>{
    contentVideoButton3.classList.add('remove')
    video3.play()
}