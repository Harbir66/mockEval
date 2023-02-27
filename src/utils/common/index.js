const getAllGenres = (songs) => {
  const genres = [];
  songs.forEach((song) => {
    const index = genres.findIndex((genre) => genre.id === song.genre.id);
    if (index === -1) {
      genres.push(song.genre);
    }
  });
  return genres;
};

export default getAllGenres;
