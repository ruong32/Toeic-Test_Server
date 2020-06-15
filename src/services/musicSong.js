import MusicSong from '../models/musicSong';

const createSong = async song => {
  return await MusicSong.createSong(song);
}

const findSongByName = async songName => {
  return await MusicSong.findSongByName(songName);
}

const findSongById = async songId => {
  return await MusicSong.findSongById(songId);
}

const findAllSongs = async () => {
  return await MusicSong.findAllSongs();
}

export default {createSong, findSongById, findSongByName, findAllSongs}