import css from "./Apartment.module.css";

export default function Apartment({data}) {
    return (
        <div className={css.wrapper}>
            <div className={css.image_box}>
                <img className={css.image}
                     src="https://optimizer.p-a.im/optimize?uri=https%3A%2F%2Fstorage.yandexcloud.net%2Fpik-arenda%2Fdocs%2Fext%2Fflats%2F286686%2Fimages%2F110856-d7d8ead1.jpg&amp;extension=webp&amp;width=1000&amp;height=800&quot;"
                     alt=""/>
            </div>
            <div className={css.info}>
                <div>
                    <div className={css.info_attr}>
                        Номер квартиры: <span className={css.info_attr_value}>{data.number}</span>
                    </div>
                    <div className={css.info_attr}>
                        Комнат: <span className={css.info_attr_value}>{data.rooms}</span>
                    </div>
                    <div className={css.info_attr}>
                        Этаж: <span className={css.info_attr_value}>{data.floor}</span>
                    </div>
                    <div className={css.info_attr}>
                        Площадь: <span className={css.info_attr_value}>{data.square} м<sup>3</sup></span>
                    </div>
                </div>
                <div className={css.price}>
                    Цена аренды:
                    <span className={css.price_value}>
                        {Intl.NumberFormat("ru").format(data.rent_price)}
                    </span> руб.
                    <div className={css.price_description}>
                        * Коммунальные платежи включены (без счётчиков).
                    </div>
                </div>
            </div>
        </div>
    )
}