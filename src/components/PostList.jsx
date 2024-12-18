import React from 'react'
import Post from './Post'

export default function PostList({posts,handleDelete,handleToast}) {
  return (
    <>
    <div className="flex flex-wrap">
        {
            !!posts.length && posts.map((post)=> <Post key={post.id} post={post} postDelete={handleDelete} handleToast={handleToast} />)
        }
    </div>
    {
        !posts.length && <div class="mt-[20%] flex justify-center items-center">
            <p className='text-center text-lg text-gray-500'>Currently no posts yet.</p>
        </div>
    }
    </>
  )
}
