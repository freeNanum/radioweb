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
    url: `${PROXY_URL}https://minisw.imbc.com/dsfm/_definst_/sfm.stream/chunklist.m3u8`,
  },
  {
    group: "MBC",
    name: "FM4U",
    frequency: "91.9MHz",
    url: `${PROXY_URL}https://minimw.imbc.com/dmfm/_definst_/mfm.stream/chunklist.m3u8`,
  },
  {
    group: "CBS",
    name: "표준FM",
    frequency: "98.1MHz",
    url: `${PROXY_URL}https://m-aac.cbs.co.kr/mweb_cbs981/_definst_/cbs981.stream/playlist.m3u8`,
  },
  {
    group: "CBS",
    name: "음악FM",
    frequency: "93.9MHz",
    url: `${PROXY_URL}https://m-aac.cbs.co.kr/mweb_cbs939/_definst_/cbs939.stream/chunklist.m3u8`,
  },
  {
    group: "TBS",
    name: "eFM",
    frequency: "101.3MHz", // Assuming 101.3MHz for eFM
    url: `${PROXY_URL}https://cdnefm.tbs.seoul.kr/tbs/_definst_/tbs_efm_web_720.smil/chunklist_b1128000.m3u8`,
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
    url: `${PROXY_URL}https://mlive2.febc.net/live/seoulfm/playlist.m3u8`,
  },
  {
    group: "Gugak",
    name: "FM 99.1",
    frequency: "99.1MHz",
    url: `${PROXY_URL}http://mgugaklive.nowcdn.co.kr/gugakvideo/gugakvideo.stream/playlist.m3u8`,
  },
  {
    group: "Arirang",
    name: "Radio",
    frequency: "", // Not provided
    url: `${PROXY_URL}https://amdlive-ch03-ctnd-com.akamaized.net/arirang_3ch/smil:arirang_3ch.smil/chunklist_b3256000_sleng.m3u8`,
  },
  {
    group: "YTN",
    name: "라디오FM",
    frequency: "", // Not provided
    url: `${PROXY_URL}https://radiolive.ytn.co.kr/radio/_definst_/20211118_fmlive/medialist_1726141820918041463_hls.m3u8`,
  },
];