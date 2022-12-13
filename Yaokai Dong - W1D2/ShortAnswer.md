### 1. What is HTML? 
HTML stands for Hypertext Markup Language. Which is the most basic building block of the Web
It defines the meaning and structure of web content

### 2. What is block element? How is it different from inline elements?
A block-level element is an element which:
1 Always starts on a new line
2 Always takes up the the full width available
3 Always affected by a margin on all sides
Inline block is different by:
1 Inline block does not start on a new line
2 Inline block takes up as much width as necessary
3 Inline block only affected by a left & right margin

### 3. What is the importance of the meta tag?
The meta tag defines metadata for an HTML document. Which is important in SEO

### 4. What would happen if you clicked on a link created using <a href="javascript:void(0)"></a> ?
We have two parts in the href expression, the browser treats the href as some JavaScript code starting after "javascript:".
And the void operator evaluates given expression and returns undefined. Overall, nothing happened after, stays on the same page

### 5. What is iframe?
Inline frame for embedding an HTML document within the current HTML document
This tag have 4 attributes: 
1 src: the address of the document to be embedded, in url format
2 title: description of the iframe contents, for screen readers to read out
3 width 
4 height

### 6. What is CSS?
CSS stands for Cascading Style Sheet. Which is a style sheet language used to describe the way that
how HTML elements should be displayed on screen

### 7. How do you import CSS?
We have 3 ways to insert CSS
1 External CSS
2 Internal CSS
3 Inline CSS

### 8. What are the different types of CSS selectors?
We have 5 CSS selectors
1 Simple Selector: select elements based on tage name, id, class.
2 Combinator Selector: select elements based on their relationship
3 Pseudo-class Selector: select elements based on their state
4 Pseudo-element Selector: select part of an element
5 Attribute Selector: select elements based on attributes or their values

### 9. What are the different types of attribute selectors?
We have 5 attribute selectors
1 attribute name selector: [a] select all elements that have an attribute named "a"
2 attribute value selector: [a="b"] select all elements with an attribute named "a" whose value is "b"
3 attribute start value selector: [a^="b"] select all elements with an attribute named "a" whose value starts with "b"
4 attribute end value selector: [a$="b"] select all elements with an attribute named "a" whose value ends with "b"
5 attribute contain value selector: [a*="b"] select all elements with an attribute named "a" whose value contains "b" at least once  

### 10. What is a pseudo-class?
A special state of an element (hover, visited). Denotated in single colon

### 11. What is a pseudo-element?
A specific part of the selected element(first letter, first child, before/after). Denotated in double colon

### 12. What are two ways that we can make an element invisible? What is the difference?
We have 2 ways to do so.
display: none & visibility: hidden
display: none doesn't take up space on the page
visibility: hidden take up space on the page

### 13. What is SVG and why do we use it?
SVG stands for Scalable Vector Graphics. It is used to define vector-based graphics 
We use SVG when we want to zoom or resize the graphics without losing quality

### 14. What is the Box Model? Describe each part.
Box Model is the layered structure for every HTML element
It contains 4 parts:
1 content: the content of the element
2 padding: the transparent part space surrounding the content
3 border: the part surrounding the passing and content
4 margin: the transparent space outside the border, separating an element from other HTML elements

### 15. What is the difference between margin and padding?
Margin is the space around an element's border, while padding is the space between an element's border and the element's content
Margin can have positive or negative lengths. Positive lengths means adding space, negative length means removing space.
Padding can NOT have negative lengths.

### 16. Assume an element has the following properties. What is the element size (width & height)?
```
width: 100px; 
height: 100px;
margin: 20px 50px;
padding: 10px 10px;
border: 2px;
```
From the code above, the box-sizing is not set to border-box. Will use default content-box calculation. Which means 
the padding & border is not included.
Total Height: 140px 
100(height) + 20(margin-top) + 20(margin-bottom)

Total Width: 200 px
100(width) + 50(margin-left) + 50(margin-right) 

### 17. Assume an element has the following properties. What is the element size (width & height)?
```
width: 100px; 
height: 100px;
margin: 20px 50px;
padding: 10px 10px;
border: 2px;
box-sizing: border-box;
```
From the code above, the box-sizing is set to border-box. Which means padding & border is included.
Total Height: 164px 
100(height) + 10(padding-top) + 10(padding-bottom) + 2(boder-top) + 2(border-bottom) + 20(margin-top) + 20(margin-bottom)

Total Width: 225 px
100(width) + 10(padding-left) + 10(padding-right) + 2(boder-left) + 2(border-right) + 50(margin-left) + 50(margin-right) 

### 18. Assume a parent element has width = 200px and one child element. If the child element’s width is set to ‘auto’, what are the values of its width, left-margin, & right-margin?
From the description above, we know that the child width is set to "auto" and both margins are unspecified. 
In this case, the width of the child will be 200px. (width "auto" expands to fill the parent). And both margins are 0

### 19. Assume a parent element has width = 200px and one child element with width=100px. If the child element’s margin-right is set to ‘auto’, what is the child element’s left-margin & right-margin values?
From the description above, we know that the child width is set to "100px"(constant) and right margin is "auto", left margin is not specified.
In this case, the left margin will be 0 and the right margin will fills the parent width which is "100px"

### 20. Assume a parent element has width = 200px and one child element with width=100px. If the child’s margin is set to ‘auto’, what is its left-margin & right-margin values? 1. What is the left & right margin values if the child’s width was 300px?
case 1: the child width set to 100px
From the description above, we know that the child width is set to "100px"(constant) and both margins are set to "auto". Which means the margin left equals to the margin right.
Margin-left = 50px;
Margin-right = 50px;

case 2: the child width set to 300px
Child width exceeding the parent width, left & right margin are both 0
