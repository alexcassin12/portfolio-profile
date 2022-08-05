# Summary

I built this site as a personal profile page, where users could view information about me, my coding experience, and the projects I have developed. I chose to build this site from scratch, rather than use a template, to further develop my skills, and so that it could be included in my portfolio of work.

# How I Created the Site

This site was built using HTML, CSS/SASS and JavaScript. The site is all contained on a single page, so to make it engaging I used the JavaScript Intersection Observer API to dynamically style elements based on the users scroll position. This also allowed me to implement lazy-loading images to improve loading times. While building this site I also gained some experience using Figma, as I felt the UX/UI design was particularly important.

# Problems and Solutions

As this site is all contained on a single page, and there are quite a few high-resolution images, after inputting all of the content I noticed loading times for the site were starting to suffer, and images were not quite fully loaded when reaching sections, especially if I throttled my browser’s network speed. One of my solutions to this problem was to include a loading-screen to the site, so that the user would only be able to view the site once it was ready, which worked well to preserve the effort I had put into making sure the site was very visually appealing. The other solution I implemented was lazy-loading images, which helped to reduce initial loading times and get the user into the site faster.

# What I Think Went Well

I am particularly proud of this website from a UX/UI standpoint. As I knew it was going to be fairly simple when it came to content, and needed to be eye catching and engaging, I put a specific focus on creating the right look for the site, including deciding on a strict colour scheme, and making custom icons to match this. This taught me how important it is to have a good concept design for a site before beginning development, and how much time it can save. In the other two projects (Filmbys and Forever Flora) I was mostly designing the site on the fly while developing, and it took me much longer to get the basis of the layout down. By using Figma to create a design for the layout of this site, I found it much easier and time-effective when I reached the development stage.

# What I Think I Could Have Done Better

Looking back on this project, I wish I had taken a mobile-first approach when it came to design and development, as due to the large amounts of block text, it took a long time to make this site fully responsive down to mobile screens.

I also think, with a bit of research and experimenting, I may be able to make my use of the Intersection Observer API more efficient. I am currently using it separately for each effect I want to occur on different elements, whereas I feel this may not be the most efficient way, and it may well be possible to get one observer to view most (if not all) of the elements I want observed, and for the callback function to take different actions dependent on which element is actually intersecting.
