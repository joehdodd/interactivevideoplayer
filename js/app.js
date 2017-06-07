// define video and captions
const video = document.getElementById('videoElement');
const capContainer = document.getElementById('captionContainer');
const captions = document.querySelectorAll('p span');

// skip video
capContainer.addEventListener('click', (event) => {
  // use event object to only target clicks on span tags
  if (event.target.tagName === 'SPAN') {
    // target span data-start attribute
    let timeValue = event.target.getAttribute('data-start');
    video.currentTime = timeValue;
  }
});

// highlight captions
video.addEventListener('timeupdate', () => {
  // loop over captions (querySelectorAll collection)
  for(let i = 0; i < captions.length; ++i) {
    // define time in local scope to properly get value
    let time = video.currentTime;
    // define start using array index
    let start = captions[i].getAttribute('data-start');
    // define end using array index
    let end = captions[i].getAttribute('data-end');
      // set condition to check start and end against value of time
      if (time >= start && time <= end) {
        captions[i].className = 'highlight';
      } else {
        captions[i].className = '';
      }
  }
});
