import CONST from "./const";
import { StaffDTOType } from "../../types/staff";
import {ObjectID} from 'bson';
import {documentIdType} from '../../types/general';

export const addStaffModel = (staffDTO: StaffDTOType, client) => {
    console.log(staffDTO);
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .insertOne(staffDTO)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const getAllStuffModel = (client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .find()
            .toArray()
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const getAllManagerStuffModel = (client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .find({position: 2})
            .toArray()
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const getAllBarberStuffModel = (client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .find({position: 1})
            .toArray()
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const updateStuffModel = (updateStaffDTO: StaffDTOType, client) => {
    const {
        id,
        name,
        position,
        imageId,
        instagramUrl,
        facebookUrl
    } = updateStaffDTO;

    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .findOneAndUpdate(
                {
                    _id: new ObjectID(id)
                },
                {
                    $set: {
                        name,
                        position,
                        imageId,
                        instagramUrl,
                        facebookUrl
                    }
                },
                {returnOriginal: false}
            )
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export const deleteStuffModel = (deleteAssistanceDTO: documentIdType, client) => {
    return new Promise((resolve, reject) => {
        client
            .collection(CONST.BASE_COLLECTION)
            .findOneAndDelete({_id: new ObjectID(deleteAssistanceDTO.id)})
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};
