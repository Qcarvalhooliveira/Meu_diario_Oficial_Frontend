# **Meu Diário Oficial - Frontend**

* This is the front-end part of the Meu Diário Oficial project, which facilitates tracking of official publications in Salvador city. The front-end is built with React and TypeScript, providing an intuitive interface where users can log in, register, view dashboards, and manage their accounts.

## **Table of Contents**

* Features
* Technologies
* Installation
* Running the Project
* Project Structure
* Available Routes
* API Integration
* Authentication
* Contributing
* Author

## **Features**

* **User Authentication:** Log in, register, and log out functionalities integrated with the backend.
    
* **Dashboard:** Displays user-specific data and offers account management options.
    
* **API Integration:** Communicates with the backend via a RESTful API.
    
* **Responsive Design:** The application is responsive and optimized for various screen sizes.
    
* **State Management:** Efficient management of user authentication and session handling using useState and useEffect.
    
* **Access Control:** User-based access to control dashboard page.


## **Technologies**

* **React:** JavaScript library for building user interfaces.

* **TypeScript:** Provides static typing for JavaScript, improving code quality and maintainability.
    
* **Styled Components:** For styling React components.
    
* **React Router:** For handling client-side routing.
    
* **Axios:** For making HTTP requests to the backend API.
    
* **KeenSlider:** For implementing the carousel in the homepage.


## **Installation**

To get the front-end running locally, follow these steps:

* **1.Clone the repository:**

```
git clone https://github.com/Qcarvalhooliveira/Meu_diario_Oficial_Frontend
cd Meu_diario_Oficial_Frontend
```

* **2.Install dependencies:**

```
npm install
```

* **3.Set up environment variables (if applicable):**

    If you are using environment variables such as API URLs or keys, create a .env file in the root of the project and add your variables. Example:

```
REACT_APP_API_URL=http://localhost:5000
```

* **4.Run the project:**

```
npm run dev
```

This will start the development server on http://localhost:3000/.


## **Running the Project**

Once the development server is running, open your browser and navigate to:

```
http://localhost:3000/
```

The homepage will be displayed with the option to log in, register, or view more information about the project.

## **Project Structure**




## **Key Directories**

* **components:** This directory contains all the reusable UI components like Header, Homepage, Footer, Dashboard, and others.

* **pages:** Inside components, each route in the application (e.g., /login, /dashboard, /aboutus) has its own page component in this folder.
    
* **styles:** Contains global styles and component-specific styles created using styled-components.


## **Available Routes**

The following routes are available in the front-end:

* **/:** Homepage with an introductory carousel.

* **/login:** User login page.

* **/cadastrar:** User registration page.

* **/dashboard:** Dashboard page, available only after logging in.

* **/about:** About us page, providing information about the service.
    
* **/contact:** Contact page, allowing users to send messages to the application team.

* **/terms:** Terms of Service page.
    
* **/privacy:** Privacy Policy page.


## **API Integration**

The front-end communicates with the backend (Flask API) for user authentication, account management, and fetching user-specific data. Axios is used to make HTTP requests.

* Example of API calls:

* **Login:** POST request to http://localhost:5000/login.

* **Register:** POST request to http://localhost:5000/add_user.

* **Delete Account:** DELETE request to http://localhost:5000/delete_user/:id.

Make sure to update the API URL in the .env file if necessary.


## **Authentication**

The authentication is handled by storing a JWT token in localStorage. The token is then included in the headers of API requests that require authentication.

On login, the JWT token is stored like this:

```
localStorage.setItem("token", response.data.token);
```

And to check if the user is logged in:

```
const token = localStorage.getItem("token");
if (token) {
  // User is logged in
}
```


The App.tsx keeps track of the user's login state and hides/shows navigation buttons accordingly.


## **Contributing**

Contributions are welcome to the project! 

To contribute:

* Fork the repository.
* Create a new branch (git checkout -b feature/your-feature).
* Make your changes.
* Submit a pull request.

Make sure to run the tests and follow the code style guidelines before submitting.


## **Author** :black_nib:

* **Queise Carvalho de Oliveira** - [Linkedin](https://www.linkedin.com/in/queise-carvalho-de-oliveira-50359749/)