CREATE TABLE regions (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE gugus (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  region_id BIGINT NOT NULL REFERENCES regions(id) ON DELETE RESTRICT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE maba_profiles (
  id BIGSERIAL PRIMARY KEY,
  nrp VARCHAR(20) NOT NULL UNIQUE,
  name VARCHAR(120) NOT NULL,
  photo_url TEXT,
  gugus_id BIGINT NOT NULL REFERENCES gugus(id) ON DELETE RESTRICT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_maba_profiles_nrp ON maba_profiles(nrp);

-- Query utama untuk Gugus Checker
-- SELECT
--   m.nrp,
--   m.name,
--   g.name AS gugus,
--   r.name AS region
-- FROM maba_profiles m
-- JOIN gugus g ON g.id = m.gugus_id
-- JOIN regions r ON r.id = g.region_id
-- WHERE m.nrp = $1;
