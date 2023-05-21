import {Form, Button} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import AxiosClient from "../../axios-client";

export default function CreateApartment() {

    const numberRef = useRef();
    const floorRef = useRef();
    const squareRef = useRef();
    const roomsRef = useRef();
    const buildingRef = useRef();
    const rentPriceRef = useRef();

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [buildings, setBuildings] = useState([])

    const [isLoading, setInsLoading] = useState(false);

    useEffect(() => {
        AxiosClient.get('buildings', null)
            .then(({data}) => {
                setBuildings(data.data);
                setInsLoading(true);
            })
    }, [])

    function sendForm(event) {
        event.preventDefault()

        setErrorMessage('');
        setSuccessMessage('');

        const payload = {
            number: numberRef.current.value,
            floor: floorRef.current.value,
            square: squareRef.current.value,
            rooms: roomsRef.current.value,
            rent_price: rentPriceRef.current.value,
            building_id: buildingRef.current.value,
        };

        let formError = false;
        Object.values(payload).forEach((element) => {
            if (element.length === 0) {
                formError = true;
            }
        })

        if (formError) {
            setErrorMessage('Все поля должны быть заполнены');
        } else {
            AxiosClient.post('apartments', payload)
                .then(({data}) => {
                    if (data.errors) {
                        setErrorMessage(data.message);
                    } else if (data.number) {
                        numberRef.current.value = null;
                        floorRef.current.value = null;
                        squareRef.current.value = null;
                        roomsRef.current.value = null;
                        buildingRef.current.value = null;
                        rentPriceRef.current.value = null;

                        setSuccessMessage('Квартира добавлена')
                    } else {
                        setErrorMessage('Неизвестная ошибка')
                    }
                })
                .catch(err => {
                    const response = err.response
                    if (response && response.status === 422) {
                        setErrorMessage(response.data.message);
                    }
                })
        }
    }

    return (
        <div className="col-md-5">
            { (errorMessage)?
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div> : null
            }
            { (successMessage)?
                <div className="alert alert-success" role="alert">
                    {successMessage}
                </div> : null
            }
            <Form onSubmit={sendForm}>
                <Form.Group className="mb-3">
                    <Form.Label>Корпус</Form.Label>
                    <Form.Select aria-label="Default select example" ref={buildingRef}>
                        <option value="">Выберите корпус</option>
                        {buildings.map(building => {
                            return <option key={building.id} value={building.id}>{building.number}</option>
                        }) }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Номер</Form.Label>
                    <Form.Control ref={numberRef} type="text" placeholder="Номер" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Этаж</Form.Label>
                    <Form.Control ref={floorRef} type="text" placeholder="Этаж" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Площадь</Form.Label>
                    <Form.Control ref={squareRef} type="text" placeholder="Площадь" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Комнат</Form.Label>
                    <Form.Control ref={roomsRef} type="text" placeholder="Комнат" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Цена аренды</Form.Label>
                    <Form.Control ref={rentPriceRef} type="text" placeholder="Цена аренды" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Создать
                </Button>
            </Form>
        </div>
    )
}