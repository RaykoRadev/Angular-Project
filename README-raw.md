Handmade - app for shareing handmade gift cards

Deployment: https://handmade-cards-by-fresia.vercel.app/

Ready to test solution with deployed backend and frontend servers.

!! The server is free tier so it takes around 50 seconds to wake up first and stay awake for 15 mins after last user request !!

Development mode
You need to clone local backend server from here: https://github.com/vladinson009/express-server (Huge thanks!)

- install dependencies "npm i"
- run in dev mode "npm run dev"

To start a local development server for game-store Angular project, run:

- install dependencies "npm i"
- run in dev mode "npm run start"

Once the servers are running, open your browser and navigate to http://localhost:4200/.

Instructions to use the app!

Guest users can:
Home page (Начало) => Catalog (Каталог)
Check all products without functionality => Catalog (Каталог) or side-navigation
Use pagination
About us page => About Us (Свържи се с нас)
Details for game without functionality => Details foe each card is accessible
Login from Profile => Login (Вход)
Register from Profile => Register (Регистрация)

Authenticated users:
ready to use users
username: Rayko ; password: asdasd;

<!-- username: moderator ; password: 123456 (role moderator);
username: gabriela ; password: 123456 (role user); -->

Authenticated users can:
Create new card from Home (Начало) => Create card (Създай нова картичка)
Like/Unlike cards from Menu => Category => Chosen category => Details (Детайли) for each card
If author:
Delete own card from Details (Детайли) => Delete (Изтрий)
Edit own card from Details (Детайли) => Edit (Промени)
Logout from Profile (Профил) => Logout (Отписване)

Project defense requirements:
Public Part
Home Page
Login
Register
Check cards collection without functionality
Check card details without functionality
Private Part
My Profile

General requirements
At least 3 dynamic pages:

Category
My profile
Details

Must have specific views:

! list of all created records => side navigation (Картички) => All in one place (Всички на едно място)

information about a specific record => Details, My profile
At least one collection, different from the User collection, with all CRUD operations
Cards collection can Create, Read, Update, Delete,

Use Angular for cliend-side
Communicate to a remote service via REST
Deployed/Local express server using MongoDB database

Implement authentication
Login/Register user (Create session on the server)
Logout user (invalidate session from the server)

Client-side routing to at least 4 pages (at least 1 with parameters)
/me
/login
/register
/profile
/category
/
/create
/:anniversary (for each category)
/details/:parameter
/edit/:parameter

Meaningful commits on small steps at GitHub control system

Other requirements

Error handling
showing error message on snackbar in case of invalid user credential
showing error fields in case of invalid forms
data validation before sending to the server
show error field in form in case of server error
The application should be divided into components
Divided on components to make code readable and reusable

<!-- Dummy commponents to reuse then in different parts of the app -->
<!-- Smart components to make architecture more easy for development -->

Use good folder structure to avoid technical debt when the project is growing

Demonstrate use of the following programming concepts, specific to the Angular framework:
TypeScript specific types in separated folder avoiding "any"
Many interfaces and Types
Observables
RxJS operators like catchError, throwError, Observable, tap, next
Lifecycle hooks like ngOnInit, ngOnDestroy, ngAfterViewInit
pipes like tap
Route Guards for Private and Public users

<!-- Directive for more specific email validation -->

Good usability: GOOD UI and UX:
Custom design (UI)
Angular material design (UI)

<!-- Loading spinners for server requests (UX) -->

Using best practices (UX )

Bonuses
Using Geo Location in About Us page
Using ImgBB file storage to store photos
Deployment at handmade-cards-by-fresia.vercel.app/

<!-- Angular animations -->

Bonuses not described in the assignment but has practical use:
Pagination in Games
