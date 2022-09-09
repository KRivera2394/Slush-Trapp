import React from 'react';

export default function Home() {
  return (
    <div className='d-flex flex-column align-items-center mt-5'>
      <h1 className='homeHeading mb-5'>SLUSH TRAP</h1>
      <p className='homeText px-3'>
      We're a mobile Slushy and snow cone food truck! 
      We travel to different locations in the Tampa Bay area!
      Check in with us to see where we will be next!
      </p>


      <iframe className='fbPost' title='fbPost' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkeanu.rivera.33%2Fposts%2Fpfbid027wT52uwhSt3HmVGCJ5MwoNqXgeXZvUUqa6mPqNy3janpyoXEVw7pfzU8uXvxw2Bnl&show_text=true&width=500"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

    </div>
   
  );
}
