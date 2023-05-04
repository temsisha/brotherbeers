import React, { useState, useEffect } from "react";
import sanityClient from '../client'
import Beer from "../components/beer";

const Beers = () => {
    const [beers, setBeers] = useState(null);

    useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "beer"]{
            breweryLogo,
            beerName,
            beerType,
            beerABV,
            beerIBU,
            beerLowPrice,
            beerHighPrice,
            newBeer,
	    soldBeer,
            publishedAt,
           }`
			)
			.then((data) => setBeers(data))
			.catch(console.error);
	}, []);
  return (
    <div className="tvmenu" >
      <div className="left-side">
        {beers && beers.map((beer) => (
          <Beer key={beer.beerName} beer={beer}/>
        ))}
      </div>
    </div>
  )
}

export default Beers
