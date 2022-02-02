import React from 'react';
import './PictureView.css';
import {Col, Image, Row} from "react-bootstrap";
import pic from "../image/flirt.jpg"

const PictureView = function () {
    return (
        <div className='pictureview-container'>
            <Row className="mx-3">
                <Image as={Col} src={pic}></Image>
            </Row>
        </div>
        // <div style={{backgroundImage: `url(require('../flirt.jpg'))`}}>
        //
        // </div>
    );
}

export default PictureView;