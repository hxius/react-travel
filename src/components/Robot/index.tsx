import React from 'react'
import styles from './index.module.css'

interface RobotProps {
	id: string | number
	name: string
	email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
	return (
		<li className={styles.link}>
			<img src={`https://www.robohash.org/${id}`} alt='robot' />
			<h2>{name}</h2>
			<p>{email}</p>
		</li>
	)
}

export default Robot
