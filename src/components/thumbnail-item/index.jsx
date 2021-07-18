import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <h3>{node.frontmatter.title || node.fields.slug}</h3>
      <div class="thumbnail-info">
        <span class="thumbnail-info__date">{node.frontmatter.date}</span>
        <span class="thumbnail-info__in">in</span>
        <span class="thumbnail-info__category">{node.frontmatter.category}</span>
      </div>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  </Link>
)
