import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_TIME_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(e => {
    const time = e.seconds;
    localStorage.setItem(STORAGE_TIME_KEY, time);
  }, 1000)
);

const getRememberTime = localStorage.getItem(STORAGE_TIME_KEY);

player
  .setCurrentTime(getRememberTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
