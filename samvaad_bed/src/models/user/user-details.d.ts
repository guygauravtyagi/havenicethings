export interface UserDetails {
    userName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    salutation: string;
    pronouns: string;
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
    userDetails: UserDetails;
    location: Location
}