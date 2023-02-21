import { EmojiHappyIcon, PhotographIcon } from '@heroicons/react/outline'

export default function Input() {
  return (
    <div className='flex border-b border-gray-200 p-3 space-x-3'>
      <img
        src='https://res.cloudinary.com/dwgberjxq/image/upload/v1654160150/E1B49A3A-CA3C-48B7-9525-27283210DD86_tbvayq.jpg'
        alt='user-image'
        className='h-11 w-11 rounded-full cursor-pointer hover:brightness-95'
      />
      <div className='w-full divide-y divide-gray-200 '>
        <div className=''>
          <textarea
            className='w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700 '
            rows='2'
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div className='flex items-center justify-between pt-2.5'>
          <div className='flex'>
            <PhotographIcon className='h-8 w-8 hoverEffect p-2 text-sky-500 hover:bg-sky-500' />
            <EmojiHappyIcon className='h-8 w-8 hoverEffect p-2 text-sky-500 hover:bg-sky-500' />
          </div>
          <button className='bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50 '>
            Tweet
          </button>
        </div>
      </div>
    </div>
  )
}
