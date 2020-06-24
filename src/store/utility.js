const UpdateObject = (oldObject, updatedvalues) => {
    return {
        ...oldObject,
        ...updatedvalues
    }
}