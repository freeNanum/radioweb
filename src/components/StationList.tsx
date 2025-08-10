import React from 'react';
import { Station } from '../stations';

interface StationListProps {
  stations: Station[];
  currentStation: Station | null;
  onStationSelect: (station: Station) => void;
}

const StationList: React.FC<StationListProps> = ({ stations, currentStation, onStationSelect }) => {
  const groupedStations = stations.reduce((acc, station) => {
    (acc[station.group] = acc[station.group] || []).push(station);
    return acc;
  }, {} as Record<string, Station[]>);

  return (
    <div>
      {Object.entries(groupedStations).map(([group, stationItems]) => (
        <div key={group} className="station-group">
          <h3>{group}</h3>
          {stationItems.map((station) => (
            <div 
              key={station.name}
              className={`station-item ${currentStation?.url === station.url ? 'selected' : ''}`}
              onClick={() => onStationSelect(station)}
            >
              {station.name} ({station.frequency})
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StationList;
