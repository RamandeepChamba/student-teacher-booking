**Overview and Purpose**

- used as a wrapper element for all of our protected routes.
- checks if there is a user and if they are authorized to view
  the route, if not redirects to login.

**Props**

- allowedRoles
  - array of all roles allowed to view the route
- children
  - content to display if user is authorized
