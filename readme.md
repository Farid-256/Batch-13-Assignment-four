
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById, getElementsByClassName and querySelector / querySelectorAll
getElementById("id")  single element by ID.
getElementsByClassName("class") live collection of elements by class.
querySelector("selector") first match using CSS selector.
querySelectorAll("selector") → static list of all matches.


2. How do you create and insert a new element into the DOM?
Ans: const el = document.createElement("div");
el.textContent = "Hello!";
document.body.appendChild(el);

3. What is Event Bubbling? And how does it work?
Ans: Event goes child → parent → document. Example: click on <button> also triggers <div> and <body> handlers unless stopped.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Attach listener to parent, handle child events via event.target.
 Fewer listeners
 Works for dynamic elements
 Cleaner code

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() → stops browser’s default action (e.g. link navigation, form submit).
     stopPropagation() → stops event from bubbling up to parent elements.