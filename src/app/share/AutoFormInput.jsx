import useAxiosFunction from "../../hooks/useAxiosFunction.js";
import useLoading from "../../hooks/useLoading.jsx";
import useNotification from "../../hooks/useNotification.jsx";
import {Heading} from "./Heading.jsx";
import axios from "../../api/Axio.js";
import {useEffect, useState} from "react";
import DebouncedInput from "./DebouncedInput.jsx";
//import {InputForm} from "../auth/components/InputForm.jsx";
//import {useReducer} from "react";

//const reducer = (state, action) => {
//    return {data: [...state.data, action.payload], count: state.count + 1}
//}

const AutoFormInput = ({title = "", method = "POST", url = "", token = ""}) => {

    const [response, error, loading, axiosFetch] = useAxiosFunction();
    const [a] = useNotification();
    const [Loader] = useLoading();

    //const [state, dispatch] = useReducer(reducer, {count: 0, data : []}, null);
    const [numInputs, setNumInputs] = useState(1);
    const [inputValues, setInputValues] = useState([]);


    const handleInputChange = (value, indexInput) => {

        if (value !== "") {
            setInputValues((prevValues) => ([
                ...prevValues.filter(({index, value}) => (value !== "" && index !== indexInput)), // Remove empty values
                {indexInput, value}
            ]));
            console.log(inputValues)
            if (numInputs < 7 && numInputs < indexInput + 2) {
                setNumInputs(numInputs + 1);
            }
        }
    };

    useEffect(() => {
        console.log(inputValues)
    }, [inputValues])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {}

        await axiosFetch({
            axiosInstance: axios,
            method,
            url,
            requestConfig: [
                JSON.stringify(data),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '*/*',
                        'withCredentials': 'true',
                        'Authorization' : 'Bearer '+ token
                    }
                }
            ]
        })
    }



    return (<>

        <Loader isLoading={loading} />

        <Heading title={title} />
        <form onSubmit={handleSubmit} className={"px-10"}>

            <div>
                {[...Array(numInputs)].map((i, index) => <DebouncedInput key={index} type={"text"} getValue={(value) => handleInputChange (value, index)} />)}
                
            </div>


            <button>Submit</button>
        </form>
    </>)
}

export default AutoFormInput;