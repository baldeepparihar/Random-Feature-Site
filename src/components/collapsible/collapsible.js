import React from 'react';
import './collapsible.scss';
import classnames from 'classnames';

function Collapsible(props) {
    const { open } = props;
    const { description, weight, dimensions, images, selectedImage, setSelectedImage } = props;
   
    const onClick = (index) => {
        return () => setSelectedImage(index);
    }

    return (
        <div className={open ? "Collapsible Show" : "Collapsible Hide"}>
            <div className="Collapsible__Text--Wrapper">
                <div className="Collapsible__Left--Wrappper">
                    <p className="Collapsible__Paragraph"><span className="Collapsible__Paragraph--Span">Description:&nbsp;&nbsp;</span>{description}</p>
                </div>
                <div className="Collapsible__Right--Wrapper">
                    <p className="Collapsible__Paragraph"><span className="Collapsible__Paragraph--Span">Weight:&nbsp;&nbsp;</span>{weight}</p>
                    <p className="Collapsible__Paragraph"><span className="Collapsible__Paragraph--Span">Dimensions:&nbsp;&nbsp;</span>{dimensions}</p>
                </div>
            </div>
            <div className="Collapsible__Images--Wrapper">
                {images.map(({ image }, index) => {
                    return <img onClick={onClick(index)} className={classnames({ active: index === selectedImage })} src={image} alt="" />;
                })}
            </div>
        </div>
    )
}

export default Collapsible;
