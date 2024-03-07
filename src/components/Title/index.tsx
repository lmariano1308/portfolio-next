import React from 'react'

interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return <div>{children}</div>
}

export default Title
