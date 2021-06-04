import React, { useEffect, useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import TableSearch from './components/tableSearch/tableSearch';
import TaskList from './components/taskList/taskList';
import Tables from './Data/data.json';

function App() {
  const [initialTables, setInitialTables] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [tableList, setTableList] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);

  useEffect(() => {
    setTableList(Tables);
    setInitialTables(Tables);
    getImages();
    getSelectedImage();
    console.log(initialTables)
  }, []);


  console.log(Tables)
  let imageListAll = Tables.map(table => {
    return table.images;
  })
  const getImages = () => {
    setImages(imageListAll);
  }

  let firstImages = imageListAll.map(image => {
    return image[0].image
  })
  const getSelectedImage = () => {
    setSelectedImage(firstImages);
  }


  const handleNameSearch = (getSearch) => {
    if (getSearch !== '') {
      const newTableList = initialTables.filter(table => {
        return table.title.toLowerCase().includes(getSearch.toLowerCase()) 
        || table.sku.toLowerCase().includes(getSearch.toLowerCase());
      })
      setTableList(newTableList);
    } else {
      setTableList(initialTables)
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/TableSearch' exact render={props => {
            return (
              <TableSearch
              {...props}
              images={images}
              tableList={tableList}
              handleNameSearch={handleNameSearch}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            )
          }} />
          <Route path='/TaskList' exact component={TaskList} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
