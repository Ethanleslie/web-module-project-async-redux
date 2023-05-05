export const GET_RANDOM_BREED = "GET_RANDOM_BREED";


export const getRandomBreed = (dog) => {
    return({type: GET_RANDOM_BREED, payload:dog})
}

