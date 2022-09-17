import { gql } from '@apollo/client';

export const GET_TRIPS_SUMMARY = gql`
    query getAllTrips {
        myTrips {
            id
            latlong {
                latitude
                longitude
            }
            title
        }
    }
`;

export const GET_TRIP = gql`
    query getTripDetails($id: ID!, $locale: [Locale!]!) {
        myTrip(where: { id: $id }, locales: $locale) {
            latlong {
                longitude
                latitude
            }
            title
            tags
            updatedAt
            locale
            createdAt
            content {
                html
            }
        }
    }
`;
