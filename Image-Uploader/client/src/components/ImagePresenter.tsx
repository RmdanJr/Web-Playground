import { Text, Input, Image, Button } from "@mantine/core"
import { FC } from "react"

import './ImagePresenter.css'

const ImagePresenter: FC<{ imgSrc: string }> = ({ imgSrc }) => {
 return <div className="presenter">
  <div className="presenter__success-icon">
   <Image src="./check-icon.svg" />
  </div>
  <Text className="presenter__success-message">Uploaded Successfully!</Text>
  <Image className="presenter__uploaded-image" src={imgSrc} radius={12} width={338} />
  <div className="presenter__input-group">
   <Input
    variant="filled"
    value={imgSrc}
    disabled
    style={{ width: '260px' }}
   />
   <Button className="presenter__copy-btn" onClick={() => navigator.clipboard.writeText(imgSrc)}>
    Copy Link
   </Button>
  </div>
 </div>
}

export default ImagePresenter