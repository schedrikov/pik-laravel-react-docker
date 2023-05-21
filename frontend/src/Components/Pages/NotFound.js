export default function NotFound() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"><span className="text-danger">Ой!</span> Страница не найдена</p>
                <p className="lead">
                    Страница, которую вы ищете, не существует.
                </p>
                <a href="/" className="btn btn-primary">На главную</a>
            </div>
        </div>
    )
}