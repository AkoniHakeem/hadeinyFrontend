export const getArray = (length, limit) => {
    const array = [];
    for (let i = 1; i <= length ; i++)
    {
        array.push(i)
        if(typeof(limit) == 'number' && i === limit ) {
            break;
        }
    }
    return array;
}