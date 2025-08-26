**Overview and Purpose**

- Provides authentication for our app.
- provides currently logged in user and login, logout methods to our app.

**Data Flow & Interaction**

- on login, fetches user (depending on the role) from supabase (database) or displays an error.
- set the user in context to user found in database.
- useEffect reacts to this user change and redirects user to a route (depending upon user's role).
