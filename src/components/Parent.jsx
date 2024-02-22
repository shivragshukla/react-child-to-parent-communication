import Child from "./Child";

export default function Parent() {

    function getData(params) {
        console.log(params);
    }

    return (
        <>
            <Child getData={getData} />
            Hello Parent
        </>
    )
}
