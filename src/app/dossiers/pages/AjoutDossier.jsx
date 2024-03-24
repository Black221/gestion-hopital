import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {useState} from "react";
import {DynamicForm} from "../../share/DynamicForm.jsx";


export const AjoutDossier = () => {

    const [dossier, setDossier] = useState({});
    const getValues = (values) => {

    }

    const formGroups = [
        {
            hasChoice: false,
            label: "ASPECTS SOCIO-DEMOGRAPHIQUES",
            fields: [
                { label: "Initiales (N/P)", name: "initials", element: "input", type: "text", className: "cols-span-3", required: true },
                { label: "Statut matrimonial", name: "maritalStatus", element: "select", type: "", className: "col-span-3", required: false, options: ["Marié(e)", "Célibataire", "Divorcé(e)", "Veuf(ve)"] },
                { label: "Age", name: "age", element: "input", type: "number", className: "col-span-2", required: true },
                { label: "Adresse", name: "address", element: "input", type: "text", className: "col-span-2", required: true },
                { label: "Téléphone", name: "phone", element: "input", type: "tel", className: "col-span-2", required: true },
                { label: "Profession", name: "profession", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Niveau socioéconomique", name: "socioeconomicLevel", element: "select", type: "", className: "col-span-2", required: false, options: ["Bon", "Moyen", "Bas"] }
            ],
            getValues: () => {}
        }
    ];






    return (
        <>
            <Breadcrumb link={[
                "Dossiers", "Ajout Dossier"
            ]} />

            <DynamicForm groups={formGroups} data={[]} getValues={getValues} submit={() => {}} submitLabel="Ajouter" cancel={() => {}} cancelLabel="Annuler" />
        </>
    )
}