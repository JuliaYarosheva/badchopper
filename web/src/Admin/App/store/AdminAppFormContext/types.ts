type SubmitFormType = {
    submitForm: () => {};
};

export type AdminAppFormContextType = {
    forms: {
        [name: string]: SubmitFormType
    },
    addFormToGlobalContext: ({}) => void;
    removeFormFromGlobalContext: (name: string) => void;
};
