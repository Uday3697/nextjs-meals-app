import React, { Suspense } from 'react'
import Classes from './page.module.css'
import Link from 'next/link'
import MEalsGrid from '@/component/meals/meals-grid'
import { getMeals } from '@/lib/meals'


async function Meals() {
  const meals = await getMeals()
  return <MEalsGrid meals={meals} />
}


export default async function MealsPage() {

  const meals = await getMeals();
  return (
    <>
      <header className={Classes.header}>
        <h1>Delicious meals,created {''}
          <span className={Classes.highlight}>by You </span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself.it is easy and fun </p>
        <p className={Classes.cta}>

          <Link href='/meals/share'>share your favorite recepie</Link>
        </p>

      </header>
      <main className={Classes.main}>
        <Suspense fallback={  <p className={Classes.loading}>Loading...</p>}>
          <Meals />
        </Suspense>
      </main>

    </>
  )
}


