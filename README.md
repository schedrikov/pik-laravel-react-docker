## Запуск бэкенда

собрать и поднять сервисы:
### `docker-compose up -d`


зайти в консоль контейнера project_app:
### `docker exec -it project_app bash`

установить пакеты
### `composer install`

запустить миграции и добавить тестовые данные
### `php artisan migrate --seed`

открыть проект в браузере
### `http://127.0.0.1:8080`




## Запуск фронтенда

перейти в папку
### `cd frontend`

установить пакеты
### `npm install`

запустить
### `npm start`
