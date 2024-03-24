import {Table} from "../../share/Table.jsx";
import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {Pagination} from "../../share/Pagination.jsx";
import {useState} from "react";
import {SearchBar} from "../../share/SearchBar.jsx";


export const Search = () => {
    const DATA = [
        {matricule: '1', nom: 'John Doe', role: 'Medecin', tel: '12345678'},
        {matricule: '2', nom: 'Jane Doe', role: 'Assistant', tel: '12345678'},
        {matricule: '3', nom: 'John Smith', role: 'Medecin', tel: '12345678'},
        {matricule: '4', nom: 'Jane Smith', role: 'Assistant', tel: '12345678'},
        {matricule: '5', nom: 'John Brown', role: 'Medecin', tel: '12345678'},
        {matricule: '6', nom: 'Jane Brown', role: 'Assistant', tel: '12345678'},
    ];
    const COLS = [
        'matricule', 'nom','role', 'tel'
    ];
    const ACTIONS = [
        {icon: 'edit', label: 'Activer/Désactiver', onClick: (row) => console.log('Activer/Désactiver', row)},
        {icon: 'delete', label: 'Archiver', onClick: (row) => console.log('Archiver', row)}
    ];

    const [page, setPage] = useState(0);
    const [renderData, setRenderData] = useState(DATA);

    const getSearch = (search) => {
        if (!search || search === "") {
            setRenderData(DATA);
            return;
        }
        let d = DATA.filter((row) => {
            return row.nom.toLowerCase().includes(search.toLowerCase());
        }).filter((row) => {
            return row.role.toLowerCase().includes(search.toLowerCase());
        });
        setRenderData(d);
    }

    return (
        <>
            <Breadcrumb link={[
                "Dashboard", "Comptes", "Recherche"
            ]} direct={false}/>
            <SearchBar label={"Chercher compte"} getSearch={getSearch}/>
            <Table data={renderData} column={COLS}  action={ACTIONS}/>
            <Pagination page={page} length={5} dataCount={DATA.length}/>
        </>
    )
}