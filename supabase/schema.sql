-- ─────────────────────────────────────────────────────────────
-- Neemzari Couture — Supabase schema (foundation for CMS)
-- Run this in the Supabase SQL Editor, then set the env vars in
-- .env.local to wire the site to live data. Not yet connected.
-- ─────────────────────────────────────────────────────────────

-- ============ Collections ============
create table if not exists collections (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  eyebrow text,
  blurb text,
  image text,
  cta text,
  display_order int default 0,
  active boolean default true,
  created_at timestamptz default now()
);

-- ============ Products / Looks ============
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null,          -- bridal | sherwani | occasion | custom
  collection_id uuid references collections(id) on delete set null,
  image text,
  detail_image text,
  description text,
  colours jsonb,                   -- array of strings
  customizable boolean default false,
  available_for_consultation boolean default true,
  price numeric,                   -- optional; leave null until verified
  active boolean default true,
  created_at timestamptz default now()
);

-- ============ Portfolio / Lookbook ============
create table if not exists portfolio_items (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  category text not null,          -- bridal | groom | reception | party | details
  title text not null,
  image text,
  product_id uuid references products(id) on delete set null,
  display_order int default 0,
  created_at timestamptz default now()
);

-- ============ Consultations (form submissions) ============
create table if not exists consultations (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text,
  event_type text,
  event_date text,
  looking_for text,
  style_preferences text,
  budget_range text,
  message text,
  source text default 'website',
  status text default 'new',       -- new | contacted | completed | archived
  created_at timestamptz default now()
);

-- ============ Testimonials ============
create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  quote text not null,
  author_name text not null,
  author_role text,
  rating int default 5,
  active boolean default true,
  display_order int default 0,
  created_at timestamptz default now()
);

-- ============ Business hours ============
create table if not exists business_hours (
  id uuid primary key default gen_random_uuid(),
  day_label text not null,         -- e.g. "Tuesday — Saturday"
  opens text,                      -- "12:00 PM"
  closes text,                     -- "6:00 PM"
  closed boolean default false,
  display_order int default 0
);

-- ============ Settings (NAP, contact) ============
create table if not exists settings (
  key text primary key,
  value text
);
insert into settings (key, value) values
  ('business_name', 'Neemzari Couture'),
  ('phone', '+1 647-819-3146'),
  ('address', '8887 The Gore Rd, Brampton, ON L6P 2K9, Canada'),
  ('hours_note', 'Hours may change for appointments and special occasions.')
on conflict (key) do nothing;

-- ============ Row Level Security ============
alter table collections enable row level security;
alter table products enable row level security;
alter table portfolio_items enable row level security;
alter table testimonials enable row level security;
alter table business_hours enable row level security;
alter table settings enable row level security;

-- Public read access for catalogue-ish tables.
create policy "Public read collections" on collections for select using (true);
create policy "Public read products" on products for select using (true);
create policy "Public read portfolio" on portfolio_items for select using (true);
create policy "Public read testimonials" on testimonials for select using (true);
create policy "Public read business_hours" on business_hours for select using (true);
create policy "Public read settings" on settings for select using (true);

-- Consultations: allow public insert only (no read).
alter table consultations enable row level security;
create policy "Public insert consultations" on consultations for insert with check (true);
