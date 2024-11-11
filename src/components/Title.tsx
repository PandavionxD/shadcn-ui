import React from 'react'

export const Title = ({titulo}): React.JSX.Element => {
  return (
    <h1 className='text-xl text-center font-semibold' >
        {titulo}
    </h1>
  )
}
