import React from 'react'

const page = ({ params }: {
    params: { topicId: string }
}) => {
  return (
    <div>Topic {params.topicId}</div>
  )
}

export default page