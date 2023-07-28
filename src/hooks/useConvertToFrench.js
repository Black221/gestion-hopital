



export default  function useConvertToFrench () {

    const englishToFrench = {
        January: 'Janvier',
        February: 'Février',
        March: 'Mars',
        April: 'Avril',
        May: 'Mai',
        June: 'Juin',
        July: 'Juillet',
        August: 'Août',
        September: 'Septembre',
        October: 'Octobre',
        November: 'Novembre',
        December: 'Décembre',
        Sun: 'Dim',
        Mon: 'Lun',
        Tue: 'Mar',
        Wed: 'Mer',
        Thu: 'Jeu',
        Fri: 'Ven',
        Sat: 'Sam',
        Jan: 'Janv',
        Feb: 'Févr',
        Mar: 'Mars',
        Apr: 'Avr',
        Jun: 'Juin',
        Jul: 'Juil',
        Aug: 'Août',
        Sep: 'Sept',
        Oct: 'Oct',
        Nov: 'Nov',
        Dec: 'Déc',
        Monday: 'Lundi',
        Tuesday: 'Mardi',
        Wednesday: 'Mercredi',
        Thursday: 'Jeudi',
        Friday: 'Vendredi',
        Saturday: 'Samedi',
        Sunday: 'Dimanche',
        firstname : "prenom", lastname : "nom", nationality: "nationalite", age : "age", sex: "sexe", address : "adresse", patientId : "id"
    };

    function convertToFrench(text) {
        return englishToFrench[text] || text;
    }

    return [convertToFrench]
}