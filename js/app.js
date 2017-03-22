// DEFINE VIDEO AND CAPTIONS
const video = document.getElementById('video');
const captions = document.querySelectorAll('p span');

// ADD EVENT LISTENER TO VID
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
        // IF && IS TRUE, ADD HIGHLIGHT
        captions[i].className = 'highlight';
      } else {
        // OTHERWISE SET CLASS TO EMPTY STRING
        captions[i].className = '';
      }
  }
});
