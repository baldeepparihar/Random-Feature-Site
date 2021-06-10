import React from 'react';
import SearchInput from '../searchInput/searchInput';
import Tables from '../tables/tables';
import './tableSearch.scss';

function TableSearch(props) {
    const { tableList, selectedImage, setSelectedImage, images, searchTerm, setSearchTerm, handleNameSearch } = props;
    
    return (
        <div>
            <h1>Coffee Table Search</h1>
            <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleNameSearch={handleNameSearch}
            tableList={tableList}
            />
            <Tables 
            images={images}  
            tableList={tableList}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            />
        </div>
    )
}

export default TableSearch;
