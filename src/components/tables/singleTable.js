import React, { useState } from 'react';
import './singleTable.scss';
import Collapsible from '../collapsible/collapsible';
import ChevronUp from '../../assets/chevron-up.svg';
import ChevronDown from '../../assets/chevron-down.svg';

function SingleTable(props) {
    const [open, setOpen] = useState(false);
    const { table, images } = props;
    const [selectedImage, setSelectedImage] = useState(0);
    

    const handleToggle = () => {
        setOpen(!open);
    }

    return (
        <div className="Table"> 
            <div className="Table--Wrapper">
                <div className="Table__Container--Left">
                    <div className="Table__Image-Info--Container">
                        <div className="Table__Image--Wrapper">
                            <img src={images[selectedImage].image} className="Table__Image" alt="Image of Table" />
                        </div>
                        <div className="Table__Info--Wrapper">
                            <div className="Table__Paragraph--Wrapper">   
                                <p className="Table__Price">Price:</p>
                                <p className="Table__Info">{table.price}</p>
                            </div>
                            <div className="Table__Paragraph--Wrapper">
                                <p className="Table__Brand">Brand:</p>
                                <p className="Table__Info"> {table.title}</p>
                            </div>
                            <div className="Table__Paragraph--Wrapper">
                                <p className="Table__Brand">SKU:</p>
                                <p className="Table__Info"> {table.sku}</p>
                            </div>
                        </div>
                    </div>
                        <div className="Table__Collapsible--Wrapper">
                            <Collapsible
                                open={open}
                                table={table}
                                description={table.description}
                                weight={table.weight}
                                dimensions={table.dimensions}
                                images={images}
                                selectedImage={selectedImage}
                                setSelectedImage={setSelectedImage}
                            />
                        </div>   
                </div>
                <div className="Table__Container--Right">
                    <img className="Table__PlusMinus--Toggle"
                        src={open ? ChevronUp : ChevronDown}
                        alt={open ? "Chevron Up" : "Chevron Down"}
                        onClick={() => handleToggle()}
                    />
                </div>
            </div> 
        </div>
       
    )
}

export default SingleTable;





// function Student(props) {
//     const { students, updateStudent } = props;

//     return (
//         <div>
//             <div className="Student">
//                 {students.map(student => {
//                     return <SingleStudent key={student.id} student={student} updateStudent={updateStudent} />
//                 })}
//             </div>
//         </div>
//     )
// }

