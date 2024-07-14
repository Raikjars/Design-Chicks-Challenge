# Design ChicksGold Challenges

This application is intended to be a mock design and will not be connected to any API. Only SCC/SCSS was used for the implementation of all styles, including buttons, inputs and responsive. The image and icon assets were obtained from the chicksgold main page

## Development server
Important note: To install via npm/Yarn, you need at least Node.js 14 or higher.

#### Step 1
Download the code from the repository using github or git bash with the command
```bash
  git clone https://github.com/NEWTOMS2/chat2dox-V2-portal.git
```


#### Step 2
Install project dependencies with the command
```bash
  npm install
```

#### Step 3
To run the project locally you must use the command
```bash
  ng serve
```

## Dependencies
The main libraries used for the development of this project are the following:

- **Angular Cli**: The application frontend is developed using the Angular 15.1.4 framework.

- **NodeJs**: Version **14.15.4 LTS or higher** is used as the execution environment.

- **HTML5, CSS3 and JavaScript (ECMAScript 5)** are used for the development of the web application.

## Estructura del proyecto
The project is organized into modules and has a highly scalable folder structure, under a folder structure. The project closely follows the "Folders by features" structure of the Angular style guide, which in turn allows the development of a modularized application.

**SHARED**

This is where components, pipes/filters, and data models should go. Components within shared can be imported into any other module when such elements need to be reused. The shared module should not depend on the rest of the application, and therefore should not depend on any other modules.

The Shared folder contains code that will be used multiple times in multiple modules, it is used only to maintain common components, pipes, and directives throughout the application.

1. **Components**: These will contain the components that are common throughout the application, such as the header, navigation bar, tables, and document information box.
2. **Pipes**: These are intended to transform the data to be displayed in order to improve the user experience.
3. **Directives**: Directives are the functions that will be executed every time the Angular compiler encounters them.

**MODULES**

The modules folder is responsible for containing the modules which are responsible for rendering the views using inputs and outputs, it will contain the directories and files for the management of directives, routing and services. A Module does not export anything except the component and its configuration.

Each set of modules is separated by functional domains, these functional domains are created in larger projects to separate and delimit a set of modules so that it is easy to locate.

Each module folder will contain:

- **vista.module.ts**: This is the configuration of the libraries, screens and utilities that the module will have.
  
- **vista-routing.module**: Contains the configuration of the different subroutes of the module.

- **Page folder**: Contains the parent component where the set of subcomponents will be used to build the view.

- **Components folder**: Contains all the subcomponents that make up the functionality that will be in the parent component.

##### Note: For this project it was not necessary to use the “components” folder because the list of items was created as a reusable component independent of the screen, this way it can be used multiple times more easily and avoid repeated code.

**ASSETS**

In addition to having visual resources for the platform in this section, the global styles of the application were configured in this section, which includes: colors, icons and generic designs such as buttons and inputs.

## Shared

The shared folder is used for those Angular components or elements that can be reused multiple times. Among them in this project are the following:

| Folder | Archive | Description |
| :-------- | :----- | :------------|
| Components | consult | It is a module that aims to consult different types of information according to the needs of the project. Among them are: product-list. |
| Components | product-list. | It is a reusable view for data query, it is created in such a way that it receives the information from the view (regardless of whether they are items, accounts or services) and displays the information with the same structure without requiring additional code. |
| Components | footer | This is the reusable footer component which is used throughout the application.|
| Components | navbar | This is the reusable navbar component which is used throughout the application, in it you will find the functionality of the responsive sidebar.| 

## Modules

The modules folder contains all the modules (set of screens) that make up a functionality or process of the platform. These are separated into functional domains based on the properties and functionalities of the project. The functional domains of the project are:
1.	**items**: In a larger project, we find all the important processes that involve performing actions with the items on the platform..
##### Note: In a larger project you might find functional domains such as: currency, accounts, services, etc.

| Folder | Module | Description |
| :-------- | :----- | :------------ |
| items | items-list | This is the query view of all the items in a video game, which allows you to see the offers and open the details of a certain item to add it to the shopping cart. |
