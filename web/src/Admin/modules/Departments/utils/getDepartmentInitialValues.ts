export default (departmentData) => {
    const { address, description, location, name, phone, image } = departmentData;

    return {
        city: address.city,
        number: address.number,
        street: address.street,
        description,
        latitude: location.latitude,
        longitude: location.longitude,
        name,
        phone,
        imageId: image._id
    }
}
