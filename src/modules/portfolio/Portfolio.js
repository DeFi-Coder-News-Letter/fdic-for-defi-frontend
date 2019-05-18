import React from 'react';
import ListPage from '../components/ListPage';

function Portfolio() {
  const title = "Portfolio"
  const address = "0xlalalalalalallala"
  const protocols = [
      {
        icon: "./assets/img/brand/favicon.png",
        serviceName: "Dydx",
        eth: "3",
        percentage: "100%",
        percentageIcon: "./assets/img/brand/favicon.png"
      },
      {
        icon: "./assets/img/brand/favicon.png",
        serviceName: "Dydx",
        eth: "3",
        percentage: "100%",
        percentageIcon: "./assets/img/brand/favicon.png"
      },
    ]

  return (
    <ListPage 
      title = {title}
      address = {address}
      lists = {protocols}
    />
  );
}

export default Portfolio;
