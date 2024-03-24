import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {DynamicForm} from "../../share/DynamicForm.jsx";


export const CompleterDossier = () => {

    const [dossier, setDossier] = useState({});
    const {id} = useParams();

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
        },
        {
            label: "ANTECEDENTS PERSONNELS",
            fields: [
                { label: "HTA-Gravidique", name: "htaGravidique", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Ménarche", name: "menarche", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Gestité", name: "gestite", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Parité", name: "parity", element: "input", type: "number", className: "col-span-2", required: false },
                { label: "Grossesses gémellaires", name: "twinPregnancies", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Tocolyse prolongée (4 semaines)", name: "prolongedTocolysis", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "ATCD de décompensation durant la dernière grossesse", name: "decompensationLastPregnancy", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Nombre de décompensation", name: "decompensationNumber", element: "input", type: "number", className: "col-span-2", required: false },
                { label: "Type d’insuffisance cardiaque", name: "heartFailureType", element: "select", type: "", className: "col-span-2", required: false, options: ["IVG", "IVD", "ICG"] },
                { label: "Hospitalisations antérieures", name: "priorHospitalizations", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Nombre d’hospitalisations antérieur", name: "priorHospitalizationsNumber", element: "input", type: "number", className: "col-span-2", required: false },
            ],
            getValues: () => {}
        },
        {
            label: "SIGNES CLINIQUES",
            fields: [
                { label: "Dyspnée d’effort", name: "dyspneeEffort", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Type de dyspnée (NYHA)", name: "nyhaDyspneaType", element: "select", type: "", className: "col-span-2", required: false, options: ["Type I", "Type II", "Type III", "Type IV"] },
                { label: "Œdème aigu du poumon", name: "oap", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Toux", name: "cough", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Palpitations", name: "palpitations", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "OMI", name: "omi", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Constantes", name: "constants", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Souffle cardiaque", name: "heartMurmur", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Type de souffle", name: "murmurType", element: "select", type: "", className: "col-span-2", required: false, options: ["IM", "RM", "IA", "RA", "IP", "RP", "IT", "RP"] },
                { label: "TSVJ", name: "tsvj", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Hépatomégalie", name: "hepatomegaly", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] }
            ],
            getValues: () => {}
        },
        {
            label: "SIGNES PARACLINIQUES",
            fields: [
                { label: "Biologie", name: "biologie", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Hémoglobinémie", name: "hemoglobinemia", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "GB", name: "gb", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Plaquettes", name: "platelets", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "VGM", name: "vgm", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "CCMH", name: "ccmh", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "TCMH", name: "tcmh", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "CRP", name: "crp", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Urée", name: "uree", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Créatininémie", name: "creatininemia", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "NT pro BNP", name: "ntProBNP", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Prolactine", name: "prolactin", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Télécoeur", name: "telecoeur", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Index cardiothoracique (en%)", name: "cardiothoracicIndex", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Autres signes", name: "otherSigns", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "ECG", name: "ecg", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Rythme cardiaque", name: "heartRate", element: "select", type: "", className: "col-span-2", required: false, options: ["Sinusal", "Tachycardie", "Troubles conductifs", "HAG", "HVG", "HAD", "HVD", "FA", "fa", "Autres"] },
                { label: "ETT", name: "ett", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Épanchement péricardique", name: "pericardialEffusion", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Fuite valvulaire", name: "valveRegurgitation", element: "select", type: "", className: "col-span-2", required: false, options: ["Absente", "Aortique", "Mitrale", "Tricuspidienne", "Pulmonaire"] },
                { label: "Sténose valvulaire", name: "valveStenosis", element: "select", type: "", className: "col-span-2", required: false, options: ["Absente", "Aortique", "Mitrale", "Tricuspidienne", "Pulmonaire"] },
            ],
            getValues: () => {}
        },
        {
            label: "TRAITEMENT",
            fields: [
                { label: "Diurétique", name: "diuretic", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "IEC", name: "iec", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Tonicardiaque", name: "tonicardiaque", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Bromocriptine", name: "bromocriptine", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Anticoagulants", name: "anticoagulants", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Betabloquants", name: "betablockers", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Contraception", name: "contraception", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Autres", name: "others", element: "input", type: "text", className: "col-span-2", required: false },
            ],
            getValues: () => {}
        },
        {
            label: "EVOLUTION ET SUIVI",
            fields: [
                { label: "Modalité évolutive en hospitalisation", name: "hospitalizationEvolution", element: "select", type: "", className: "col-span-2", required: false, options: ["Favorable", "Défavorable"] },
                { label: "Aspects défavorables", name: "adverseAspects", element: "select", type: "", className: "col-span-2", required: false, options: ["Complications", "Décès"] },
                { label: "Si complications, préciser le type", name: "complicationType", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Si décès, préciser le délai (en jours)", name: "deathDelay", element: "input", type: "number",className: "col-span-2", required: false },
                { label: "Evolution après la sortie", name: "postDischargeEvolution", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Evolution du bébé", name: "babyEvolution", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Mort nés", name: "stillbirth", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Faible poids de naissance", name: "lowBirthWeight", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Prématurité", name: "prematurity", element: "select", type: "", className: "col-span-2", required: false, options: ["OUI", "NON"] },
                { label: "Poids du bébé à la naissance", name: "birthWeight", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Poids du bébé à 3 mois", name: "weight3Months", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Poids du bébé à 6 mois", name: "weight6Months", element: "input", type: "text", className: "col-span-2", required: false },
                { label: "Poids du bébé à 12 mois", name: "weight12Months", element: "input", type: "text", className: "col-span-2", required: false }
            ],
            getValues: () => {}
        }
    ];

    const getValues = () => {
        console.log("getValues")
    }

    return (
        <>
            <Breadcrumb link={[
                "Dossiers", "Completer Dossier", id
            ]} />

            <DynamicForm groups={formGroups} data={[]} getValues={getValues} submit={() => {}} submitLabel="Ajouter" cancel={() => {}} cancelLabel="Annuler" />

        </>
    )
}