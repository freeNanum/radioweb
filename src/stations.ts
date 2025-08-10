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
    url: `${PROXY_URL}https://sminiplay.imbc.com/aacplay.ashx?agent=webapp&channel=sfm`,
  },
  {
    group: "MBC",
    name: "FM4U",
    frequency: "91.9MHz",
    url: `${PROXY_URL}http://serpent0.duckdns.org:8088/mbc-fm4u`,
  },
  {
    group: "SBS",
    name: "Power FM",
    frequency: "107.7MHz",
    url: `${PROXY_URL}http://serpent0.duckdns.org:8088/sbs-powerfm`,
  },
  {
    group: "SBS",
    name: "Love FM",
    frequency: "103.5MHz",
    url: `${PROXY_URL}http://serpent0.duckdns.org:8088/sbs-lovefm`,
  },
  {
    group: "CBS",
    name: "표준FM",
    frequency: "98.1MHz",
    url: `${PROXY_URL}http://aac.cbs.co.kr/cbs981/cbs981.stream/playlist.m3u8`,
  },
  {
    group: "CBS",
    name: "음악FM",
    frequency: "93.9MHz",
    url: `${PROXY_URL}http://aac.cbs.co.kr/cbs939/cbs939.stream/playlist.m3u8`,
  },
  {
    group: "TBS",
    name: "FM 교통방송",
    frequency: "95.1MHz",
    url: `${PROXY_URL}http://tbs.hscdn.com/tbsradio/fm/playlist.m3u8`,
  },
  {
    group: "TBS",
    name: "eFM",
    frequency: "101.3MHz",
    url: `${PROXY_URL}http://tbs.hscdn.com/tbsradio/efm/playlist.m3u8`,
  },
  {
    group: "EBS",
    name: "FM",
    frequency: "104.5MHz",
    url: `${PROXY_URL}http://ebsonairiosaod.ebs.co.kr/fmr/fmaac/playlist.m3u8`,
  },
];
