
CREATE TABLE IF NOT EXISTS users (
	user_id SERIAL PRIMARY KEY,
	phone TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    ssn INTEGER NOT NULL UNIQUE,
	password TEXT NOT NULL,
	is_active BOOLEAN DEFAULT false
);

