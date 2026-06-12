# Gugus Checker API

Backend ini dibuat sesederhana mungkin dengan Go standard library agar fokusnya tetap ke alur fitur.

## Endpoint

### `GET /api/gugus-checker?nrp=5025241001`

Response sukses:

```json
{
  "nrp": "5025241001",
  "name": "Raka Pradana",
  "gugus": "Gugus Arunika",
  "region": "Surabaya Barat"
}
```

### `POST /api/gugus-checker`

Request body:

```json
{
  "nrp": "5025241001"
}
```

## Alur API

1. Client mengirim NRP lewat query parameter atau JSON body.
2. Handler memvalidasi bahwa NRP tidak kosong.
3. Sistem mencari data maba berdasarkan NRP.
4. Jika data ditemukan, API mengembalikan `nrp`, `name`, `gugus`, dan `region`.
5. Jika data tidak ditemukan, API mengembalikan `404`.

## Rancangan Tabel

- `regions`: master region maba
- `gugus`: daftar gugus yang terhubung ke satu region
- `maba_profiles`: data maba yang menyimpan NRP, nama, foto, dan relasi ke gugus

Detail SQL lengkap ada di `schema.sql`.
