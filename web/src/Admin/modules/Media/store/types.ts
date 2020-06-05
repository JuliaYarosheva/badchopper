type MediaImageType = {
    _id: string;
    name: string;
    path: string;
    extension: string;
}[]

export type MediaContextType = {
    images: MediaImageType,
    setAllImages: ([]: MediaImageType) => void;
};
