import React from 'react'

import './index.scss'

export const PostInfo = ({ date, category }) => {
  return <div class="post-info">
      <span class="post-category"><a href={`../../?category=${category}`}>{category}</a></span>
      <span class="post-date">{date}</span>
  </div>
}
