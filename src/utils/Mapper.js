export default function Mapper(array, subComponent){
    return(
        array.map(data => (<subComponent {...data} />))
    )

}