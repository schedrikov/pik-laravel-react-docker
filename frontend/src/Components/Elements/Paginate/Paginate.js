import ReactPaginate from "react-paginate";
import css from './Paginate.module.css';

export default function Paginate({pageCount, onChangePage}) {

    if (pageCount > 1) {
        return (
            <>
                <ReactPaginate
                    className={css.paginate}
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={event => onChangePage(event.selected)}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </>
        )
    }
}