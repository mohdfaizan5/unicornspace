import React from 'react'
import useMousePosition from './MousePosition';

const FollowCursor = ({ref}) => {
  const mousePosition = useMousePosition();

  return (
    <div>FollowCursor</div>
  )
}

export default FollowCursor