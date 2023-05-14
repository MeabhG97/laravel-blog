# Laravel Inertia Blog

This porject is a Laravel blog with an Inertia React front-end. The example content is computer software development related.

1. [Features](#features)
2. [Requirements](#requirements)
3. [Usage](#usage)
4. [Technologies Used](#technologies-used)
5. [Before Starting](#before-starting)
6. [Authors](#authors)

## Features

A blog website allowing users to post blow posts. The users can later edit or delete their posts and make comments on their own and others posts.
There is user authentication for login and registration.

## Requirements

• PHP 7.3 or higher  
• Node 12.13.0 or higher

## Technologies Used

- Laravel
- Inertia
- React JS
- Tailwind CSS
- MariaDB

## Usage

Setting up your development environment on your local machine:

```bash
git clone git@github.com:MeabhG97/laravel-blog.git
cd laravel--blog
cp .env.example .env
composer install
php artisan key:generate
php artisan cache:clear
php artisan config:clear
php artisan serve
```

## Before starting

Create a database

```bash
mysql
create database laravelblog;
exit;
```

Setup your database credentials in the .env file

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravelblog
DB_USERNAME={USERNAME}
DB_PASSWORD={PASSWORD}
```

Migrate the tables

```bash
php artisan migrate
```

To compile any changes made to the javascript front end

```bash
npm run dev
```

Or to automatically compile changes

```bash
npm run watch
```

## Authors

[Méabh](https://github.com/MeabhG97)  
[Cian](https://github.com/cianashby1337)
