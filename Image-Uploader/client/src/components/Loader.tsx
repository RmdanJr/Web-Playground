import { Text, Progress } from '@mantine/core'
import { FC } from 'react'
import './Loader.css'

const Loader: FC<{ progress: number }> = ({ progress }) => {
 return <div className='loader'>
  <Text className='loader__title'>Uploading...</Text>
  <Progress value={progress} />
 </div>
}

export default Loader