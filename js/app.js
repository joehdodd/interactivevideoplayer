// DEFINE VIDEO AND CAPTIONS
const video = document.getElementById('video');
const captions = document.querySelectorAll('p span');

// SET CAPTIONS CLASSNAME TO EMPTY STRING, JUST IN CASE!
captions.className = '';

// ADD EVENT LISTENER TO VIDEO
video.addEventListener('timeupdate', () => {
    // Add Class Caption 1
    if (video.currentTime >= 0.240 && video.currentTime <= 4.130) {
      captions[0].className = 'highlight';
    // Remove Class Caption 1 // Add Class Caption 2
    } else if (video.currentTime >= 4.130 && video.currentTime <= 7.535) {
      captions[0].className = '';
      captions[1].className = 'highlight';
    // Remove Class Caption 2 // Add Class Caption 3
    } else if (video.currentTime >= 7.535 && video.currentTime <= 11.270) {
      captions[1].className = '';
      captions[2].className = 'highlight';
    // Remove Class Caption 3 // Add Class Caption 4
    } else if (video.currentTime >= 11.27 && video.currentTime <= 13.96) {
      captions[2].className = '';
      captions[3].className = 'highlight';
    // Remove Class Caption 4 // Add Class Caption 5
    } else if (video.currentTime >= 13.96 && video.currentTime <= 17.94) {
      captions[3].className = '';
      captions[4].className = 'highlight';
   // Remove Class Caption 5 // Add Class Caption 6
    } else if (video.currentTime >= 17.94 && video.currentTime <= 22.37) {
      captions[4].className = '';
      captions[5].className = 'highlight';
   // Remove Class Caption 6 // Add Class Caption 7
    } else if (video.currentTime >= 22.37 && video.currentTime <= 26.88) {
      captions[5].className = '';
      captions[6].className = 'highlight';
   // Remove Class Caption 7 // Add Class Caption 8
    } else if (video.currentTime >= 26.88 && video.currentTime <= 30.92) {
      captions[6].className = '';
      captions[7].className = 'highlight';
   // Remove Class Caption 8 // Add Class Caption 9
    } else if (video.currentTime >= 32.100 && video.currentTime <= 34.730) {
      captions[7].className = '';
      captions[8].className = 'highlight';
   // Remove Class Caption 9 // Add Class Caption 10
    } else if (video.currentTime >= 34.730 && video.currentTime <= 39.430) {
      captions[8].className = '';
      captions[9].className = 'highlight';
   // Remove Class Caption 10 // Add Class Caption 11
    } else if (video.currentTime >= 39.430 && video.currentTime <= 41.190) {
      captions[9].className = '';
      captions[10].className = 'highlight';
   // Remove Class Caption 11 // Add Class Caption 12
    } else if (video.currentTime >= 42.350 && video.currentTime <= 46.300) {
      captions[10].className = '';
      captions[11].className = 'highlight';
   // Remove Class Caption 12 // Add Class Caption 13
    } else if (video.currentTime >= 46.300 && video.currentTime <= 49.270) {
      captions[11].className = '';
      captions[12].className = 'highlight';
   // Remove Class Caption 13 // Add Class Caption 14
    } else if (video.currentTime >= 49.270 && video.currentTime <= 53.760) {
      captions[12].className = '';
      captions[13].className = 'highlight';
    // Remove Class Caption 14 // Add Class Caption 15
    } else if (video.currentTime >= 53.760 && video.currentTime <= 57.780) {
      captions[13].className = '';
      captions[14].className = 'highlight';
    // Remove Class Caption 15 // Add Class Caption 16
    } else if (video.currentTime >= 57.780) {
      captions[14].className = '';
      captions[15].className = 'highlight';
    } else {
      captions.className = '';
    }
});
