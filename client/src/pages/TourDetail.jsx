import React from 'react';
import { useParams } from 'react-router-dom';

const TourDetail = () => {
  const { id } = useParams();

  return <h1>Tour Detail for Tour ID: {id}</h1>;
};

export default TourDetail;
