export interface ITripsSummary {
    id: string;
    latlong: {
        latitude: number;
        longitude: number;
    };
    title: string;
}

export interface ITripsDetails {
    id: string;
    latlong: {
        latitude: number;
        longitude: number;
    };
    title: string;
    tags: string;
    locale: string;
    createdAt: string;
    content: {
        html: string;
    };
}
