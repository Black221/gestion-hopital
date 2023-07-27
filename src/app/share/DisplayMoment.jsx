import moment from 'moment';

const DisplayMoment = ({ date }) => {
    const today = moment().startOf('day');
    const givenDate = moment(date).startOf('day');
    const diffInDays = today.diff(givenDate, 'days');

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
        Monday: 'Lundi',
        Tuesday: 'Mardi',
        Wednesday: 'Mercredi',
        Thursday: 'Jeudi',
        Friday: 'Vendredi',
        Saturday: 'Samedi',
        Sunday: 'Dimanche',
    };

    function convertToFrench(text) {
        return englishToFrench[text] || text;
    }

    if (diffInDays === 0) {
        return <span>Aujourd'hui</span>;
    }

    if (diffInDays === 2) {
        return <span>Il y'a deux jours</span>;
    }

    if (diffInDays === 3) {
        return <span>Il y'a trois jours</span>;
    }

    if (diffInDays === 1) {
        return <span>Hier</span>;
    }

    if (diffInDays === -1) {
        return <span>Demain</span>;
    }

    if (diffInDays >= 2 && diffInDays <= 6) {
        const dayOfWeek = convertToFrench(moment.weekdays(givenDate.day()));
        return <span>{`${dayOfWeek} dernier`}</span>;
    }

    if (diffInDays >= 7 && diffInDays <= 13) {
        return <span>Il y'a deux semaines</span>;
    }

    if (diffInDays >= 14 && diffInDays <= 20) {
        return <span>Il y'a trois semaines</span>;
    }

    if (givenDate.isSame(today, 'month')) {
        const month = convertToFrench(givenDate.format('MMMM'));
        const day = convertToFrench(givenDate.format("dddd"))
        return <span>{`${day} ${givenDate.format('D')} ${month}`}</span>;
    }

    if (givenDate.isSame(today.clone().subtract(1, 'month'), 'month')) {
        return <span>Il y'a un mois</span>;
    }

    if (givenDate.isSame(today.clone().subtract(2, 'month'), 'month')) {
        return <span>il y'a deux mois</span>;
    }

    if (givenDate.isSame(today.clone().subtract(3, 'month'), 'month')) {
        return <span>il y'a trois mois</span>;
    }

    // For older dates, display the full date
    const month = convertToFrench(givenDate.format('MMMM'));
    return <span>{`${month} ${givenDate.format('D YYYY')}`}</span>;
};

export default DisplayMoment;