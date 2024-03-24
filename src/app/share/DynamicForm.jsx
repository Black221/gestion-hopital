import {useState} from "react";
import {Textarea} from "./Textarea.jsx";
import {Radio} from "./Radio.jsx";
import {Select} from "./Select.jsx";
import {Checkbox} from "./Checkbox.jsx";
import {Input} from "./Input.jsx";

export const DynamicForm = ({ groups, data, getValues, submit, submitLabel, cancelLabel, cancel }) => {


    return (
        <>
            {groups.map((group, index) => (
                <div key={index}>
                    <Group {...group} getValues={getValues} />
                </div>
            ))}

            <div className="flex justify-end">
                <button type="button" onClick={submit} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    {submitLabel}
                </button>
                <button type="button" onClick={cancel} className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    {cancelLabel}
                </button>
            </div>
        </>
    )
}

const Switch = ({ field, data, getValue }) => {

    const [value, setValue] = useState(data);

    return (
        <>
            {field.element === "input" && <Input {...field} value={value} setValue={setValue} />}
            {field.element === "select" && <Select {...field} value={value} setValue={setValue} />}
            {field.element === "textarea" && <Textarea {...field} value={value} setValue={setValue} />}
        </>
    )
}

const Group = ({ hasChoice, label, fields, getValues, getActivate }) => {

    const [activate, setActivate] = useState(!hasChoice);

    return (
        <>
            <div>
                <label className={"block text-xl font-medium text-gray-900 my-6"}>{label}</label>
                {hasChoice && <div className={"flex items-center space-x-4 m-4"}>
                    <div className="flex items-center ">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" checked={activate} onChange={() => setActivate(true)}
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "/>
                        <label htmlFor="default-radio-1"
                               className="ms-2 text-sm font-medium text-gray-900 ">Default
                            radio</label>
                    </div>
                    <div className="flex items-center">
                        <input id="default-radio-2" type="radio" value="" name="default-radio" checked={!activate} onChange={() => setActivate(false)}
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
                        <label htmlFor="default-radio-2"
                               className="ms-2 text-sm font-medium text-gray-900 ">Checked
                            state</label>
                    </div>
                </div>}
            </div>
            <div className=" grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                {activate && fields.map((field, index) => {
                    return (
                        <Switch key={index} field={field} data={getValues(field.name)} getValue={getValues}/>
                    )
                })}
            </div>
        </>
    )
}