import moment from "moment";
import {Calendar} from "../Share/Calendar.jsx";
import {SearchBar} from "../Share/SearchBar.jsx";
import {MedecinInfo} from "../Share/MedecinInfo.jsx";
import {useEffect, useState} from "react";
import {Textarea} from "../Share/Textarea.jsx";


export const Agenda = () => {

    const DATE = [
        {
            date: "25/5/2023",
            data: [
                {
                    id: "1",
                    name: "Docteur Bamba BAR",
                    extra: "disponible",
                    adresse: "Mboro",
                    telephone: "77 777 77 77",
                    profession: "profession..."

                },{
                    id: "1",
                    name: "Docteur Bouna Ndiaye",
                    extra: "disponible",
                    adresse: "Mboro",
                    telephone: "77 777 77 77",
                    profession: "profession..."

                },{
                    id: "1",
                    name: "Docteur Papa Ndour",
                    extra: "disponible",
                    adresse: "Mboro",
                    telephone: "77 777 77 77",
                    profession: "profession..."

                },
            ],
        },{
            date: "26/5/2023",
            data: [
                {
                    id: "1",
                    name: "Docteur Amadou Diagne",
                    extra: "disponible",
                    adresse: "Mboro",
                    telephone: "77 777 77 77",
                    profession: "profession..."

                },{
                    id: "1",
                    name: "Docteur Moussa Sall",
                    extra: "disponible",
                    adresse: "Mboro",
                    telephone: "77 777 77 77",
                    profession: "profession..."

                },{
                    id: "1",
                    name: "Docteur Mouhamed Diop",
                    extra: "disponible",
                    adresse: "Mboro",
                    telephone: "77 777 77 77",
                    profession: "profession..."

                },
            ],
        }
    ];


    const today = moment()
    const [currentDate, setCurrentDate] = useState(today);
    const [onChangeDate, setOnChangeDate] = useState(false);

    const [selectedMedecin, setSelectedMedecin] = useState(null);

    const [medecin, setMedecin] = useState(DATE.filter(({date}) => date === today.format("D/M/YYYY"))[0]);




    function setDate (date) {
        setCurrentDate(moment(date, "D/M/YYYY"))
    }

    function getMedecin (id) {
        setSelectedMedecin(id)
        setOnChangeDate(true)
    }

    useEffect(() => {
        setMedecin(DATE.filter(({date}) => date === currentDate.format("D/M/YYYY"))[0])
    }, [currentDate])


    return(<>

        <div className={"h-[calc(100vh-5rem)] overflow-y-auto "}>
            <div className={"mx-auto w-fit"}>
                <Calendar getDate={setDate} dateToColor={null}/>
            </div>

            <div className={"bg-rd-200 w-full md:px-8 px-2"}>
                <h3 className={"font-semibold"}>Médecins disponibles :</h3>
                <SearchBar label={""} getSearch={() => {}} />
            </div>

            <div className={"md:px-6 px-2"}>
                {medecin && medecin.data.map((m, index) => (
                    <MedecinInfo key={index} data={m} getSelectedMedecin={getMedecin} />
                ))}
            </div>

        </div>

        {onChangeDate && <div className={"absolute top-0 bottom-0 left-0 right-0 bg-gray-500 bg-opacity-20 flex justify-center pt-20"}>

            <div className={"rounded-xl bg-white p-8 h-fit w-fit mt-20"}>

                <h2 className={"font-bold mb-2"}>Laissez un message</h2>

                <Textarea className={"md:w-96 w-72"} label={"Message"} row={3} />

                <button className={"px-3 py-1 bg-green-400 rounded text-white font-bold mt-2"} onClick={() => setOnChangeDate(false)}>Valider</button>
            </div>

        </div>}
    </>)
}