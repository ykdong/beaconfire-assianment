### 1. What is flow?
The flow of a page means whether elements on the page affect or are affected by the position of other elements

### 2. How are inline elements and block elements displayed in flow? And out of flow?
In flow: block and inline elements work as expected, they're stacked along each other
Out of flow: element positions are independent of each other; they act like they're on their own layer, and don't take up space on the page

### 3. When is float useful?
Float controls position and formatting of content on a page
It's useful when wrapping text around images or other elements

### 4. What would happen if I set float: left to a block element?
The element floats to the left of its container

### 5. What does clear do?
Clear is used on an element next to a floating element, making this element appear below the floating element
Otherwise, the element will flow around the floating element

### 6. How is position useful?
The position CSS property sets how an element is positioned in a document
The top, right, bottom, and left properties determine the final location of positioned elements

### 7. What is the difference between position:fixed and position:absolute?
position:fixed offset is relative to the viewport, stays on the page when scrolling. It's out of flow, scroll with the viewport.
position: absolute offset is relative to nearest positioned ancestor or viewport. It's out of flow

### 8. What does z-index do?
z-index specifies the stack order of an element(which element is placed in front of or behind others)
z-index only works on positioned elements

### 9. What is Flexbox?
The flexbox or flexible box model is a one-dimensional layout model that has flexible and efficient layouts with
distributed spaces among items to control their alignment structure

### 10. What is a flex container? Can you explain some flex container properties?
A wrapper elements that are styled with "display: flex"
It has 5 properties:
1 flex-direction: defines the way that the flex items will be arranged or stacked
2 flex-wrap: defines whether the flex items should wrap around to the next line or not
=> flex-flow: shorthand property for setting flex-direction and flex-wrap
3 justify-content: defines how the browser align the flex items along the main-axis
4 align-items: defines how the browser align the flex items in their cross-axis
5 align-content: defines how the browser align the flex lines(rows or columns)

### 11. What are flex items? Can you explain some flex item properties?
Flex item: direct child elements of a flex container
It has 5 properties:
1 order: order the items by number, ascending
2 flex-basis: the initial length of this item, in the direction of the main-axis
3 flex-grow: a factor by which this item grows relative to the others
4 flex-shrink: a factor by which this item shrinks relative to the others
=> flex: shorthand for grow/shrink/basis
5 align-self: specify the item's vertical alignment, overriding container's align-items

### 12. What is Grid?
The CSS Grid Layout Module is a 2-D grid-based layout system, with rows and columns, making it easier to design web pages without
having to use floats and positioning

### 13. What is a grid container? Can you explain some grid container properties?
A Grid container is an element styled with "display: grid" or "display: inline-grid"
It has 6 properties:
1 grid-template-columns: a space-separated list of lengths, each representing the width of a column
2 grid-template-rows: a space-deparated list, each representing the height of a row
3 grid-template-areas: textual representation of the grid, each cell is the area name or .(dot/empty cell)
3 justify-content: how to horizontally align the entire grid
4 align-content: how to vertically align the entire grid
5 column-gap: specify length for the gaps between columns
6 row-gap: specify length for the gaps between rows
=> gap: shorthand for row-gap, column-gap

### 14. What are grid items? Can you explain some grid item properties?
The direct child element of a grid container
There are 2 kind of grid item:
1 grid item by lines, it has 4 properties:
- grid-column-start: the item's starting column line number
- grid-column-end: the item's ending column line number
- => grid-column: shorhand for column start/end
- grid-row-start: the item's starting row line number
- gird-row-end: the item's ending row line number
- => grid-row: shorthand for row start/end
2 grid item by area, it has 1 property
- grid-area: useage (grid-name || row-start/col-start/row-end/col-end)

### 15. What are the major differences between CSS transitions and animations?
They are different in 6 aspects:
1 Transition can only move from initial to final state, no imtermediate steps
  Animation can move from initial to final state with intermidiate steps in between
2 Transition can only run once
  Animation can loop infinitely by set iteration-count property
3 Transition require a trigger to run
  Animation can be triggerd by can also run automatically
4 Transition run forwards when triggered and in reverse when trigger is removed
  Animation can run forwards, in reverse, or alternate directions
5 Transition is easier to use than Animation
6 Transition is best for creating a simple change from one state to another
  Animation is best for creating a complex series of movements

### 16. What is responsive web design (RWD)? What are some examples of RWD on a website? How do we achieve this?
RWD stands for Responsive Web Design. It is a design approach where developer use HTML and CSS to make the website UI look great on all devices and screen sizes

One typical example is Media Query. Apply different block of CSS properties when given conditon is true. Based on the viewport or orientation
Another example is flexible visuals. The flexible container resizes itself based on certain condition.

We could use @media to apply certain CSS properties to the website and/or use flexbox model to achive flexible visuals  

### 17. What is a CSS preprocessor? What are the advantages and disadvantages, if any, to using them over plain CSS?
CSS Preprocessor is a program with its own unique, CSS-based syntax that would transpiled into regular CSS
Some popular CSS Preprocessors are SASS SCSS LESS
Advantages:
- 1 Nested Syntax
- 2 Ability to define mixins
- 3 Mathematical functions
- 4 Joining of multiple files(keyword "_" can be imported into other style sheets. When importing, use @use)
Disadcantages:
- 1 Debugging is harder
- 2 Compilation time slows down development

### 18. How do we declare a SCSS variable? How do we declare CSS variables?
In SCSS use ( $ + variable name ). In CSS use ( -- + variable name )

### 19. What is the usage of ‘&’ in SCSS?
It refers to the parent selector in nested css blocks, which is useful for pseudo-class/elements

### 20. What is @mixin? What are some use cases?
It defines a rule that can be copied & reused throughout the stylesheet, it can accept arguments
Used along with @include: copied all the mixin declarations into another block

### 21. What is @extend? What are some use cases?
@extend makes a rule inherit the declarations from another rule or placeholder(%)
Use this for inheritance(when there's a meaningful relationship between selectors)

### 22. What is the usage of !important? What are some use cases?
The !important keyword makes a declaration have the highest specificity, so it overrides all other declarations
We use it when we need to customize the CSS template

### 23. Could you explain accessibility, usability, and inclusion? Give some examples of each one in terms of web design.
Accessibility: 
Addresses discriminatory aspects related to equivalent user exprience for people with disabilities
Usability: 
Designing products to be effective, efficient, and satisfying. It includes user experience design
Inclusion: 
Universal design & design for all, diversity and ensuring the involvement of everyone to the greatest extent possible

Examples: 
Accessibility: captions for noisy environments || screen readers || text magnification for the elderly
Usability: responsive web design
Inclusion: adapting to meet the language, culture, and other requirements of some specified market/audience || targeting all audiences || language translation
