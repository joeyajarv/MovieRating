/**
 *   @author Jarvenpaa, Josiah (josiahjarvenpaa@live.com)
 *   @version 0.0.1
 *   @summary Project 3 || created: 10.11.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let numMovieStarRating, numCounter, numMovieStarRatingTotal, numAverageMovieRating;
let movieTitle;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueResponse();
    while (continueResponse === 1) {
        setMovieTitle();
        setNumMovieStarRating();
        setNumCounter();
        setNumMovieStarRatingTotal();
        setNumAverageMovieRating();
        printNumAverageMovieRating();
        setContinueResponse();
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse != null) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function setMovieTitle() {
    movieTitle = PROMPT.question('\n Please enter title of movie: ');
}

function setNumMovieStarRating() {
    const MAX_RATING = 5,
        MIN_RATING = 0,
        MAX_TRIES = 3;
    let answered = false;
    let counter = 0;
    while (counter < MAX_TRIES && answered != true) {
        numMovieStarRating = Number(PROMPT.question(`\nPlease enter rating: `));
        if (numMovieStarRating < MIN_RATING || numMovieStarRating > MAX_RATING) {
            counter++;
        } else {
            counter++;
            answered = true;
        }
    }
}

function setNumCounter() {
    if (numCounter != null) {
        numCounter++;
    } else {
        numCounter = 1;
    }
}

function setNumMovieStarRatingTotal() {
    if (numMovieStarRatingTotal != null) {
        numMovieStarRatingTotal += numMovieStarRating;
    } else {
        numMovieStarRatingTotal = numMovieStarRating;
    }
}

function setNumAverageMovieRating() {
    numAverageMovieRating = numMovieStarRating / numCounter;
}

function printNumAverageMovieRating() {
    console.log(`\n Average rating for ${movieTitle} is: ${numAverageMovieRating}`);
}

function printGoodbye() {
    console.log(`\n Goodbye.`);
}