import {Heading} from "../Share/Heading.jsx";


export const Cover = ({date, data, onChangeDate}) => {

    return (<>

        <div className={"h-80 w-full bg--400 flex flex-col space-y-2 items-center justify-center bg-gray-100"}>

            <h3 className={"font-semibold text-xl text-"}>{}</h3>

            <Heading title={"Some information"} text={"some text to describe something for you!!!"} width={"md"} subtitle={date.format('MMMM Do YYYY')} position={"center"} />

            <button onClick={() => onChangeDate(true)} className={"py-2 px-3 bg-green-500 rounded-xl text-white font-semibold"}>Voir données anterieur</button>

            <div className={"text-end w-full px-8 "}>
                some information
            </div>
        </div>
    </>)
}