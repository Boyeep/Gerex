# Maba Gugus Checker Demo

Folder ini sengaja dibuat standalone di root dan tidak terhubung dengan project lain di monorepo.

## Struktur

- `frontend`: demo Next.js untuk komponen **Kartu Profil Maba**
- `backend`: API Go sederhana untuk fitur **Gugus Checker**

## Pendekatan Singkat

- Frontend saya pecah menjadi komponen reusable agar data seperti foto, nama, NRP, dan gugus bisa diganti tanpa mengubah layout.
- Layout dibuat responsif dengan kombinasi grid dan flex supaya tetap rapi di mobile maupun desktop.
- Backend saya buat sederhana dengan satu endpoint checker berbasis NRP, lalu saya sertakan rancangan schema relasional agar alurnya mudah dinaikkan ke database sungguhan.

## Menjalankan Frontend

```bash
cd frontend
bun install
bun run dev
```

## Menjalankan Backend

```bash
cd backend
go run .
```

Server backend akan berjalan di `http://localhost:8080`.
