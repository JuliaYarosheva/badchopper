export type StaffDTOType = {
    id?: string;
    name: string;
    surname: string;
    patronymic: string;
    position: string;
    imageId: string;
    instagramUrl?: string;
    facebookUrl?: string;
}

export type StaffResponseType = {
    ops: StaffDTOType[]
}
