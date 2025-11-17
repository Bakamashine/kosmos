При скачивании, не забудьте установить зависимости:

```bash
composer install
```

Затем установите js зависимости командой


```bash
npm install --legacy-peer-deps
```

После этого следует скопировать .env.example в .env

```bash
cp .env.example .env
```

Сгенерируйте ключ

```bash
php artisan key:generate
```

Позже, сделайте ссылку на хранилище
```bash
php artisan storage:link
```

После этого можно сделать миграцию (желательно с сидером)

```bash
php artisan migrate 
```
или

```bash
php artisan migrate:fresh --seed # сидер для dev
```

Для запуска миграций (production) используйте:

```bash
php artisan db:seed --class="Database\Seeders\ProductionSeeder" 
```

Для запуска используйте эти команды:

```bash
php artisan serve # Это запустит обычный отладочный сервер Laravel
```

а так же введите:

```bash
yarn dev # или же npm run dev
```
Это включит сборку JS пакетов. (использовал Inertia+React)
