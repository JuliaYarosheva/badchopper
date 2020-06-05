import {addDepartment} from '../../api';

export const addDepartmentHook = (values, onAddDepartmentSuccess) => {
    const {
        city,
        street,
        number,
        latitude,
        longitude,
        ...rest
    } = values;

    const requestData = {
        ...rest,
        address: {
            street: values.street,
            city: values.city,
            number: values.number
        },
        location: {
            latitude: values.latitude,
            longitude: values.longitude
        }
    };

    addDepartment(requestData)
        .then(() => onAddDepartmentSuccess())
};
