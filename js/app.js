// DEFINE VIDEO AND CAPTIONS
const video = document.getElementById('video');
const captions = document.querySelectorAll('p span');

// JUMP TO CURRENT TIME
   // USING QUERYSELECTORALL, WE NEED TO LOOP OVER THE COLLECTION FIRST
for(let i = 0; i < captions.length; ++i) {
  // THEN ADD CLICK EVENT LISTENER TO LOOPED COLLECTION
    captions[i].addEventListener('click', () => {
      // DEFINE TIME VALUE BY STORING DATA-START IN VARIABLE
      let timeValue = captions[i].getAttribute('data-start');
      // SET VIDEO.CURRENTTIME = TIMEVALUE
      video.currentTime = timeValue;
    });
};

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
