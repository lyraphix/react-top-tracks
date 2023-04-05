import React from "react";
import {List, ListItem, ListItemText } from "@mui/material";


const PlaylistSidebar = ({playlists}) => {
 

  return (
    
      <div >
        <List >
          {playlists.map((playlist) => (
            <ListItem
              key={playlist}
              
              onClick={() => console.log("Clicked playlist:", playlist)}
            >
              <ListItemText primary={playlist} />
              <div>{playlist} songs</div>
            </ListItem>
          ))}
        </List>
      </div>
  
  );
};

export default PlaylistSidebar;
