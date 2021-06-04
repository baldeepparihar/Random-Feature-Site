import React from 'react'
import SingleTable from './singleTable';
import './tables.scss';


function Tables(props) {
    const { tableList, updateTable, selectedImage, setSelectedImage, images } = props;


    return(
        <div className="Table">
            {tableList.map(table => {
                return (
                <SingleTable
                key={table.id}
                images={images} 
                images={table.images} 
                tableList={tableList} 
                updateTable={updateTable}
                table={table}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                />
                )
            })}
        </div>
    )
}

export default Tables;