import { useState } from 'react';
import { AddCategory, GifGrid } from './componenst';
//import { GifGrid } from './componenst/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Puch' ]);
  //console.log(categories)


    const onAddCategory =(onNewCategory) =>{

        //console.log('Valorant');

      if(categories.includes(onNewCategory) ) return;

        setCategories( [ onNewCategory, ...categories ] );

       // categories.push(onNewCategory);

       //console.log(onNewCategory);

    }


  return (
    <>
  
   
    <h1>GifExpertApp</h1>

   
    <AddCategory 
        
        onNewCategory={ (value)=> onAddCategory(value)}
    />

          { 
            categories.map( (category) => (

                <GifGrid key={category}
                category={category}/>

              ) )
          }
      

    </>
  )
}

