export type StaffDTOType = {
    id?: string;
    name: string;
    position: string;
    imageId: string;
    instagramUrl?: string;
    facebookUrl?: string;
}

export type StaffResponseType = {
    ops: {
        name: string;
        _id: string;
        position: string;
        imageId: string;
        instagramUrl: string;
        facebookUrl: string;
    }[]
}
