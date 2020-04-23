// ==UserScript==
// @name         Roam Current time format
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  use AM/PM format for /currentTime command in Roam Research
// @downloadURL  https://raw.github.com/palashkaria/roam-modifiers/master/time-format.user.js
// @author       palashkaria
// @match        https://roamresearch.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  function replaceTime(mutations) {
    var textarea = document.querySelector('textarea');
    if (textarea) {
      textarea.addEventListener('keydown', (data) => {
        console.log('value', data.target.value);
        var currentDate = new Date();
        var currentTime = currentDate
          .toLocaleTimeString()
          .split(':')
          .splice(0, 2)
          .join(':');
        var currentTimeFormatted = formatAMPM(currentDate);
        console.log(
          'value',
          data.target.value,
          currentTimeFormatted,
          currentTime
        );
        if (currentTime === data.target.value) {
          console.log('yas!');
          document.querySelector('textarea').value = currentTimeFormatted;
        }
      });
    }
  }
  var target = document.querySelector('body');

  // create an observer instance
  var observer = new MutationObserver(function (mutations) {
    replaceTime(mutations);
    mutations.forEach(function (mutation) {
      console.log(mutation.type);
    });
  });

  // configuration of the observer:
  var config = { attributes: true, childList: true, characterData: true };

  // pass in the target node, as well as the observer options
  observer.observe(target, config);
})();
