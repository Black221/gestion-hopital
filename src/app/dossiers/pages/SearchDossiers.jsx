import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {SearchBar} from "../../share/SearchBar.jsx";
import {Table} from "../../share/Table.jsx";
import {Pagination} from "../../share/Pagination.jsx";
import {useState} from "react";

export const SearchDossiers = () => {

    const DATA = [
        {id: '1', nom: 'John Doe', prenom: 'Jane', cni: '12345678', dateNaissance: '12/12/2020', sexe: 'M'},
        {id: '2', nom: 'Jane Doe', prenom: 'Jane', cni: '12345678', dateNaissance: '12/12/2020', sexe: 'F'},
        {id: '3', nom: 'John Smith', prenom: 'Jane', cni: '12345678', dateNaissance: '12/12/2020', sexe: 'M'},
        {id: '4', nom: 'Jane Smith', prenom: 'Jane', cni: '12345678', dateNaissance: '12/12/2020', sexe: 'F'},
        {id: '5', nom: 'John Brown', prenom: 'Jane', cni: '12345678', dateNaissance: '12/12/2020', sexe: 'M'},
        {id: '6', nom: 'Jane Brown', prenom: 'Jane', cni: '12345678', dateNaissance: '12/12/2020', sexe: 'F'},
    ];
    const COLS = [
        'id', 'nom','prenom', 'cni', 'dateNaissance', 'sexe'
    ];
    const ACTIONS = [
        {icon: 'edit', label: 'Completer', onClick: (row) => console.log('Modifier', row)},
        {icon: 'delete', label: 'Consulter', onClick: (row) => console.log('Archiver', row)},
        {icon: 'delete', label: 'Ordonnance', onClick: (row) => console.log('Archiver', row)}
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
                "Dashboard", "Dossiers", "Recherche"
            ]} direct={false}/>
            <SearchBar label={"Chercher dossier"} getSearch={getSearch}/>
            <Table data={renderData} column={COLS}  action={ACTIONS}/>
            <Pagination page={page} length={5} dataCount={DATA.length}/>
        </>
    )
}