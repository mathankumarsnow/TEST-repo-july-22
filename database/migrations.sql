-- Database Migrations for TEST Repository
-- Tracks all schema changes and modifications

-- Migration 001: Initial Schema
-- Created: 2024-07-22
-- Description: Create initial database schema
BEGIN;
  -- Users table already created in schema.sql
COMMIT;

-- Migration 002: Add user preferences
-- Created: 2024-07-22
-- Description: Add user preferences table
BEGIN;
  CREATE TABLE user_preferences (
    preference_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL UNIQUE,
    theme VARCHAR(20) DEFAULT 'light',
    notifications_enabled BOOLEAN DEFAULT true,
    language VARCHAR(10) DEFAULT 'en',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
COMMIT;

-- Migration 003: Add product reviews
-- Created: 2024-07-22
-- Description: Create product reviews table
BEGIN;
  CREATE TABLE product_reviews (
    review_id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    helpful_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
  CREATE INDEX idx_product_reviews_product ON product_reviews(product_id);
  CREATE INDEX idx_product_reviews_user ON product_reviews(user_id);
COMMIT;

-- Migration 004: Add inventory tracking
-- Created: 2024-07-22
-- Description: Create inventory tracking table
BEGIN;
  CREATE TABLE inventory_log (
    log_id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL,
    quantity_change INTEGER,
    reason VARCHAR(50),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by INTEGER,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (created_by) REFERENCES users(id)
  );
  CREATE INDEX idx_inventory_product ON inventory_log(product_id);
COMMIT;
