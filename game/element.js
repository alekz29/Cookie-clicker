
const element = (collection, searchId)=>{
    return collection.find(collection => [collection.id]
        .some(id => id === searchId))
}

export default element