export interface Station {
  name: string;
  frequency: string;
  url: string;
  group: string;
}

const PROXY_URL = 'http://localhost:3010/proxy?url=';

export const stations: Station[] = [
  {
    group: "KBS",
    name: "1Radio",
    frequency: "AM 711kHz",
    url: `${PROXY_URL}https://cfpwwwapi.kbs.co.kr/api/v1/landing/live/channel_code/21`,
  },
  {
    group: "KBS",
    name: "Happy FM",
    frequency: "106.1MHz",
    url: `${PROXY_URL}https://cfpwwwapi.kbs.co.kr/api/v1/landing/live/channel_code/22`,
  },
  {
    group: "KBS",
    name: "1FM (Classic FM)",
    frequency: "93.1MHz",
    url: `${PROXY_URL}https://cfpwwwapi.kbs.co.kr/api/v1/landing/live/channel_code/24`,
  },
  {
    group: "KBS",
    name: "Cool FM",
    frequency: "89.1MHz",
    url: `${PROXY_URL}https://cfpwwwapi.kbs.co.kr/api/v1/landing/live/channel_code/25`,
  },
  {
    group: "MBC",
    name: "표준FM",
    frequency: "95.9MHz",
    url: `${PROXY_URL}http://miniplay.imbc.com/AAC/STANDARD.m3u8`,
  },
  {
    group: "MBC",
    name: "FM4U",
    frequency: "91.9MHz",
    url: `${PROXY_URL}http://miniplay.imbc.com/AAC/FM4U.m3u8`,
  },
  {
    group: "CBS",
    name: "표준FM",
    frequency: "98.1MHz",
    url: `${PROXY_URL}http://aac.cbs.co.kr/cbs981/_definst_/cbs981.stream/playlist.m3u8`,
  },
  {
    group: "CBS",
    name: "음악FM",
    frequency: "93.9MHz",
    url: `${PROXY_URL}http://aac.cbs.co.kr/cbs939/_definst_/cbs939.stream/playlist.m3u8`,
  },
  {
    group: "TBS",
    name: "FM 교통방송",
    frequency: "95.1MHz",
    url: `${PROXY_URL}http://tbs.hscdn.com/tbsfm/m/playlist.m3u8`,
  },
  {
    group: "EBS",
    name: "FM",
    frequency: "104.5MHz",
    url: `${PROXY_URL}http://ebsonair.ebs.co.kr/fm/bandiapp/live.m3u8`,
  },
  // New stations from Korea,South.json with direct streaming URLs
  {
    group: "KBS World Radio",
    name: "German Stream",
    frequency: "", // Not available
    url: `${PROXY_URL}http://live.world.kbs.gscdn.com/cocotv/_definst_/CH00005/playlist.m3u8`,
  },
  {
    group: "KBS World Radio",
    name: "Channel 1",
    frequency: "", // Not available
    url: `${PROXY_URL}http://kbsrki.gscdn.com/kbsrki1/_definst_/kbsrki1.stream/playlist.m3u8`,
  },
  {
    group: "KBS World Radio",
    name: "Channel 2",
    frequency: "", // Not available
    url: `${PROXY_URL}http://kbsrki.gscdn.com/kbsrki2/_definst_/kbsrki2.stream/playlist.m3u8`,
  },
  {
    group: "KBS World Radio",
    name: "Channel 3",
    frequency: "", // Not available
    url: `${PROXY_URL}http://kbsrki.gscdn.com/kbsrki3/_definst_/kbsrki3.stream/playlist.m3u8`,
  },
  {
    group: "FEBC",
    name: "극동방송 (FM)",
    frequency: "", // Not available
    url: `${PROXY_URL}http://mlive2.febc.net:1935/live/seoulfm/playlist.m3u8`,
  },
  {
    group: "Gugak",
    name: "FM 99.1",
    frequency: "99.1MHz",
    url: `${PROXY_URL}http://mgugaklive.nowcdn.co.kr/gugakvideo/gugakvideo.stream/playlist.m3u8`,
  },
];