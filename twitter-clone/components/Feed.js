import { SparklesIcon } from '@heroicons/react/outline'
import Input from './Input'
import Post from './Post'

export default function Feed() {
  const posts = [
    {
      id: '1',
      name: 'Sulaimon Omotosho',
      username: 'Cake_Zaddy',
      userimg:
        'https://res.cloudinary.com/dwgberjxq/image/upload/v1654160150/E1B49A3A-CA3C-48B7-9525-27283210DD86_tbvayq.jpg',
      img: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Green!!!',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      name: 'Sulaimon Omotosho',
      username: 'Cake_Zaddy',
      userimg:
        'https://res.cloudinary.com/dwgberjxq/image/upload/v1654160150/E1B49A3A-CA3C-48B7-9525-27283210DD86_tbvayq.jpg',
      img: 'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Great!!!',
      timestamp: '1 day ago',
    },
  ]
  return (
    <div className='xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
      <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
        <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
        <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
          <SparklesIcon className='h-5' />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}