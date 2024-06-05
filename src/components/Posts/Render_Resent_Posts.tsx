import React from 'react'

import { Render_Posts } from '../../interface/Posts/types'
import { FaRegHeart } from "react-icons/fa";

interface RenderResentPostsProps{
    posts:Render_Posts
}
export const Render_Resent_Posts :React.FC<RenderResentPostsProps>= ({posts}) => {
  return (
    <>
    <div>
        <div className='relative'>
        <img className='object-cover rounded-lg h-48 w-96' src={posts.image}></img>
        <div className='bg-black w-[45px] h-[45px] right-3 b absolute rounded-lg bottom-3 opacity-70 border-white border'>
       
        </div>
        <FaRegHeart size={25} color='white' className='absolute right-[10px]  right-[21px] bottom-5  opacity-100'/>
    
        </div>
 
<h1>{posts.title}</h1>

<h1 className='font-bold'><span>RD$</span>{posts.price}</h1>
<h2>{posts.details}</h2>
</div>

</>
    

  )
}
