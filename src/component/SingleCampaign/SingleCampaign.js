import React, { useEffect, useState } from 'react';
import Button from '@restart/ui/esm/Button';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useData from "../../usehooks/useData";
const SingleCampaign = () => {
    const {key} = useParams();
    const [campaigns]= useData();
    console.log(campaigns)

    // const [campaigns, setCampaigns]= useState([]);
    // useEffect(() => {
    //     fetch("../demoData.json")
    //     .then(res=>res.json())
    //     .then(data=>setCampaigns(data))
    // },[]);
    // console.log(campaigns);
    const singleCam = campaigns.find(cam=> cam.key === key);
    console.log(singleCam);

    return (
        <div>
        </div>
    );
};

export default SingleCampaign;