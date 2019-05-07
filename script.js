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

let store = {
  items: [],
  numImgs: 0,

};

function storeDogNum(input) {
  store.numImgs = input;
}

function handleUserInput() {
  $('#dogSearchForm').submit(function(e) {
    e.preventDefault();
    console.log('got to here');
    let inputNum = $('.numberInputBox').val();
    $('.numberInputBox').val('');
    storeDogNum(inputNum);
    console.log(store.numImgs);
  });
}

function main() {
  handleUserInput();
}

$(main);


// do we need 2 separate functions to update # of dogs in store ie
// handleUserInput and one that changes numDogs or do we just update it with 
// the first func