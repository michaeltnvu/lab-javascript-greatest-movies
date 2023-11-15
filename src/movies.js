// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sumOfScore = moviesArray.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);
  const avgOfScores = Number((sumOfScore / moviesArray.length).toFixed(2));
  return avgOfScores;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaArray = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (dramaArray.length === 0) return 0;

  const sumOfDramaScores = dramaArray.reduce(
    (acc, movie) => acc + (movie.score || 0),
    0
  );

  return Number((sumOfDramaScores / dramaArray.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const clonedMoviesArray = structuredClone(moviesArray);
  clonedMoviesArray.map((movie) => {
    if (!movie.duration.includes("h")) {
      movie.duration = parseInt(movie.duration);
    } else if (!movie.duration.includes("min")) {
      movie.duration = parseInt(movie.duration) * 60;
    } else {
      const durationArray = movie.duration.split(" ");
      movie.duration =
        parseInt(durationArray[0], 10) * 60 + parseInt(durationArray[1], 10);
    }
  });
  return clonedMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  const yearlyArray = {};
  const avgArr = [];

  moviesArray.forEach((movie) => {
    if (!Object.hasOwn(yearlyArray, movie.year)) {
      yearlyArray[movie.year] = [];
    }
    yearlyArray[movie.year].push(movie);
  });

  Object.keys(yearlyArray).forEach((year) =>
    avgArr.push(scoresAverage(yearlyArray[year]))
  );

  return `The best year was ${
    Object.keys(yearlyArray)[avgArr.indexOf(Math.max(...avgArr))]
  } with an average score of ${Math.max(...avgArr)}`;
}
