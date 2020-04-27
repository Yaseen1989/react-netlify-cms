import React from "react"

import ReactHtmlParser from 'react-html-parser';
import * as data from '../static-data/wp-data.json'

const WP = () => {
    console.log(data.default);
    const listItems = data.default.map((link) =>
        <li key={link.id}>{link.content.rendered}</li> 
    );
    return (
       
      <div className="navigation">
        <ul>
            {
                data.default.map((link) =>
                    <li key={link.id}>{ReactHtmlParser(link.content.rendered)}</li> 
                )
            }
        </ul>
      </div>
    );
}

export default WP