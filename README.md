Angular Workout Tracker
Overview
This Angular application is designed to track workouts, display workout lists, and visualize data through charts. The application includes a sidebar navigation (sidenav), a home page, a page for adding new workouts (add-list), a page for displaying the list of workouts (workout-list), and a page for visualizing workout data with charts (workout-charts).

Features
Sidenav: Provides navigation throughout the application.
Home: The landing page with an overview of the app.
Add List: Allows users to add new workout records.
Workout List: Displays a list of recorded workouts with options to filter and sort.
Workout Charts: Visualizes workout data through various charts.

Project Structure
src/
|-- app/
|   |-- components/
|   |   |-- sidenav/
|   |   |   |-- sidenav.component.ts
|   |   |   |-- sidenav.component.html
|   |   |   |-- sidenav.component.css
|   |   |-- home/
|   |   |   |-- home.component.ts
|   |   |   |-- home.component.html
|   |   |   |-- home.component.css
|   |   |-- add-list/
|   |   |   |-- add-list.component.ts
|   |   |   |-- add-list.component.html
|   |   |   |-- add-list.component.css
|   |   |-- workout-list/
|   |   |   |-- workout-list.component.ts
|   |   |   |-- workout-list.component.html
|   |   |   |-- workout-list.component.css
|   |   |-- workout-charts/
|   |       |-- workout-charts.component.ts
|   |       |-- workout-charts.component.html
|   |       |-- workout-charts.component.css
|   |-- app.module.ts
|   |-- app.component.ts
|   |-- app.component.html
|   |-- app.component.css
|-- assets/
|-- environments/
|-- index.html
|-- main.ts
|-- styles.css

Components
Sidenav
The sidenav component provides a sidebar navigation menu. It allows users to navigate between different sections of the application.

File Structure: src/app/components/sidenav/
Key Files: sidenav.component.ts, sidenav.component.html, sidenav.component.css
Home
The home component serves as the landing page of the application. It gives an overview of the app and quick access to other features.

File Structure: src/app/components/home/
Key Files: home.component.ts, home.component.html, home.component.css
Add List
The add-list component allows users to add new workout entries. It includes a form with fields for workout details.

File Structure: src/app/components/add-list/
Key Files: add-list.component.ts, add-list.component.html, add-list.component.css
Workout List
The workout-list component displays a table of recorded workouts. It includes functionality for filtering and sorting the data.

File Structure: src/app/components/workout-list/
Key Files: workout-list.component.ts, workout-list.component.html, workout-list.component.css
Workout Charts
The workout-charts component visualizes workout data using charts. It displays various charts like line charts, bar charts, and pie charts to represent the data graphically.

File Structure: src/app/components/workout-charts/
Key Files: workout-charts.component.ts, workout-charts.component.html, workout-charts.component.css

Development
Run Tests: ng test

19 07 2024 23:17:12.431:WARN [karma]: No captured browser, open http://localhost:9876/
19 07 2024 23:17:12.473:INFO [karma-server]: Karma v6.4.3 server started at http://localhost:9876/
19 07 2024 23:17:12.474:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
19 07 2024 23:17:12.483:INFO [launcher]: Starting browser Chrome
19 07 2024 23:17:14.368:INFO [Chrome 126.0.0.0 (Windows 10)]: Connected on socket IDTyCYgiy2AUUqdnAAAB with id 61629722
19 07 2024 23:17:14.524:WARN [web-server]: 404: /_karma_webpack_/main.js
Chrome 126.0.0.0 (Windows 10): Executed 0 of 0 SUCCESS (0.003 secs / 0 secs)
TOTAL: 0 SUCCESS

Build: ng build
 Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.2662e071deee6b8c.js      | main          | 744.71 kB |               151.01 kB
styles.6507e0fc35322572.css   | styles        |  80.74 kB |                 7.89 kB
polyfills.c0bbca00e3b73a0b.js | polyfills     |  33.03 kB |                10.64 kB
runtime.d31e994a2b7b8cec.js   | runtime       | 898 bytes |               517 bytes

                              | Initial Total | 859.36 kB |               170.04 kB

Build at: 2024-07-19T17:49:27.802Z - Hash: 06effa1f3e9e2a2c - Time: 45514ms

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 359.36 kB with a total of 859.36 kB.

Contributing
Contributions are welcome! Please submit a pull request or open an issue for any improvements or bugs.