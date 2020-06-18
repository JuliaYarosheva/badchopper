import {StaffItemDTOType, StaffResponseType, StaffDTOType} from '../../types/staff';
import {
    addStaffModel,
    getAllStuffModel,
    updateStuffModel,
    deleteStuffModel,
    getAllManagerStuffModel,
    getAllBarberStuffModel,
} from '../../models/staff/staff';
import {deleteDocumentResponseStatusType, documentIdType, updateDocumentResponseStatusType} from '../../types/general';
import {getImageService} from '../media/media';
import {normalizeImage} from '../../utils/stuff/normalizeImage';

export const addStaffService = (assistanceDTO: StaffItemDTOType, client) => {
    if (assistanceDTO.name.length !== 0) {
        return addStaffModel(assistanceDTO, client)
            .then((data: StaffResponseType) => {
                return getImageService(data.ops[0].imageId, client)
                    .then(image => {
                        return {
                            image: normalizeImage(image),
                            ...data.ops[0]
                        }
                    });
            });


    }
};

export const getAllStuffService = (client) => {
    return getAllStuffModel(client)
};

export const getAllManagerStuffService = async (client) => {
    const manager = await getAllManagerStuffModel(client)
        .then((data: StaffDTOType) => data);

    return Promise.all(manager.map(async (item) => {
        const image = await getImageService(item.imageId, client).then(image => image);

        return {
            image: normalizeImage(image),
            ...item
        }
    }));
};

export const getAllBarberStuffService = async (client) => {
    const barberStuff = await getAllBarberStuffModel(client)
        .then((data: StaffDTOType) => data);

    return Promise.all(barberStuff.map(async (item) => {
        const image = await getImageService(item.imageId, client).then(image => image);

        return {
            image: normalizeImage(image),
            ...item
        }
    }));
};

export const updateStuffService = (updateStuffDTO, client) => {
    if (updateStuffDTO.id.length !== 0) {
        return updateStuffModel(updateStuffDTO, client)
            .then((status: updateDocumentResponseStatusType) => {
                if (status.ok === 1) {
                    return getImageService(status.value.imageId, client)
                        .then(image => {
                            return {
                                image: normalizeImage(image),
                                ...status.value
                            }
                        });
                }

                throw Error('Stuff was not updated')
            })
            .catch(error => {
                throw Error(error)
            });
    } else {
        throw new Error('Stuff id is required')
    }
};

export const deleteStaffService = (deleteAssistanceDTO: documentIdType, client) => {
    if (deleteAssistanceDTO.id.length !== 0) {
        return deleteStuffModel(deleteAssistanceDTO, client)
            .then((status: deleteDocumentResponseStatusType) => {
                if (status.deletedCount !== 0) {
                    return 'Stuff was deleted successfully'
                }

                throw Error('Stuff was not deleted')
            })
            .catch(error => {
                throw Error(error)
            });
    } else {
        throw new Error('Stuff id is required')
    }
};
