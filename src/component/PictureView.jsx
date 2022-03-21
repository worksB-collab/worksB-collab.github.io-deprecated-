import React from 'react';
import './PictureView.css';
import {Button, Col, Image, Row} from "react-bootstrap";
import pic from "../image/flirt.jpg"

const PictureView = function () {
    return (
        <div className={'pictureview-container'}>
            {/*<Row className="mx-0">*/}
            <div className={"pictureview"}/>
            <div className={"text-over-img"}>love me like you do <br/> touch me like you do</div>
            {/*</Row>*/}
            <Button className={"btn-action"} variant="outline-light">register now</Button>
        </div>
    );
}

export default PictureView;