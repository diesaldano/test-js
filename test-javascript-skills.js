//
let arr = [ 2, 4, 6, 8, 10 ];

function calculateSquare(arr) {
  return arr.map(function(x) {
    return x * x;
  });
}

console.log(calculateSquare(arr));

//Counter array of objects
let arr2 = [{count: 1}, {count: 2}, {count: 3}]

function sumCounters(arr2) {
  return arr2.reduce(function(acc, curr) {
    return acc + curr.count;
  }, 0);
}  

console.log(sumCounters(arr2));

let movies = {
    'big': {
    actors: ['Elizabeth Perkins', 'Robert Loggia'],
    },
    'forrest gump': {
    actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    },
    'cast away': {
    actors: ['Helen Hunt', 'Paul Sanchez'],
    },
}

const moviesWithActors = (movies, actor) => {
    return Object.keys(movies).filter(movie => movies[movie].actors.includes(actor));
}

console.log(moviesWithActors(movies, 'Tom Hanks'));

let a = {
        value: 1,
        left: {value: 2},
        right: {value: 3},
    }

let b = {
        value: 1,
        left: {value: 2},
        right: {
            value: 3,
            left: {value: 4},
        },
    }

const treesAreEqual = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
}

console.log(treesAreEqual(a, b));

let str = "3h5n-8vnn-7-m"
    n = 4;

    const formatedString = (str, n) => {
        let result = "";
        let replace = "-"
        str = str.replace(/-/g, "");

        return Array.from(str).reduce((acc, curr, idx) => {
            return acc += (idx + 1) % n === 0 ? curr + replace : curr;
        })

    }

    console.log(formatedString(str, n));
