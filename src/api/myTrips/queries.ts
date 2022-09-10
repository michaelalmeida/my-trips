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
    query getTripDetails($id: ID!) {
        myTrip(where: { id: $id }) {
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
