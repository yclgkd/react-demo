import React from 'react'
import styles from './Robots.module.css'

interface RobotProps {
  id: number,
  name: string,
  email: string
}

const Robots: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Robots;
