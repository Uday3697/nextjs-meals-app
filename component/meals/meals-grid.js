import React from 'react'
import classes from './meals-grid.module.css'
import MealItem from './meals-item'
const MEalsGrid = ({ meals }) => {
    return (
        <ul className={classes.meals}>
            {
              meals&&  meals.map((meal)=>(
                    <li key={meal.id}>
                        <MealItem {...meal} />
                    </li>
                ))
            }
        </ul>
    )
}

export default MEalsGrid