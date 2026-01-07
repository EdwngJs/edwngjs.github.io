/*
  # Portfolio Database Schema

  ## Overview
  Creates the database structure for a data analyst/data scientist portfolio website.

  ## New Tables

  ### `projects`
  Stores portfolio projects with details and media
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Project title
  - `short_description` (text) - Brief description for listing
  - `full_description` (text) - Detailed project description
  - `thumbnail_url` (text) - URL to project thumbnail image
  - `technologies` (text[]) - Array of technologies used
  - `key_achievements` (text[]) - Array of key achievement / findings.
  - `methodology` (text) - markdown content (text and images)
  - `category` (text) - Project category (e.g., 'Data Analysis', 'Machine Learning')
  - `demo_url` (text, nullable) - Link to live demo
  - `github_url` (text, nullable) - Link to GitHub repository
  - `order_index` (integer) - Display order
  - `is_featured` (boolean) - Whether to show in main section
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `contact_submissions`
  Stores contact form submissions
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Sender name
  - `email` (text) - Sender email
  - `subject` (text) - Message subject
  - `message` (text) - Message content
  - `status` (text) - Submission status ('pending', 'read', 'replied')
  - `created_at` (timestamptz) - Submission timestamp

  ## Security
  - Enable RLS on both tables
  - Public read access for projects
  - Authenticated access for contact submissions management
  - Anyone can insert contact submissions
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  short_description text NOT NULL,
  full_description text NOT NULL,
  thumbnail_url text NOT NULL,
  technologies text[] DEFAULT '{}',
  key_achievements text[] DEFAULT '{}',
  methodology text DEFAULT '',
  category text NOT NULL DEFAULT 'Data Analysis',
  demo_url text,
  github_url text,
  order_index integer DEFAULT 0,
  is_featured boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_projects_order ON projects(order_index);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured);
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at DESC);
