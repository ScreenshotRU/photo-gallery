import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Album from './Containers/Album';
import AlbumsList from './Containers/AlbumsList';
import UsersList from './Containers/UsersList';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Route exact
          path="/photo-gallery"
          render={() => <UsersList /> }
        />
          <Route exact
              path="/user"
              render={() => <AlbumsList />}
          />
          <Route exact
              path="/album"
              render={() => <Album />}
          />
      </BrowserRouter>
    </div>
  );
}

export default App;
