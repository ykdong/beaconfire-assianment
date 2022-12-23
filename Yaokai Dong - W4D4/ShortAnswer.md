### 1. What is angular? How does it differ from other frameworks or libraries, like React?
Angular is a TypeScript and component based free and open-source framework
Angular is structural framework, based on TypeScript. Angular doesn't provide adding JS library to the source code
React is a JS library, based on Virtual DOM. React allows adding JS library to the source code

### 2. What are the major differences between AngularJS and Angular 2+?
AngularJS is JavaScript based, Angular 2+ is switching to TypeScirpt

- What does Angular2+ improve on?
- - Simple JSON-based Route Config
- - Optional Convention over Configuration
- - Static, Parameterized and Splat Route Patterns
- - URL Resolver
- - Query String Support
- - Use Push State or Hashchange
- - Navigation Model (For Generating a Navigation UI)
- - Document Title Updates
- - 404 Route Handling
- - Location Service
- - History Manipulation

### 3. Can you explain an angular project’s file structure? What does it contain?
1. node_modules: all the supporting modules
2. src folder: includes entry point of the application and root project folder(includes all components)
3. assets: all images, stylesheets, js or third party library
4. configuration files: includes tsconfig.json / tslint.json / package.json

- What happens when you ng generate something?
- 1. Generates or modifies files based on a schematic

### 4. Explain the angular architecture in terms of components, templates, directives, and injectors.
The basic building blocks of Angular are components that are organized into NgModules
Component define 'views'. Which are sets of screen elements that Angular can choose among and modify
according to the program logic and data

A template combines HTML with Angular markup that can modify HTML elements before they are displayed.
Template directives provide program logic, and binding markup connects application data and the DOM

### 5. What are some angular CLI commands that you commonly use? What do they do?
ng new <name>: Creates a new Angular workspace with provided <name>
ng serve: Builds and serves the application, rebuilding on file changes 
ng generate: Generates and/or modifies files based on a schematic 

### 6. Explain what ngModules are and why we use them.
Ngmodules is to organize the application, extend functionality from external libraries, and configure the compiler
and injector. The structure of an NgModule contains declarations, imports, providers, and bootstrapping

When the application gets really large, we could use NgModules to organize our code base more efficiently
NgModule is like a overall organizer/butler, it indicates which external module the application is using, 
which modules/components/directives/pipes are within the application

ngModule has 4 fields:
- Imports: Metadata - list the other modules used by this module
- Declarations: Metadata - lists the components, directives and pipes that are part of this module
- Providers: list of services other components can use
- Bootstrap: identifies the root component of the module. When Angular loads the AppModule, it looks for the boorstrap metadata and loads all the components listed

- Can you list some example built-in libraries?
- - FromsModule(@angular/forms)
- - HttpClientModule(@angular/common/http)
- - RouterModule(@angular/router)

### 7. What is a decorator? Why are they used in Angular class declarations?
Decorators are functions which we attach metadata to a class, method, accessor, property, or parameter
We apply the decorator using the form @<decrator-name>

- Can you explain each of the metadata properties in the ngModule decorator?
- 1. selector: Angular will this property value to locate a custom HTML element and apply the component to 
- 2. template / templateUrl: is the Markup that Angular will inject into the DOM element
- 3. style / styleUrls: is the style sheet for the component

### 8. Talk about how an angular application is run, from the entry file down to the component templates.
main.ts -> app.module.ts -> app.component.ts -> app.component.html
main.ts file is entry point of the application, main.ts file bootstrap app.module.ts file
app.moduls.ts will bootstrap the components
app.components.ts will render app.component.html file

### 9. Explain the Angular lifecycle and its three main hooks.
Angular component lifecycle is create, update, destroy
1. ngOnInit - A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
2. ngOnChanges - A lifecycle hook that is called when any data-bound property of a directive changes
3. ngOnDestroy - A lifecycle hook that is called when a directive, pipe, or service is destroyed

### 10. What is change detection? Explain each of Angular’s change detection strategies.
Change Detection performs a check against two states(current state and new state). If a difference between the two is detected, then something 
has changed and Angular will update the view(re-render)
1. CheckAlways(ChangeDetectionStrategy.default) - default strategy; Change detection is automatic until explicitly deactiveted
2. CheckOnce(ChangeDetectionStrategy.onPush) - change detection is deactivated until explicitly reactivated by setting the strategy to defatult

Benifit: 
CheckAlways: automatially detects the changes
CheckOnce: give us more control about when to update

### 11. Explain the shadow DOM. How is it significant?
The shadow DOM can be thought of as a parallel DOM tree, separate from the actual DOM
The shadow DOM allows groups of DOM implementation to be hidden inside a single element and excapsulates styles to the element
- Is the shadow DOM exclusive to Angular?
- -No, It's browser's built-in technology

### 12. What are templates?
In Angular, a template is a chunk of HTML. Just like regular HTML, but with a lot more functionality

### 13. What is text interpolation? What expressions can you put in there?
Means embedding expressions into marked up text. By default, interpolation uses double curly breces as delimiters
It accepts stringified text

### 14. What are directives? Explain each type of directive.
In Angular, Directives are defined as classes that can add new behavior to the elements in the template or modify existing behavior
The purpose of Directives in Angular is to manipulate the DOM, by adding new elements to DOM or removing elements and changing the 
appearance of the DOM elements
It has 3 types:
1. Sturctural Directives: directives which change the DOM  layout by adding and removing DOM elements(*ngFor, *ngIf, *ngSwitch)
2. Attribute Directives: change the appearance or behavior of DOM elements and components(ngStyle, ngClss)
3. Custom Directives - developer defined customized directives

- Give an example of a use-case for creating custom directives.
- - 1. Components: components are directives with templates. Component is a cleaner version of the Directive with a template

### 15. Explain event binding, property binding, and two-way binding in Angular. What syntax does each type of binding require? In what directions are values passed?
Event binding let us listen and repond to user actions, such as click, keystrokes
The syntax consists of a target event name within parenthesis to the left of an equal sign, and a 
quoted template statement(event listener) to the right
Event binding moves a event in one direction, from event target element to event listener element

Property binding helps us set values for properties of HTML elements or directive. Property binding moves a value in one direction, from 
a component's property into a target HTML element property(the binded element)
The syntax is enclose the property name in square bracket to the left of an equal sign, and a 
quoted parent property value to the right

Two-way binding listen for events and update values simultaneously between parent and child components
The syntax is a combination of square brackets and parenthesis
The directions would be two-way, parent and child both can catch the event, we could directly manipulate the DOM 

### 16. What is the difference between property binding and interpolation?
Text Interpolation expects a string, in property binding the value passed in may be arbitrary
Means if we are passing non-string data, we much use property binding

### 17. How can you update a parent component from within a child component?
We would use event emitting to do so. This is accomplished through two-way binding
1. import the EventEmitter from Angular Core module
2. Define the event and instantiate a new EventEmitter()
3. Bind the event within parent component and child component
4. Emit the event from child component
5. Catch the event from parent component

### 18. Explain the relationship between views, components, and templates.
Templates are regular HTML with additional Angular syntax
Components are based on templates with additional Angular functionality
Both component and templeate create a view
