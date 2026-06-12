# Maba Gugus Checker Demo

## Struktur

- `frontend`: demo Next.js untuk komponen **Kartu Profil Maba**
- `backend`: API Go simpel untuk fitur **Gugus Checker**

## Pendekatan Singkat

- Frontend dipecah mjadi components yang reusable supaya data kayak foto, nama, NRP, dan gugus bisa diubah tanpa ubah layout.
- Layout dibuat responsif pakai grid & flex agar rapi di mobile & desktop.
- Backend dibuat simpel hanya satu endpoint checker berbasis NRP, terus saya ada schema relasional supaya alurnya mudah dimirate ke database.

## Cara run Frontend

```bash
cd frontend
npm install
npm run dev
```

## Cara run Backend

```bash
cd backend
go run .
```

Server backend jalan di `http://localhost:8080`.
