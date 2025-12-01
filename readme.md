

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById returns one element that matches a specific ID. getElementsByClassName returns a live collection of all elements with a given class name. querySelector returns the first element that matches any CSS selector that is provided, while querySelectorAll returns a static list of all elements matching that selector.


2. How do you create and insert a new element into the DOM?
Answer: A new element is created with document.createElement(), then its text or attributes are set, and finally it’s added to the page using methods like appendChild() or prepend(). 
For example: 
const p = document.createElement('p'); 
p.textContent = 'Hello'; 
document.body.appendChild(p); 
this creates a new <p> tag and inserts it into the document.


3. What is Event Bubbling and how does it work?
Answer: Event bubbling is when an event starts at the deepest (most specific) element and then moves upward through its parent elements. For example, if you click a button inside a div, the click event first triggers on the button, then on the div, and then continues up the DOM tree until it reaches the document. This is why parent elements can “catch” events that happen on their children.



4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event delegation is a technique where you attach a single event listener to a parent element instead of each child element, and then use the event’s target property to handle events on specific children. It’s useful because it reduces memory usage, makes code simpler, and automatically works for new child elements added later without needing extra listeners.


5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() stops the browser’s default action for an event, like preventing a link from opening or a form from submitting. stopPropagation() stops the event from bubbling up (or capturing down) the DOM, so parent elements won’t hear the event. One blocks default behavior, the other blocks the event flow.