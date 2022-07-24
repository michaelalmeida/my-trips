import { GET_TRIPS_SUMMARY } from '../../api/myTrips/queries';
import { useApiClient } from '../../api/useApiClient';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapWrapper } from './Map.style';
import { ITripsSummary } from '../../api/myTrips/MyTrips.types';
import { PinIcon } from '../../assets/Icons';
import L from 'leaflet';

export const Map = () => {
    const MAP_ZOOM = 3;
    const MAP_SCROLL = true;
    const { data } = useApiClient({ query: GET_TRIPS_SUMMARY });

    const PintIconMarker = L.icon({
        iconUrl: PinIcon,
        iconSize: [40, 40],
        iconAnchor: [12, 12],
        popupAnchor: [0, 0],
    });

    return (
        <MapWrapper>
            <MapContainer center={[51.505, -0.09]} zoom={MAP_ZOOM} scrollWheelZoom={MAP_SCROLL}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
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
