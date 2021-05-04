# Programming Challenge

**Applicant:** Andrey Souza

Source code of the application for the technical phase of the selection process for developer at SIDIA.

   This application is capable of:
 1. List the films in the database in descending order, taking the rating as a metric. 
 2. List films by release year and genre.

## Requirements to run

Have installed the following packages on the system:

 - git
 - nodejs and npm

## How to run

 - **Install the dependencies**
 Install the dependencies with the command `npm install`.
 
 - **Run the application**
 Run the application with the command `npm start` and access the port `http://localhost:3000`.
 *Note: If the system asks for permission to run the application then:*
	 - *Allow the application to run;*
	 - *press `Ctrl+C` to cancel the current run;*
	 - *and then run again with `npm start`.*

## Technologies 

### Data processing
The data set data processing was done in *Python*, using the *Pandas* library, due to the ease in handling the data. The data is already processed and ready to be used, as it is stored online, but the data processing code can be found on the directory `helpers`.
### Database
This application uses *MongoDB Atlas* as a database. I chose this path because it is easier to work with fixed data and because the installation and execution of the application also becomes faster and easier.
### API
The API, as expected, was developed in JavaScript with the *Express* framework.
### Frontend
The frontend is a simple HTML + CSS. I chose this approach because it is sufficient for the application.

## Some Screenshots

![Just started](https://i.imgur.com/CBBa1FJ.png)
---
![List by rating](https://i.imgur.com/HtoSgTV.png)
---
![List by year and genre](https://i.imgur.com/QBXVwdG.png)

