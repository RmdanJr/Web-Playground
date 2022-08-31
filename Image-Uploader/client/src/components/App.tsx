import { useState } from "react";
import { MantineProvider, Stack } from "@mantine/core";
import { theme } from "../theme";

import UploadCard from "./UploadCard";
import Loader from "./Loader";
import ImagePresenter from "./ImagePresenter"

import { sleep } from "../helpers";

import uploadApi from '../api'

import './App.css'

export default function App() {
  const [state, setState] = useState<"inital" | "upload" | "confirm">("inital")
  const [progress, setProgress] = useState<number>(0);
  const [imgUrl, setImgUrl] = useState<string>("");

  const uploadImg = async (img: File) => {
    setState("upload")
    const formData = new FormData();
    formData.append('file', img)
    const res = await uploadApi.post('/api/upload', formData)
    for (let percent = 1; percent <= 100; percent++) {
      setProgress(percent)
      await sleep(10 + percent / 2)
    }
    await sleep(500)
    setImgUrl(`http://localhost:4000${res.data.url}`)
    setState("confirm")
  }

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Stack className="stack" align="center" justify="center" >
        {
          state === "inital" ? <UploadCard uploadImg={uploadImg} />
            : state === "upload" ? <Loader progress={progress} />
              : <ImagePresenter imgSrc={imgUrl} />
        }
      </Stack>
    </MantineProvider >
  );
}
