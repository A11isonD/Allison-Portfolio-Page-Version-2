# Allison-Portfolio-Page-Version-2

This project consists of my portfolio website that demonstrates the HTML, CSS, and JavaScript skills I learned in Part 1 of Code Louisville's Web Development course.  Its intended purpose is for networking and the targeted audience is potential employers.  I will also use it as a platform to display future projects as I gain more experience in coding.  


To run this project, please copy the link to my Github repository (https://github.com/A11isonD/Allison-Portfolio-Page-Version-2.git) titled "Allison-Portfolio-Page-Version-2".  In addition to this README file, this link contains: index.html, styles.css, menuToggle.js, and home.js.  


My project contains three CSS and JavaScript features from the required list and two media queries.  I will now describe the features and media queries:  
    
    1. CSS: A navigation menu that expands and collapses properly at desktop and mobile sizes.  The navigation bar and links span horizontally across the top right edge of the page in the medium and large screen views.  For small screens, the links collapse into a hamburger menu that opens vertically and moves in from the left side of the page when a user clicks on it.  I accomplished this by using Flexbox to make the navbar and the nav-menu flex containers and using 'flex direction: column' and 'justify content: end' on the nav-menu which are the flex items.   

    
    2. CSS:  I used Flexbox on a section of the main element to organize content areas for a desktop view by creating a two-column layout and setting the flex-direction of the section containing the articles to row with flex-wrap: wrap.  This causes two of the article elements to create two columns when the screen reaches 1024px.  I set the width of the columns to flex with a width of 400px each.
    
    The last-of-type pseudo-class applied to the last article keeps the form element fixed at the bottom instead of being pulled up to the row next to the third article on a larger screen.   
    
    
    3. JavaScript:  The hamburger menu uses JavaScript to display and hide its contents.  The 'Contact' form uses JavaScript to display a custom message to the user that confirms their message was sent.  

    
    4. Media queries:  
    For screens 768px and larger, I hid the hamburger menu and its pop-up links and displayed the regular nav links at the top of the page.  
    
    For screens <1024 px, I kept the flex direction as column to keep everything aligned vertically.  

    For screens 1024px and larger, I added 5% padding on left and right to create a white space on the sides and keep the contents from stretching too far horizontally.  I also changed to flex-direction row with flex wrap and created two columns out of the some of the articles as described above in the CSS feature.

     

    
    

   
