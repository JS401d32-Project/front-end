import React from 'react';
import PageNotFound from '../../assets/404.jpg';

export default function NoRoute() {
  return (
    <React.Fragment>
      <div>
        <img src={PageNotFound} alt={'broken robot'}/>
      </div>;
    </React.Fragment>
  );
}
