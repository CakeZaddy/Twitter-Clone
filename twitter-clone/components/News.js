export default function News({ article }) {
  return (
    <a href={article.url} target='_blank'>
      <div className='flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-500 ease-out hover:rounded-xl'>
        <div className='space-y-0.5'>
          <h6 className='text-sm font-bold'>{article.title}</h6>
          <p className='text-xs font-medium text-gray-500'>
            {article.source.name}
          </p>
        </div>
        <img className='rounded-xl w-[70px]' src={article.urlToImage} alt='' />
      </div>
    </a>
  )
}
