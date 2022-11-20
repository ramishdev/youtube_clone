import React from 'react'
import {Stack,Box} from '@mui/material'
import {VideoCard,ChannelCard} from './'

const Videos = ({videos,direction}) => {
  console.log(direction)
  return (
    <Stack direction={direction ||'row'} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos && videos.map((video,idx) => (
        <Box key={idx}>
            {video.id.videoId && <VideoCard video={video}/>}
            {video.id.channelId && <ChannelCard channelDetail={video}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default React.memo(Videos);