function movies(arr) {
    let movies = [];

    for (let command of arr) {

        if (command.includes('addMovie')) {
            let movie = command.split('addMovie ');
            let movieTitle = movie[1];

            let obj = { name: movieTitle };
            movies.push(obj);
        } else if (command.includes('directedBy')) {
            let [movieTitle, director] = command.split(' directedBy ');

            let found = movies.find(m => m.name === movieTitle);
            if (found) {
                found.director = director;
            }
        } else if (command.includes('onDate')) {
            let [movieTitle, date] = command.split(' onDate ');
            let found = movies.find(m => m.name === movieTitle);
            if (found) {
                found.date = date;
            }
        }
    }

    let fullMovies = movies.filter(m => m.name && m.director && m.date);

    for (const fullMovie of fullMovies) {
        let movieJSON = JSON.stringify(fullMovie);
        console.log(movieJSON);
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])