let container = document.querySelector('.container');
let firstPage = document.querySelector('.first-page');
let p1 = document.querySelector('.p-1');
let p1Container = document.querySelector('.p-1-container');
let p2Height;
let p3Height;
let offHeight;

let mountains1 = document.querySelector('.p-1-mountains');
let bgTrees2 = document.querySelector('.p-1-bg-trees');
let backTree3 = document.querySelector('.p-1-back-tree');
let house5morn = document.querySelector('.p-1-house');
let houseTrees4 = document.querySelector('.p-1-house-trees');
let frontTrees6 = document.querySelector('.p-1-front-trees');
let lake7 = document.querySelector('.p-1-lake');

let mountains1Night = document.querySelector('.p-1-mountains-night');
let bgTrees2Night = document.querySelector('.p-1-bg-trees-night');
let backTree3Night = document.querySelector('.p-1-back-tree-night');
let houseTrees4Night = document.querySelector('.p-1-house-trees-night');
let house5 = document.querySelector('.p-1-house-night');
let frontTrees6Night = document.querySelector('.p-1-front-trees-night');
let lake7Night = document.querySelector('.p-1-lake-night');

let p1Night = document.querySelectorAll('.p-1-night');
let p1Morning = document.querySelectorAll('.p-1-morning');

let p1Titles = document.querySelectorAll('.p-1-titles');

let p1BGNight = document.querySelector('.p-1-BG-night');

let snowContainer = document.querySelector('.snow-container');

let mountainColour = document.querySelector('.mountain-colour');
let mountainColour2 = document.querySelector('.mountain-colour2');

let audioWinterWind = document.querySelector('.audioWinterWind');
let clickToStart = document.querySelector('.clickToStart');

let haveReachedP1 = false;
let haveReachedP2 = false;
let haveReachedP3 = false;

let p2 = document.querySelector('.p-2');
let p2Kid = document.querySelector('.p-2-kid');
let p2Kid1 = document.querySelector('.p-2-kid-1');
let p2Kid2 = document.querySelector('.p-2-kid-2');
let p2Kid3 = document.querySelector('.p-2-kid-3');
let p2Kid4 = document.querySelector('.p-2-kid-4');
let kidRunSFX = document.querySelector('.kidRunSFX');

let p3 = document.querySelector('.p-3');
let p3Character = document.querySelector('.p-3-character');
let p3Ground = document.querySelector('.p-3-ground');
let p3Group = document.querySelector('.p-3-person-group');
let p3Persons = document.querySelectorAll('.p-3-persons');
let walkSnow = document.querySelector('.walkSnow');

let p4 = document.querySelector('.p-4');
// let p4ScrollTop;

// let heightValueToP4;


//--------- Click To Start Div -----------

clickToStart.addEventListener('click', ()=>{
  audioWinterWind.play();
  container.style.overflowY = 'auto';
  snowContainer.style.opacity = 1;
  clickToStart.style.display = 'none';
})

//------------------------------------

//--------- Creating Keyframes for p-3-persons -----------

  let stylesheet = document.querySelector('style');

  function translateElem(positionsAmo, rangeVal, animName){
    let percentage = 100 / positionsAmo;
    let defaultVal;
    stylesheet.innerHTML += `@keyframes ${animName}{\n`;
    for(let i = 0; i < positionsAmo; i++){
      console.log(i);
      if(i==0) {
        defaultVal = `${(Math.random() * rangeVal) - (rangeVal / 2)}% ${(Math.random() * rangeVal) - (rangeVal / 2)}%`
        stylesheet.innerHTML += `${(i * percentage)}%{translate: ${defaultVal}}\n`
      }
      else{
        stylesheet.innerHTML += `${(i * percentage)}%{translate: ${(Math.random() * rangeVal) - (rangeVal / 2)}% ${(Math.random() * rangeVal) - (rangeVal / 2)}%}\n`
      }
    }
    stylesheet.innerHTML += `100%{translate: ${defaultVal}}\n}\n`;
  }
  

  let i = 1;
  let newI;
  for(let x = 1; x <= 7; x++){
    translateElem(4, 2, `personVal${x}`);
  }
  p3Persons.forEach(person => {
    i++;
    if(i>7) newI = i%7;
    else newI = i;

    if (newI == 0) newI++;
    person.style.animation = `personVal${newI} 10s cubic-bezier(0.15, 0, 0.85, 1) 0.5s infinite both`;

  })

//------------------------------------


