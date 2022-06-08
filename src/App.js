
import React  from "react";
import List from './components/List';
import SearchAppBar from './components/Search'

function App() {
  return (
      <div className="App">
          <SearchAppBar/>
          <List/>
        </div>
  );
}

export default App;
