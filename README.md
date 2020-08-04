<h1 align='center'>A simplified version of an inhouse enterprise management system build with a nodeJS backend and a React frontend</h1>

<div align='center'>Auto formatted with Prettier, not yet tested</div>

<div>To be used in conjunction with the backend <a href="https://github.com/FrancoisvanRensburg/ems_frontend.git">Node Backend</a></div>

## What is this and who is this for 🤷‍♀️

I am a chemical engineer turned management consultant turned web developer that realised that there are no business vision, resource and project management tools available that is either not scalable, doesn't require a tech wizz to set up, keeps track of a company vision and manages resources effectively available that can manage projects in either traditional prince2 and agile methodologies.

This public repo, built in my spare time, is a section of the project to showcase my web development abilities. It’s a very good example of a modern, real-world, web development codebase. This is the backend, built with express and mongoDB.

There are many showcase/example React projects out there but most of them are way too simple. I like to think that this codebase contains enough complexity to offer valuable insights to React developers of all skill levels while still being _relatively_ easy to understand.

## Features

- Proven, scalable, and easy to understand project structure
- Written in modern React, only functional components with hooks, no class based components were used
- A variety of custom light-weight UI components such as datepicker, modal, various form elements etc
- React state is managed with modern redux and React Context
- Local state is implemented using modern redux hooks like useDispatch and useSelector
- Grannular permissions for set usertypes
- Bootstrapped with create-react-app

## Setting up dev environment

- Clone the repository
- Frontend and backend to be run independently
- Run npm install in root directory
- Ensure that proxy in package.json is set up to "proxy": http://localhost:5000/
- Start backend server and open another terminal instance and run frontend with npm start

## Whats missing?

There are a lot of logic not included for this showcase product which should exist in a real world application. These include, but are not limited to:

### Proper authentication

Currently there is JWT authentication, that pulls the user and company data from the token, but user and company registration should be done in a real world scenario with account activation. Registering users currently requirted the user to be assigned a password and not generated through the JWT.

Password reset and forgot password functionality is also not integrated in this showcase.

### Changable grannular permissions

Currently five set usertypes are allowed for in the Showcase. In a production environment usertypes should be creatable with grannular permissions set based on the usertype.

### Unit/integration tests

No testing other than logical testing has been done on this project.
