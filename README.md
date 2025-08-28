1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById("btn")
=> Finds one element by unique "btn" and return a single element object

getElementsByClassName("classCard")
=> Finds all elements whose class names match. Return an HTMLCollection and looks like an array but not exactly array. Access elements using index [0],[1],[2]...

querySelector(".card")
=> Finds the element that first match the CSS selector like #id, .card etc.

querySelectorAll("")
=> Finds the element that all match the CSS selector. Return a Nodelist it's looks like an array but not exactly array.


2. How do you create and insert a new element into the DOM?

=> Create and insert a new element into the DOM :
=>>> Using document.createElement("div");
=>>> Setting it's text/attribute > .textContent = "";, .className = "";
=>>> Adding the DOM using methods like appendChild(), prepend(), before(), after(), or replaceWith().


3. What is Event Bubbling and how does it work?

>= Event bubbling DOM events start from the element on which they occurred (child/target), then gradually move up to its parent/parentNode → grandparent → document.

>>>>Click on <button>.
First the click event will work on the button.
Then it will go to the parent div.<<

examole : const spnHearth = hearth.parentNode.children[1].children[0];


4. What is Event Delegation in JavaScript? Why is it useful?

>= function(event) is a technique where instead of having a separate event listener on each child element, an event listener is placed on their parent element. The parent can then catch that event through event bubbling.
	> click > ul > item1 , item2, item3.


5. What is the difference between preventDefault() and stopPropagation() methods?

event.preventDefault()
>= Default of element stops working / Stop browser defaults
 example :- Stop opening links in <a> tags and form submite. 

event.stopPropagation()
>= Stops event bubbling/capturing and then event will no longer go to the parent element.
