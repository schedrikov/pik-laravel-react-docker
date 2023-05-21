import {FormSelect} from "react-bootstrap";
import css from "./Select.module.css";

export default function Select({title, values, onChangeSelect}) {
    return (
        <div className={css.wrapper}>
            <span>{title}</span>
            <FormSelect onChange={event => onChangeSelect(event.target.value)} className={css.select}>
                <option value='0'></option>
                {values.map(value =>
                    <option key={value} value={value}>{value}</option>
                )}
            </FormSelect>
        </div>
    )
}