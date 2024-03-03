const Series = ({ title, thumbnail, count, lastCreated, href }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{count}</div>
      <div>{lastCreated}</div>
    </div>
  )
}

export default Series
