type AsyncReturnType<T extends (...args: any) => any> =
    T extends (...args: any) => Promise<infer U> ? U :
        T extends (...args: any) => infer U ? U :
            any

type uploadMedia = AsyncReturnType<() => Promise<any>>

export type AdminAppContextType = {
    showOverlayCloak?: boolean;
    handleOverlayClose?: () => void;
    setHandleOverlayClose?: any;
    handleShowOverlayCloak: (show: boolean) => void;
    addUploaderToGlobalContext: (uploader: object) => void;
    removeUploaderFromGlobalContext: (uploader: string) => void;
    notifications: {
        id: string;
        type: string;
        duration: number;
        message: string;
    }[];
    upLoaders: {
        [name: string]: {
            upload: uploadMedia
        }
    };
};
