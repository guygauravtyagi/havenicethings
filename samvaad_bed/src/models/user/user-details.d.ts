export interface UserDetails {
    id: string;
    userName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    salutation: string;
    pronouns: string;
    gender: string;
}

export interface Location {
    city: string;
    state: string;
    country: string;
    street: string;
    zipCode : string;
}

export interface User {
    id: string;
    url: string;
    userDetails: UserDetails;
    location: Location;
}