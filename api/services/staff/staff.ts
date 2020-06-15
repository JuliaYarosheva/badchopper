import {StaffDTOType} from '../../types/staff';
import {
    addStaffModel,
    getAllStuffModel,
    updateStuffModel,
    deleteStuffModel
} from '../../models/staff/staff';
import {deleteDocumentResponseStatusType, documentIdType, updateDocumentResponseStatusType} from '../../types/general';

export const addStaffService = (assistanceDTO: StaffDTOType, client) => {
    if (assistanceDTO.name.length !== 0) {
        return addStaffModel(assistanceDTO, client)
    }
};

export const getAllStuffService = (client) => {
    return getAllStuffModel(client)
};

export const updateStuffService = (updateAssistanceDTO, client) => {
    if (updateAssistanceDTO.id.length !== 0) {
        return updateStuffModel(updateAssistanceDTO, client)
            .then((status: updateDocumentResponseStatusType) => {
                if (status.ok === 1) {
                    return status.value
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
