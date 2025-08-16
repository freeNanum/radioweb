/*
 * Copyright (c) 2025 Jaehong Park <jaehong1972@gmail.com>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { Station } from '../stations';

interface RadioPlayerProps {
  station: Station | null;
}

const RadioPlayer: React.FC<RadioPlayerProps> = ({ station }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // --- Aggressive Cleanup --- 
    // 1. Destroy any existing HLS instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }
    // 2. Reset the native audio element
    audio.removeAttribute('src');
    audio.load();

    // --- Load New Station --- 
    if (station) {
      const isHls = station.url.includes('.m3u8');

      if (isHls) {
        if (Hls.isSupported()) {
          const hls = new Hls();
          hlsRef.current = hls;
          hls.loadSource(station.url);
          hls.attachMedia(audio);
        } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
          audio.src = station.url;
        }
      } else {
        audio.src = station.url;
      }
    }

    // Final cleanup when component unmounts
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [station]);

  return (
    <div className="now-playing">
      {station ? (
        <>
          <h2>{station.name}</h2>
          <p>{station.frequency}</p>
        </>
      ) : (
        <>
          <h2>Welcome</h2>
          <p>Select a station to start listening</p>
        </>
      )}
      <audio ref={audioRef} controls />
    </div>
  );
};

export default RadioPlayer;