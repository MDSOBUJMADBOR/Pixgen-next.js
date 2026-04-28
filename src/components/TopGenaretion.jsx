import React from 'react';
import PhotoCard from './PhotoCard';

const TopGeneration =async () => {
const res = await fetch("https://pixgen-next-js.vercel.app/data.json")
const photos = await res.json()
const topPhotos = photos.slice(0, 8)
console.log(topPhotos);



          return (  
          <div className='max-w-7xl mx-auto '>
      <h1 className='text-2xl font-bold my-5'>Top Generations</h1>  

<div className='grid grid-cols-4 gap-5'>
{
topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
}
</div>   

          </div>
          );
};

export default TopGeneration;