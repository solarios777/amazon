import React from 'react'
import { categoryInfos,categoryInfosmob } from './CategoryFullInfos'
import CategoryCard from './CategoryCard'
import classes from "./category.module.css";
const Category = () => {
    return (
      <>
        <section
          className={classes.category_container} 
        >
          {categoryInfos.map((infos) => (
            <CategoryCard key={infos.name} data={infos} />
          ))}
        </section>
        <section
          className={classes.category_mobcontainer}
        >
          {categoryInfosmob.map((infos) => (
            <CategoryCard key={infos.name} data={infos} />
          ))}
        </section>
      </>
    );
}

export default Category
