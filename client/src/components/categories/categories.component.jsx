import React from 'react';

import './categories.styles.scss';

const Categories = ({ categories }) => (
  <div styleName={`categories ${categories.length ? 'show' : ''}`}>
    {categories.map((category, idx) => {
      const { name, subcategories } = category;
      return (
        <div styleName='category' key={idx}>
          <span styleName='category-name'>
            {name}
          </span>

          <ul styleName='subcategories'>
            {subcategories.map((subcategory, idx) => {
              const { name } = subcategory;
              return (
                <li styleName='subcategory-name' key={idx}><span>{name}</span></li>
              )
            })}
          </ul>
        </div>
      )
    })}
  </div>
)
 
    


export default Categories;