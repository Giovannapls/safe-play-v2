"use client";
import React, { useRef } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
import { Streamer } from "@/types/streamer";
import Image from "next/image";
import YouTube from 'react-youtube';


const SingleStreamer = ({ streamer }: { streamer: Streamer }) => {

  const opts = {
    height: '300',
    width: '400',
  };
  const embed = useRef(); 
  
  const handleReady = (e) => {
    embed.current = e;
  };
  const { name, id} = streamer;
  return (
      <div className="rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
      <YouTube
 videoId={name}
 id={id}
 opts={opts}
/>
    </div>
  );
};

export default SingleStreamer;
