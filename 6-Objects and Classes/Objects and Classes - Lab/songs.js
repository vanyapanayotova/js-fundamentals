function songs(arr) {
    let numberOfSongs = arr.shift();
    let songs = [];
    let typeSong = arr.pop();

    class Song {

        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = arr[i].split('_');

        let song = new Song(type, name, time);
        songs.push(song);
        console.log(song.time);
    }

    if (typeSong === 'all') {

    }


}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])