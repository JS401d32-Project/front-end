import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../assets/404.jpg';

export default function NoRoute() {

  return (
    <>

    <div>
      <img src={PageNotFound} />
    </div>;
    </>
  );
}
