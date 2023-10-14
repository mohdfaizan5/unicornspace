let progress = document.getElementById('progress-bar')



// event listener - scroll and to get (scrolltop , scrollHeight and scrollpercent) 

document.addEventListener('scroll', () => {
  // console.dir(document.documentElement.scrollTop);
  // console.dir(document.documentElement.scrollHeight);

  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;

  const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';

  // console.log(scrollPercent);

  // updating the scrollpercent to the css variable - progress

  progress.style.setProperty('--progress', scrollPercent)

})



// Popup

let box = document.getElementById("model-box")

let closeBtn = document.querySelector('.close-icon')

setTimeout(() => {
  // filter: blur(16px);
  document.querySelector('main').style.filter = 'blur(16px)';
  box.style.display = 'block';

}, 1000)

closeBtn.addEventListener('click', () => {
  document.querySelector('main').style.filter = 'blur(0px)';
  box.style.display = 'none';
})

