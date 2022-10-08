import React from "react";
import Images from "../Image";
import { ImageList, ImageListItem } from "@mui/material";

export default function Photos() {
  return (
    <>
      <div className="container-fluid">
        <h1> </h1>
        <ImageList variant="masonry" cols={3} gap={8}>
          {Images.map((item) => (
            <ImageListItem key={item.src}>
              <img
                src={`${item.src}?w=248&fit=crop&auto=format`}
                srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}
