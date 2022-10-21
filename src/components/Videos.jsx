// import React from "react";
// import { Stack, Box } from "@mui/material";

// import { ChannelCard, Loader, VideoCard } from "./";

// const Videos = ({ videos, direction }) => {
//   if (!videos || videos.length === 0)
//     return <Loader />;
//   console.log(videos)
//   return (
//     <div >
//       {videos.map((item, idx) => (
//         <div key={idx}>
//           <span>Test</span>
//           {item && <span>{item.id}</span>}
//         </div>))}
//     </div>
//   );
// }

// export default Videos;





//<Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
  // {videos.map((item, idx) => (
  //   <Box key={idx}>
  //     {item && item.id &&
  //       <div>
  //         {item.id.videoId && <VideoCard video={item} />}
  //         {item.id.channelId && <ChannelCard channelDetail={item} />}
  //       </div>
  //     }
  //   </Box>
  // ))}
//</Stack>

import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;