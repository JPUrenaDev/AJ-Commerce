import React from 'react'
import { Render_Posts } from '../../interface/Posts/types'
import { Render_Resent_Posts } from './Render_Resent_Posts'
import { FaAngleRight } from "react-icons/fa";

const posts:Render_Posts[]=[

{
  title:'Juegos de candelabros en madera con velas.', 
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/0_Hyundai_Sonata_%28DN8%29_fl_1.jpg/375px-0_Hyundai_Sonata_%28DN8%29_fl_1.jpg', 
  details:'Usado - Como Nuevo', 
  moreDetails:'Usado - Como Nuevo', 
  price:10000

},
{
  title:'Test', 
  image:'https://www.bienesraicesnicanor.com/Images/Dovinet-444a5516-ccb7-4b7c-a24c-f57342259263.jpg', 
  details:'test', 
  moreDetails:'test', 
  price:11333

},
{
  title:'Test', 
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/0_Hyundai_Sonata_%28DN8%29_fl_1.jpg/375px-0_Hyundai_Sonata_%28DN8%29_fl_1.jpg', 
  details:'test', 
  moreDetails:'test', 
  price:11333

},
{
  title:'Test', 
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/0_Hyundai_Sonata_%28DN8%29_fl_1.jpg/375px-0_Hyundai_Sonata_%28DN8%29_fl_1.jpg', 
  details:'test', 
  moreDetails:'test', 
  price:11333

}
,{
  title:'Test', 
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/0_Hyundai_Sonata_%28DN8%29_fl_1.jpg/375px-0_Hyundai_Sonata_%28DN8%29_fl_1.jpg', 
  details:'test', 
  moreDetails:'test', 
  price:11333

}

]


export const Resent_Posts = () => {
  return (
    <div className='bg-white mt-4 w-[1400px] rounded-lg px-4 py-4 mx-auto'>
      <div className='flex items-center justify-between'>
      <h1 className='font-bold text-[20px] mb-5'>Publicaciones recientes</h1>
      <div className='flex items-center gap-3 '>
      <h2 className='text-[20px] mb-5 text-blue-400'> Explorar más</h2>
      <FaAngleRight  size={30} className='mb-5 text-blue-400'/>
      </div>
    
      </div>
   
    <div className='flex gap-[40px] flex-wrap items-center'>

 
  
    {posts.map((values,index)=>{
     return  <Render_Resent_Posts key={index} posts={values}/>
    })}
       </div>
       
    </div>
  )
}


