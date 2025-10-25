# 🎬 MoviesDatabase API Documentation

## API Overview
The MoviesDatabase API provides access to a large collection of movies, TV shows, and related metadata.  
It allows developers to:
- Retrieve movie and TV show details.
- Search for movies by title.
- Access information about genres, cast, and crew.
- Get trending or popular titles.

This API is useful for applications that need to display media information, power recommendation systems, or build entertainment dashboards.

---

## Version
**v1** (current version from documentation)

---

## Available Endpoints
- **`/titles`** – Retrieve a list of movies and TV shows.  
- **`/titles/search`** – Search for titles by name.  
- **`/titles/{id}`** – Fetch details of a specific movie or TV show by its ID.  
- **`/genres`** – Get a list of all available genres.  
- **`/people/{id}`** – Get details about a specific actor, director, or crew member.  

---

## Request and Response Format

### Example Request
```http
GET https://api.moviesdatabase.com/v1/titles/search?q=inception
X-API-Key: your_api_key_here
