import classes from './page.module.css'
import { getMeal } from '@/lib/meals'
import Image from 'next/image';


export default function MealDetailsPage({ params }) {

  const meal = getMeal(params.mealSlug);
  meal.instructions = meal.instructions.replace(/\n/g, '<br />')

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal?.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal?.title}</h1>
          <p>
            by <a href={`mail to:${meal.creator_email}`} >{meal.creator}</a>
          </p>
          <p className={classes.summry}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.instructions} dangerouslySetInnerHTML={{
        __html: meal.instructions,
      }}>
        <p>INs</p>
      </main>
    </>
  )
}

