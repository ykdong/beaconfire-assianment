### 1. What modules does Angular provide for us to handle forms and user input?
we have 4 modules:
1. FormsModule(@angular/forms)
2. ReactiveFormsModule(@angular/forms)
3. FromControl(@angular/forms)
4. FormGroup(@angular/forms)

### 2. Explain template-driven forms vs model-driven (reactive) forms.
Template-Driven Forms are from FormsModule. In Asynchronous mode. Most of the logic is driven from the template
Model-Driven Forms are from ReactFormsModule. In Synchronous mode. It's logic resides mainly in the component

### 3. How do we create template-driven forms using the FormsModule?
1. First import the FormsModule into app.module.ts from @angular/forms
2. Use [(ngModel)] to catch value changes in the attached element and update the correspondence data
3. Use NgForm to create a top-level FormGroup instance and binds it to a <form> element to catch aggregated form value and validation status
- this directive is active by default on all <form> tags once imported FormsModule
4. Use [ngModelGroup] to create and bind a FormGroup instance to a DOM element

- 1. What are ngForms and ngModelGroups?
- - ngForm directive is used with HTML <form> tags. It create a top-level FormGroup instance and when binds it to a <form>, we could track aggregate form value and validation status
- - ngModelGroup directive create and bind a FormGroup instance to a DOM element. This directive can only be used as a child of NgForm

### 4. How do we create reactive forms using the ReactiveFormsModule?
1. First import 'ReactiveFormModule' from @angular/form into app.module.ts
2. Bind or relate them to the HTML templates
3. Define forms using an instance of FormGroup
4. control the form inputs with instances of FormControl

FormGroup: defines a form with a fixed set of controls that we can manage together. FromGroup could be nested
FormControl: used for input field, it takes a single generic argument, which describes the type of its value and can also be used to set a default value

### 5. What is FormBuilder?
The FormBuilder provides syntactic sugar that shortens creating instances of a FormControl, FormGroup, or FormArray

### 6. How can we use Validations in forms? How can we create our own custom validations?
1. Inside the component, import 'Validators' from @angular/forms
2. Attach the validator method to target input field 

We could create custom validation by: 
1. import 'AbstractControl', 'ValidationErrors', 'ValidatorFn' from @angular/forms
2. create a service function that returns a validatorFn
3. inside the validatorFn, define our validation ligic

### 7. What are pipes? List some example pipe keywords.
Pipes are methods that used to transform provided data to certain format. Denoted with | character
Common Pipes: 
1. object type | json
2. string type | uppercase
3. string type | lowercase
4. number type | percent
5. number type | decimal

### 8. Explain what services and injectables are. How are they related?
Service is a broad category encompassing any value, function, or feature that an application needs
And certain service is a class with a narrow, well-defined purpose, meaning its should do something specific and do it well

Injectables are denoted with the @Injectable Decorator. It marks a class as available to be provided and injected as a dependency

To make certain service available to a component, we need to inject the service into the components that need it

### 9. What is the HttpClientModule? How is it different from using fetch to request data from an API?
HttpClientModule is a service module provided by Angular that allows us to perform HTTP Requests and eaily manipulte those requests and their responses

This services use Observables for all transactions, is not Promise based service.

### 10 . What are observables? How are they different from promises? What library provides observables?
Observables are streams of data that asynchronouly emit values that can be subscribed to.
When something subscribes to an observable using .subscribe(handler) and passed in a handler, and that observable emits a value, the handler is executed
Observables may emit multiple values
Observables do not mutate the server response
We could cancel subscribe by calling unsubscribe() method
Observable use .next() to emit the values to subscriber

Rxjs library provides Observable module

### 11. What is the async pipe? How may it be used?
AsyncPipe subscribes to an observable or promise and returns the latest value it has emitted
When a new value is emitted, the pipe marks the component to be checked for changes

We could bind the async pipe with observable, and keeps getting the latest value of the observable
- ^ ?

### 12. What is a subject? How do they differ from observables?
- Subject is a special kind of Observable that allows values to be multicasted to many Observers

- The subject is also an observer because it can subscribe to another observable and get values from it, 
  which it can multicast to all of its subscribers

- 1. When do you want to use a subject over an observable? What about using an observable over a subject?
When we have the source unchanged and we have only one subscriber, we could use observable.
When the source needs to update sometime and have many subscribes, we could use subject 