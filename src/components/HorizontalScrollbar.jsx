import React from 'react'
import { Box } from '@mui/material'
import BodyPart from './BodyPart'

export const HorizontalScrollbar = ({data, bodyPart, setBodyPart }) => {
  return (
    <div>
       {data.map((item) => <Box
       key={item.id || item}
       itemId={item.id || item}
       title={item.id || item}
       m="0 40px">
        <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            
       </Box>)}
    </div>
  )
}
export default HorizontalScrollbar;
