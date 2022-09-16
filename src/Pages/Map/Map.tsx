import { GET_TRIPS_SUMMARY } from '../../api/myTrips/queries';
import { useApiClient } from '../../api/useApiClient';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { MapWrapper } from './Map.style';
import { ITripsSummary } from '../../api/myTrips/MyTrips.types';
import { PinIcon } from '../../assets/Icons';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';

export const Map = () => {
    const MAP_ZOOM = 3;
    const MAP_SCROLL = true;
    const { data } = useApiClient({ query: GET_TRIPS_SUMMARY });
    const navigate = useNavigate();

    const PintIconMarker = L.icon({
        iconUrl: PinIcon,
        iconSize: [45, 45],
        iconAnchor: [25, 45],
        popupAnchor: [0, 0],
    });

    const themingMap = {
        url: `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${process.env.REACT_APP_STADIA}`,
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    };

    const onMarketClickHandler = (id: string) => navigate(`trip/${id}`, { replace: false });

    return (
        <MapWrapper>
            <MapContainer center={[51.505, -0.09]} zoom={MAP_ZOOM} scrollWheelZoom={MAP_SCROLL}>
                <TileLayer attribution={themingMap.attribution} url={themingMap.url} />
                {data &&
                    data.myTrips.map((trip: ITripsSummary) => (
                        <Marker
                            position={[trip.latlong.latitude, trip.latlong.longitude]}
                            key={trip.id}
                            icon={PintIconMarker}
                            eventHandlers={{
                                click: () => {
                                    onMarketClickHandler(trip.id);
                                },
                            }}></Marker>
                    ))}
            </MapContainer>
        </MapWrapper>
    );
};
