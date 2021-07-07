import React from 'react'
import Button from './Button'
import './ButtonList.css'

const ButtonList = () => {
  return (
    <>
      <div className='btn-container btn-default'>
        <p>&lt;Button /&gt;</p>
        <Button />
      </div>
      <div className='btn-container btn-outline'>
        <p>&lt;Button variant=&quot;outline&quot; /&gt;</p>
        <Button variant='outline' />
      </div>
      <div className='btn-container btn-text'>
        <p>&lt;Button variant=&quot;text&quot; /&gt;</p>
        <Button variant='text' />
      </div>
      <div className='btn-container btn-disable-shadow'>
        <p>&lt;Button disableShadow /&gt;</p>
        <Button disableShadow />
      </div>
      <div className='btn-container btn-disabled'>
        <p>&lt;Button disabled /&gt;</p>
        <Button disabled />
      </div>
      <div className='btn-container btn-text-disabled'>
        <p>&lt;Button variant=&quot;text&quot; disabled /&gt;</p>
        <Button variant='text' disabled />
      </div>
      <div className='btn-container btn-start-icon'>
        <p>&lt;Button startIcon=&quot;local_grocery_store&quot; /&gt;</p>
        <Button startIcon='local_grocery_store' />
      </div>
      <div className='btn-container btn-end-icon'>
        <p>&lt;Button endIcon=&quot;local_grocery_store&quot; /&gt;</p>
        <Button endIcon='local_grocery_store' />
      </div>
      <div className='btn-container btn-size-sm'>
        <p>&lt;Button size=&quot;sm&quot; /&gt;</p>
        <Button size='sm' />
      </div>
      <div className='btn-container btn-size-md'>
        <p>&lt;Button size=&quot;md&quot; /&gt;</p>
        <Button size='md' />
      </div>
      <div className='btn-container btn-size-lg'>
        <p>&lt;Button size=&quot;lg&quot; /&gt;</p>
        <Button size='lg' />
      </div>
      <div className='btn-container btn-color-default'>
        <p>&lt;Button color=&quot;default&quot; /&gt;</p>
        <Button color='default' />
      </div>
      <div className='btn-container btn-color-primary'>
        <p>&lt;Button color=&quot;primary&quot; /&gt;</p>
        <Button color='primary' />
      </div>
      <div className='btn-container btn-color-secondary'>
        <p>&lt;Button color=&quot;secondary&quot; /&gt;</p>
        <Button color='secondary' />
      </div>
      <div className='btn-container btn-color-danger'>
        <p>&lt;Button color=&quot;danger&quot; /&gt;</p>
        <Button color='danger' />
      </div>
    </>
  )
}

export default ButtonList
