import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import {demoThumbnailUrl, demoChannelUrl, demoVideoUrl, 
  demoChannelTitle, demoVideoTitle} from '../utils/constants'


const VideoCard = ({video : {id:{videoId},snippet}}) => {
  return (
    <Card sx={{width:{xs:'100%', sm: '358px', md:'320px'},boxShadow:'none',borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{width:{xs:'100%',sm: '358px',md:'320px'},height:170}}
         />
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e',height: '106px'}}>
        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
          <Typography variant="h6" fontWeight='bold' color='#FFF'>
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/video/${snippet?.channelId}`:demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight='bold' color='gray'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard