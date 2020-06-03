export type DepartmentsModalsContextType = {
    openModal?: (modalName: string, modalData?: object) => void;
    closeModal?: (modalName: string, modalData?: object) => void;
}
