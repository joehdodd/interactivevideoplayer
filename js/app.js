// DEFINE VIDEO AND CAPTIONS
const video = document.getElementById('video');
const capContainer = document.getElementById('capContainer');
const captions = document.querySelectorAll('p span');

// SKIP VIDEO
capContainer.addEventListener('click', (event) => {
  // USE EVENT OBJECT TO ONLY TARGET CLICKS ON SPAN TAGS
  if (event.target.tagName === 'SPAN') {
    // TARGET SPAN DATA-START
    let timeValue = event.target.getAttribute('data-start');
    video.currentTime = timeValue;
  }
});

// HIGHLIGHT CAPTIONS
video.addEventListener('timeupdate', () => {
  // LOOP OVER CAPTIONS (QUERYSELECTORALL COLLECTION)
  for(let i = 0; i < captions.length; ++i) {
    // DEFINE TIME IN LOCAL SCOPE TO PROPERLY GET VALUE
    let time = video.currentTime;
    // DEFINE START USING ARRAY INDEX
    let start = captions[i].getAttribute('data-start');
    // DEFINE END USING ARRAY INDEX
    let end = captions[i].getAttribute('data-end');
    // SET CONDITIONAL TO CHECK START AND END AGAINST TIME
      if (time >= start && time <= end) {
        captions[i].className = 'highlight';
      } else {
        captions[i].className = '';
      }
  }
});
