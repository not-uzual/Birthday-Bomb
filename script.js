let cont = document.querySelector('.content')
let btn = document.querySelector('.btn')
let aud = document.querySelector('#audio')
let src = document.querySelector('source')

btn.addEventListener('click', e => {
    cont.innerHTML  = `<img src="https://cdn-icons-png.flaticon.com/256/7379/7379324.png" alt="" id='rb'>
        <div class="material">
            <img src="./media/img2.png" alt="" id="img">
            <p id="txt">Happy Birthday Krishna</p>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/256/7379/7379352.png" alt="" id='rb'>`
        src.src = './media/audio.mp3'
        aud.load()
        aud.play()
})

setInterval(() => {
    let img = document.querySelector('#img')
    if(img && img.src.includes('img2.png')){
        img.src = "./media/img1.png"
    }
    else if(img){
        img.src = "./media/img2.png"
    }
}, 5000)

