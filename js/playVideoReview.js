const video = document.getElementById('video-review')
const video2 = document.getElementById('video-review2')
const video3 = document.getElementById('video-review3')
const video4 = document.getElementById('video-review4')
const video5 = document.getElementById('video-review5')
const contentVideoButton = document.getElementsByClassName('content-video-button')[0]
const contentVideoButton2 = document.getElementsByClassName('content-video-button2')[0]
const contentVideoButton3 = document.getElementsByClassName('content-video-button3')[0]
const contentVideoButton4 = document.getElementsByClassName('content-video-button4')[0]
const contentVideoButton5 = document.getElementsByClassName('content-video-button5')[0]

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
const playVideo4=()=>{
    contentVideoButton4.classList.add('remove')
    video4.play()
}
const playVideo5=()=>{
    contentVideoButton5.classList.add('remove')
    video5.play()
}