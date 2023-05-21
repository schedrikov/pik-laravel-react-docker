import {useEffect, useState} from "react";
import AxiosClient from "../../../axios-client";
import Apartment from "../Apartment/Apartment";
import css from "./ApartmentsList.module.css";
import Paginate from "../Paginate/Paginate";
import Filters from "../Filters/Filters";
import ApartmentLoader from "../ApartmentLoader/ApartmentLoader";

export default function ApartmentsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [apartments, setApartments] = useState([]);
    const [meta, setMeta] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterRooms, setFilterRooms] = useState(0);

    useEffect(() => {
        setIsLoading(false);
        AxiosClient.get(`apartments?page=${currentPage}&rooms=${filterRooms}`, null)
            .then(({data}) => {
                setIsLoading(true);
                setApartments(data.data);
                setMeta(data.meta);
            })
    }, [currentPage, filterRooms]);

    return (
        <div>
            <Filters onChangeRooms={rooms => {
                setFilterRooms(rooms);
                setCurrentPage(1);
            }} />
            <h1 className={css.title}>Квартиры</h1>
            <div className={css.list}>
            { isLoading ?
                <div>
                    {apartments.map((apartment) =>
                        <Apartment key={apartment.id} data={apartment}/>
                    )}
                </div>
                :
                <div>
                    {[... new Array(5)].map(() =>
                        <ApartmentLoader />
                    )}
                </div>
            }
            </div>
            <Paginate pageCount={meta.last_page} onChangePage={number => setCurrentPage(number + 1)}/>
        </div>
    )
}