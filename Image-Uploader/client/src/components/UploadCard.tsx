import { Card, Text, Image, FileButton, Button } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { FC } from 'react';

import './UploadCard.css';

const UploadCard: FC<{ uploadImg: (img: File) => Promise<void> }> = ({ uploadImg }) => {
 return (
  <Card className='upload-card' shadow="sm" p="md" radius="md">
   <Text className='upload-card__title'>Upload your image</Text>
   <Text className='upload-card__desc'>File should be Jpeg, Png,...</Text>
   <Dropzone
    className='upload-card__img-placeholder'
    multiple={false}
    onDrop={(files: File[]) => uploadImg(files[0])}
    maxSize={3 * 1024 ** 2}
    accept={IMAGE_MIME_TYPE}
   >
    <Image
     className='upload-card__background-img'
     width='114.13px'
     height='88.24px'
     radius="sm"
     src="./image.svg"
     alt="upload image"
    />
    <Text className='upload-card__ins'>Drag & Drop your image here</Text>
   </Dropzone>
   <Text className='upload-card__text'>Or</Text>
   <FileButton onChange={uploadImg} accept="image/*" name='file'>
    {props => <Button className='upload-card__button upload-card__button-text' {...props}>Upload image</Button>}
   </FileButton>
  </Card>
 );
}

export default UploadCard