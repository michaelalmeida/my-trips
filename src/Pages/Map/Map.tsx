import { GET_TRIPS_SUMMARY } from '../../api/myTrips/queries';
import { useApiClient } from '../../api/useApiClient';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapWrapper } from './Map.style';
import { ITripsSummary } from '../../api/myTrips/MyTrips.types';
import { PinIcon } from '../../assets/Icons';
import L from 'leaflet';

interface IMapProps {
    isDarkTheme: boolean;
}

export const Map = ({ isDarkTheme }: IMapProps) => {
    const MAP_ZOOM = 3;
    const MAP_SCROLL = true;
    const { data } = useApiClient({ query: GET_TRIPS_SUMMARY });

    const PintIconMarker = L.icon({
        iconUrl: PinIcon,
        iconSize: [40, 40],
        iconAnchor: [0, 40],
        popupAnchor: [0, 0],
    });

    const themingMap = {
        url: isDarkTheme
            ? 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            : 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        attribution: isDarkTheme
            ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            : 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    };

    return (
        <MapWrapper>
            <MapContainer center={[51.505, -0.09]} zoom={MAP_ZOOM} scrollWheelZoom={MAP_SCROLL}>
                <TileLayer attribution={themingMap.attribution} url={themingMap.url} />
                {data &&
                    data.myTrips.map((trip: ITripsSummary) => (
                        <Marker
                            position={[trip.latlong.latitude, trip.latlong.longitude]}
                            key={trip.id}
                            icon={PintIconMarker}>
                            <Popup>{trip.title}</Popup>
                        </Marker>
                    ))}
            </MapContainer>
        </MapWrapper>
    );
};
