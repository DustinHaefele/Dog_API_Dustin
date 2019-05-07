/* global $ */
/*
requested functionality:

choose between 1-50 images to show
then prints results to console

form with required input where user indicates number of
imgs(1-50); should default to 3

https://dog.ceo/api/breeds/image/random/3

*/

'use strict';
//currently numImgs is being stored as a string
let store = {
  items: [],
  numImgs: 0,
  breed: '',
};

function storeDogNum(input) {
  if(!input){
    store.numImgs = 3;
  }
  else {
    store.numImgs = input;
  }
}

function storeBreed(breed) {
  store.breed = breed;
}

function handleUserInput() {
  $('#dogSearchForm').submit(function(e) {
    e.preventDefault();
    console.log('got to here');
    let inputNum = $('.numberInputBox').val();
    $('.numberInputBox').val('');
    let inputBreed = $('#breedInputBox').val();
    $('#breedInputBox').val('');
    storeDogNum(inputNum);
    storeBreed(inputBreed);
    if(!store.breed){
      getRandomDogImages();
    }
    else {
      getRandomBreedImages();
    }
  });
}

function main() {
  handleUserInput();
}

function getRandomDogImages() {
  return fetch(`https://dog.ceo/api/breeds/image/random/${store.numImgs}`)
    .then((response) => {return response.json();})
    .then(response => {
      console.log(response.message);
      store.items = response.message;
      dogsToDOM();
    });
}

function getRandomBreedImages() {
  return fetch(`https://dog.ceo/api/breed/${store.breed}/images/random/${store.numImgs}`)
    .then((response) => {return response.json();})
    .then(response => {
      console.log(response.message);
      store.items = response.message;
      dogsToDOM();
    })
    .catch(function(e) {console.log('error');});
}


function dogsToDOM() {
  console.log(store.items);
  let html = store.items.map(function(item) {
    return `<li><img src=${item}></li>`;
  });
  console.log(html);
  $('.dogList').html(html);
}
  

$(main);


// do we need 2 separate functions to update # of dogs in store ie
// handleUserInput and one that changes numDogs or do we just update it with 
// the first func