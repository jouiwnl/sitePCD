// Wrap every letter in a span
var textWrapper = document.querySelector('.animate--title');
var textWrapperDescription = document.querySelector('.description');
var textWrapperDescriptionPageTwo = document.querySelector('.animate--title--page--2');
var textWrapperDescriptionTwoFooter = document.querySelector('.animate--description--2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapperDescription.innerHTML = textWrapperDescription.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapperDescriptionPageTwo.innerHTML = textWrapperDescriptionPageTwo.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapperDescriptionTwoFooter.innerHTML = textWrapperDescriptionTwoFooter.textContent.replace(/\S/g, "<span class='letter'>$&</span>");



anime.timeline()
  .add({
    targets: '.animate--title .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 70*i
  })

  anime.timeline()
  .add({
    targets: '.description .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 14,
    delay: (el, i) => 300 + 30 * i
  })

  anime.timeline()
  .add({
    targets: '.animate--title--page--2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 70*i
  })

  anime.timeline()
  .add({
    targets: '.animate--description--2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 70*i
  })