function moviesChecker(input){
    let movies = [];

    for (const line of input) {
        if (line.includes("addMovie")){
            let movieName = line.split(' ').slice(1).join(' ');
            let obj = { name: movieName };
            movies.push(obj);
        } else if (line.includes("directedBy")){
            let movieName = line.split(' directedBy ')[0];
            let directorName = line.split(' directedBy ')[1];

            let movie = movies.find((x) => x.name === movieName);
            if (movie){
                movie.director = directorName;
            }
        } else {
            let movieName = line.split(' onDate ')[0];
            let date = line.split(' onDate ')[1];

            let movie = movies.find((x) => x.name === movieName);
            if (movie){
                movie.date = date;
            }
        }
    }

    let filteredMovies = movies
        .filter((movie) => movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date'));

    for (const movie of filteredMovies) {
        console.log(JSON.stringify(movie));
    }
}

moviesChecker(
    [
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
    ]        
)