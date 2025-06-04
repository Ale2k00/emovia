# Emovia MVP

This repository contains a minimal prototype for the Emovia platform.

## Structure

- `frontend/` – Static web front end built with React via CDN and Tailwind for styling. It provides a simple file upload form.
- `backend/` – Python server using the standard library to serve the front end and handle file uploads.
- `uploads/` – Directory where uploaded files are stored.

## Running the prototype

1. Install Python 3 (already included in this environment).
2. Run the server:

   ```bash
   python3 backend/server.py
   ```
3. Open a browser at [http://localhost:8000](http://localhost:8000) to see the demo.

This is only a basic starting point and does not include the full serverless or AWS integration described in the project plan, but it demonstrates the file upload workflow for the MVP.

