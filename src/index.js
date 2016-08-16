import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import AlbumList from './components/AlbumList';
import PlayerList from './components/PlayerList';
import * as musicApi from './api/musicApi';
import * as fantasyApi from './api/fantasyApi';


/*
import SpotifyWebApi from 'spotify-web-api-node';
const scopes = ['user-read-private', 'user-read-email'];
const redirectUri = 'http://localhost:8080/callback';
const clientId = 'bb5ef2b0db1d4d20984eca962452b2c3';
const state = 'CA';
const spotifyApi = new SpotifyWebApi();

// const spotifyApi = new SpotifyWebApi({
//   redirectUri: redirectUri,
//   clientId: clientId
// });

const authorizeUrl = spotifyApi.createAuthorizeURL(scopes, state);

console.log('authorizeUrl - ', authorizeUrl);

spotifyApi.getAlbumTracks('392p3shh2jkxUxY2VHvlH8')
  .then((data) => {
    // console.log('channel orange tracks - ', data.body);
    for (var i = 0; i < data.body.items.length; i++){
      const current = data.body.items[i];
      console.log(current.track_number, ' - ', current.name, current.preview_url);
    }
  }, (err) => {
    console.log('error! - ', err);
  });
*/


class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      albums: [],
      // players: [],
    });
    this.getAlbums = this.getAlbums.bind(this);
    this.processAlbums = this.processAlbums.bind(this);

    // this.getPlayers = this.getPlayers.bind(this);
    // this.processPlayers = this.processPlayers.bind(this);
  }

  getAlbums(artist) {
    musicApi.getAlbums(artist, this.processAlbums);
  }

  // getPlayers() {
  //   fantasyApi.getPlayers(this.processPlayers);
  // }

  processAlbums(payload) {
    this.setState({
      albums: payload.albums.items,
    });
  }

  // processPlayers(payload) {
  //   this.setState({
  //     players: payload,
  //   })
  // }

  render() {
    return (
      <div>
       <SearchBar getAlbums={this.getAlbums} />
       <AlbumList albums={this.state.albums} />
        {/*
        <SearchBar getPlayers={this.getPlayers} />
        <PlayerList players={this.state.players} />
        */}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
