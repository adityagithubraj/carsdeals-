import React from 'react'

function PageHeader({imgSrc}) {
  return (
    <div className='page-banner'>
      <img src={imgSrc} className='w-full'/>
    </div>
  )
}

export default PageHeader