// p4.addEventListener('scroll', (p4ScrollTop)=> {
//   p4ScrollTop = p4.scrollTop / p4.clientHeight;
// })

if(document.documentElement.clientWidth/document.documentElement.clientHeight < 0.75){
  p1Container.style.position = 'sticky';
  p1Container.style.top = (((document.documentElement.clientHeight - p1Container.clientHeight) / 2) / document.documentElement.clientHeight) * 100 + "vh";
}

container.addEventListener('scroll', (e)=>{
  // console.log(p4.containerHeight);


  // console.log("First page: " + firstPage.clientHeight + ", Second page: " + p1.clientHeight + " Both: " + (firstPage.clientHeight + p1.clientHeight));
  // console.log(container.offsetHeight);
  let newHeight;
  if(p4.clientHeight != undefined){
    newHeight = container.scrollHeight - p4.clientHeight + p3.clientHeight;
  } 
  else if (p4.clientHeight == undefined){
    newHeight = container.scrollHeight;
  }
  let offHeight = container.offsetHeight;
  let offTop = container.scrollTop;

  // if(!haveReachedP3){
  //   heightValueToP4 = offTop;
  // }
  // else{
  //   console.log("Height Val " + heightValueToP4);
  // }

  let newScroll = offTop / (newHeight - offHeight);
  console.log(newScroll);
  // if (newScroll > 1 && haveReachedP3){
  //   newScroll = 1 + p4ScrollTop;
  // } 
  // console.log(offTop + document.documentElement.clientHeight);
  // console.log(offTop / offHeight - 1);
  // console.log(offTop / offHeight);
  let scrollValue = offTop / offHeight;
  // console.log(scrollValue);
  
  // console.log(p1Container.clientHeight / offHeight + " This detects how long we need to scroll to get past the illustration / p1Container");
  // This detects how long we need to scroll to get past the illustration / p1Container
  let scrollPastP1Container = p1Container.clientHeight / offHeight;
  // console.log(scrollValue + " " + scrollPastP1Container);

  // if(scrollValue < (scrollPastP1Container * 1.5)){
  if(scrollValue < (scrollPastP1Container * 1.1)){
    mountains1.style.translate = `0 calc(${scrollPastP1Container - scrollValue}*1vh)`;
    bgTrees2.style.translate = `0 calc(${scrollPastP1Container - scrollValue}*7vh)`;
    backTree3.style.translate = `0 calc(${scrollPastP1Container - scrollValue}*10vh)`;
    houseTrees4.style.translate = `0 calc(${scrollPastP1Container - scrollValue}*15vh)`;
    house5morn.style.translate = `0 calc(${scrollPastP1Container - scrollValue}*15vh)`;
    house5.style.translate = `0 calc(${scrollPastP1Container - scrollValue}*15vh)`;
    frontTrees6.style.translate = `0 calc(${scrollPastP1Container - scrollValue}*25vh)`;
    lake7.style.translate = `0 calc(${scrollPastP1Container - scrollValue}*38vh)`;
    mountains1Night.style.translate = `0 calc(${scrollPastP1Container - scrollValue}*1vh)`;
    bgTrees2Night.style.translate = `0 calc(${scrollPastP1Container - scrollValue}*7vh)`;
    backTree3Night.style.translate = `0 calc(${scrollPastP1Container - scrollValue}*10vh)`;
    houseTrees4Night.style.translate = `0 calc(${scrollPastP1Container - scrollValue}*15vh)`;
    frontTrees6Night.style.translate = `0 calc(${scrollPastP1Container - scrollValue}*25vh)`;
    lake7Night.style.translate = `0 calc(${scrollPastP1Container - scrollValue}*38vh)`;
  }

  // if(scrollValue >= (scrollPastP1Container * 1.5)){
  if(scrollValue >= (scrollPastP1Container * 1.1)){
    mountains1.style.translate = `0 calc(${scrollPastP1Container * -0.1} * 1vh)`;
    bgTrees2.style.translate = `0 calc(${scrollPastP1Container * -0.1} * 7vh)`;
    backTree3.style.translate = `0 calc(${scrollPastP1Container * -0.1} * 10vh)`;
    houseTrees4.style.translate = `0 calc(${scrollPastP1Container * -0.1} * 15vh)`;
    house5morn.style.translate = `0 calc(${scrollPastP1Container * -0.1} * 15vh)`;
    house5.style.translate = `0 calc(${scrollPastP1Container * -0.1} * 15vh)`;
    frontTrees6.style.translate = `0 calc(${scrollPastP1Container * -0.1} * 25vh)`;
    lake7.style.translate = `0 calc(${scrollPastP1Container * -0.1} * 38vh)`;
    mountains1Night.style.translate = `0 calc(${scrollPastP1Container * -0.1} * 1vh)`;
    bgTrees2Night.style.translate = `0 calc(${scrollPastP1Container * -0.1} * 7vh)`;
    backTree3Night.style.translate = `0 calc(${scrollPastP1Container * -0.1} * 10vh)`;
    houseTrees4Night.style.translate = `0 calc(${scrollPastP1Container * -0.1} * 15vh)`;
    frontTrees6Night.style.translate = `0 calc(${scrollPastP1Container * -0.1} * 25vh)`;
    lake7Night.style.translate = `0 calc(${scrollPastP1Container * -0.1} * 38vh)`;
  }

/* 
  mountains1.style.translate = `0 calc(${scrollValue}*1vh)`;
  bgTrees2.style.translate = `0 calc(${scrollValue}*6vh)`;
  backTree3.style.translate = `0 calc(${scrollValue}*10vh)`;
  houseTrees4.style.translate = `0 calc(${scrollValue}*15vh)`;
  house5.style.translate = `0 calc(${scrollValue}*15vh)`;
  frontTrees6.style.translate = `0 calc(${scrollValue}*25vh)`;
  lake7.style.translate = `0 calc(${scrollValue}*30vh)`;

  tbf the only thing that doesn't work is the fact that i used blend mode darken
  we just have to fill in the rest of the trees and make sure the shadow of the
  house doesn't interfere.

  Overall it has to be a exponential type of thing. Where it stops at a certain
  section.. That's the next thing we have to do which should just be some maths

  if(scrollValue > 1.5) backTree3.style.translate = `0 calc(${1.5}*10vh + (${scrollValue - 1.5} *6vh))`;
  if(scrollValue > 1.5) backTree3.style.translate = `0 calc(${1.5}*10vh + (${scrollValue - 1.5} *6vh))`;
  if(scrollValue > 1.5) houseTrees4.style.translate = `0 calc(${1.5}*15vh + (${scrollValue - 1.5} *6vh))`;
  if(scrollValue > 1.5) house5.style.translate = `0 calc(${1.5}*15vh + (${scrollValue - 1.5} *6vh))`;
  if(scrollValue > 1.5) frontTrees6.style.translate = `0 calc(${1.5}*25vh + (${scrollValue - 1.5} *6vh))`;
  if(scrollValue > 1.5) lake7.style.translate = `0 calc(${1.5}*30vh + (${scrollValue - 1.5} *6vh))`;
*/

  if((offTop + document.documentElement.clientHeight) >= (firstPage.clientHeight + p1.clientHeight) && !haveReachedP1){

    snowContainer.style.opacity = 0;
    setTimeout(function(){
    snowContainer.style.display = 'none';
    }, 1500);

    setTimeout(() => {
      house5morn.style.zIndex = '0';
    }, 1500);

    p1Container.style.backgroundColor = '#eeeeed';

    p1BGNight.style.opacity = 0;

    p1.style.backgroundColor = '#eeeeed';
    p1.style.borderBottom = '2px solid #eeeeed';
    container.style.backgroundColor = '#eeeeed';

    mountainColour.style.backgroundColor = '#e0e0e0';
    // mountainColour2.style.backgroundColor = '#e0e0e0';

    p1Titles.forEach(title => title.style.color = '#333');

    p1Morning.forEach(elem => elem.style.visibility = 'visible');

    p1Night.forEach(elem => elem.style.opacity = 0);

    // audioWinterWind.volume = 0.1;

    let fadeAudio = setInterval(() => {
      if(audioWinterWind.volume > 0.05){
        audioWinterWind.volume -= 0.05;
      }
      else{
        audioWinterWind.muted = true;
        audioWinterWind.pause();
        clearInterval(fadeAudio);
      }
      console.log(audioWinterWind.volume);
    }, 250);

    setTimeout(() => {
      p2.style.display = 'block';
    }, 2000);

    haveReachedP1 = true;


    // .p-1-night{
    //   opacity: 0;
    //   visibility: hidden;
    // }
    
    // .p-1-morning{
    //   visibility: visible;
    //   opacity: 1;
    // }
    
    // .container{
    //   background-color: transparent;
    // }
    
    // .p-1{
    //   background-color: #eeeeed;
    // }
    
    // .first-page{
    //   background: linear-gradient(to bottom,#eeeeed 90%, #e0e0e0 100%);
    // }
    
    // .mountain-colour{
    //   background-color: #e0e0e0;
    // }
    
    // .title-1,
    // .title-2{
    //   color: #333;
    // }
  }

  p2Height = (document.documentElement.clientHeight * 1.25);
  // console.log(offTop + document.documentElement.clientHeight);

  if((offTop + document.documentElement.clientHeight) >= (firstPage.clientHeight + p1.clientHeight + p2Height - 1) && !haveReachedP2){
    console.log((offTop + document.documentElement.clientHeight) + " - " + (firstPage.clientHeight + p1.clientHeight + p2.clientHeight - 1));
    haveReachedP2 = true;


    kidRunSFX.play();
    // p2Kid.style.animation = ``;
    // p2Kid1.style.animation = ``;
    // p2Kid2.style.animation = ``;
    // p2Kid3.style.animation = ``;
    // p2Kid4.style.animation = ``;
    p2Kid1.style.display = `block`;
    p2Kid2.style.display = `block`;
    p2Kid3.style.display = `block`;
    p2Kid4.style.display = `block`;
    p2Kid.style.animation = `kidRun 1s linear 0.2s both`;
    p2Kid1.style.animation = `kidRun1 1.2s linear 0.2s both`;
    p2Kid2.style.animation = `kidRun2 1.2s linear 0.2s both`;
    p2Kid3.style.animation = `kidRun3 1.2s linear 0.2s both`;
    p2Kid4.style.animation = `kidRun4 1.2s linear 0.2s both`;


    setTimeout(() => {
      p3.style.display = 'block';
    }, 2000);
  }

  p3Height = (document.documentElement.clientHeight * 1.1);


  if((offTop + document.documentElement.clientHeight) >= (firstPage.clientHeight + p1.clientHeight + p2.clientHeight + p3Height - 1) && !haveReachedP3){
    console.log('bruh');
    haveReachedP3 = true;
    p3Character.style.animation = `p3Character1 8s ease 0.08s forwards, p3Character2 2s ease 8.08s forwards`;
    p3Ground.style.animation = `p3Ground 8s linear both`;
    walkSnow.play();
    setTimeout(() => {
      p4.style.display = 'block';
    }, 2000);
  }

  if(haveReachedP3){
    if(newScroll < 0.6){
      p3Group.style.visibility = `hidden`;
      p4.style.visibility = `hidden`;
    }
    else if(newScroll > 0.6 && newScroll < 0.75){
      p3Group.style.visibility = `visible`;
      p4.style.visibility = `hidden`;
    }
    else if(newScroll > 0.75 && newScroll < 0.98){
      p3Group.style.visibility = `visible`;
      p4.style.visibility = `visible`;
    }
    else if(newScroll > 0.98){
      p3Group.style.visibility = `hidden`;
      p4.style.visibility = `visible`;
    }
    
    // WE COULD DO THE FOLLOWING, CPU GOES DOWN TO 3%
    // BUT THATS WHEN YOU DONT WANT ANY ANIMATINO TO RUN... BRUH
    // Seems like visibility doesn't do anything, we have to use display:none type shee

    // *, *:before, *:after {
    //   -o-transition-property: none !important;
    //   -moz-transition-property: none !important;
    //   -ms-transition-property: none !important;
    //   -webkit-transition-property: none !important;
    //   transition-property: none !important;
       
    //   -o-transform: none !important;
    //   -moz-transform: none !important;
    //   -ms-transform: none !important;
    //   -webkit-transform: none !important;
    //   transform: none !important;
       
    //   -webkit-animation: none !important;
    //   -moz-animation: none !important;
    //   -o-animation: none !important;
    //   -ms-animation: none !important;
    //   animation: none !important;
    // }
  }
})



window.addEventListener('resize', ()=>{
  // console.log(document.documentElement.clientWidth/document.documentElement.clientHeight);
  if(document.documentElement.clientWidth/document.documentElement.clientHeight < 0.75){
    
    p1Container.style.position = 'sticky';
    
    // console.log((((document.documentElement.clientHeight - p1Container.clientHeight) / 2) / document.documentElement.clientHeight) * 100);
    // (clientHeight - p1ContainerHeight) / 2 = additional height in px then we divide it by clientHeight again so we get percentage or vh value
    p1Container.style.top = (((document.documentElement.clientHeight - p1Container.clientHeight) / 2) / document.documentElement.clientHeight) * 100 + "vh";
    // offHeight = document.documentElement.offsetHeight;
  }
})