import React from 'react'

import './index.scss'

export const PostCategory = ({ category }) => {
  return <p className="post-category">
        <span>{category}</span>
      </p>
}
