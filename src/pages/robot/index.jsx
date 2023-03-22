import React from 'react'
import RobotItem from '@/components/Robot'
import styled from './styled.module.scss'

import robots from '@/mock/robots.json'

const Robot = () => {
  return (
    <div className={styled['robots-list']}>
      {robots.map((robot) => <RobotItem id={robot.id} name={robot.name} email={robot.email}/>)}
    </div>
  )
}

export default Robot