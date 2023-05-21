import Select from "./Select/Select";
import css from "./Filters.module.css";

export default function Filters({onChangeRooms}) {
    return (
        <div className={css.wrapper}>
            <Select title='Комнат' values={[1, 2, 3, 4]} onChangeSelect={onChangeRooms} />
        </div>
    )
}