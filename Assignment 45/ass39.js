"use strict";
/* Assignment # 39 */
/* Album */
function makeAlbum(artist, title, tracks) {
    const album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(makeAlbum("Artist 1", "Album 1"));
console.log(makeAlbum("Artist 2", "Album 2", 12));
