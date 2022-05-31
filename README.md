This project is created as a code challenge/freetime learning target in mind with React. The styles of the app are mainly done for mobile browsing but are acceptable for desktop also. Fun testing for my own purposes includes dynamic theme and language testing with libraries like i18next, MUI(customizing standard built in theme to be dynamic) and normal react context.

MUI was used as much as possible and customized as much as possible with styled components which was the second main focus for my own learning targets. Everything is as much as possible styled with this library when it made sense. 

App is not hosted but it can be started as follows from the root of project:

Backend => cd api && ./gradlew bootRun

Frontend => cd client && npm i && npm run build && npm i -g serve && serve -s build