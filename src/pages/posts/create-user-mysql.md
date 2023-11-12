---
layout: '@/templates/BasePost.astro'
title: Create User Mysql
description: Berikut adalah tutorial untuk membuat dan memberi akses pengguna (user) di MySQL menggunakan terminal.
pubDate: 2021-11-13T00:00:00Z
imgSrc: 'https://media.istockphoto.com/id/864592392/id/foto/skrip-tabel-database-untuk-membuat-tabel-skrip-mysql.jpg?s=612x612&w=0&k=20&c=qgfg9-lQUU_y1uw3RGullqqOdRl894vGjL0fu3AIpYI='
imgAlt: 'Create MySql User'
---

Untuk membuat pengguna (user) di MySQL, Anda dapat menggunakan perintah SQL CREATE USER. Berikut adalah cara membuat pengguna baru di MySQL:

## Headings

### 1. Buka Terminal atau Command Prompt:

Pastikan Anda memiliki akses ke server MySQL, dan buka terminal atau command prompt.

### 2. Masuk ke MySQL:

Gunakan perintah berikut untuk masuk ke MySQL dengan menggunakan akun yang memiliki hak administratif (biasanya root):

```python
mysql -u root -p
```

Setelah itu, Anda akan diminta memasukkan kata sandi.

### 3. Buat Pengguna Baru:

Misalkan kita ingin membuat pengguna baru dengan nama "username" dan memberikan akses dari semua host (%):

```python
CREATE USER 'username'@'%' IDENTIFIED BY 'password';
```

Gantilah 'username' dengan nama pengguna yang diinginkan dan 'password' dengan kata sandi yang aman.

Jika Anda hanya ingin memberikan akses dari localhost saja, gunakan 'localhost'

```python
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
```

### 4. Berikan Hak Akses:

Setelah membuat pengguna, Anda perlu memberikan hak akses. Contoh berikan hak akses penuh (semua hak) kepada pengguna untuk semua basis data:

```python
GRANT ALL PRIVILEGES ON *.* TO 'username'@'%' WITH GRANT OPTION;
```

Atau untuk memberikan hak akses hanya pada basis data tertentu:

```python
GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'%' WITH GRANT OPTION;
```

### 5. Perbarui Hak Akses:

Setelah memberikan hak akses, perbarui hak akses agar perubahan berlaku segera:

```python
FLUSH PRIVILEGES;
```

### 6. FLUSH PRIVILEGES;

Setelah selesai, keluar dari MySQL dengan perintah:

```python
EXIT;
```


