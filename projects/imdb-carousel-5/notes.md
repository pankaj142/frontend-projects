# carousel with horizontal scrolling (with auto sliding effect)

## Adding Prev and Next button on carousel

    - add prev and next button, inside the carousel container
    - add "position : absolute" to both
    - add left property to prev button and right property to Next button
    - also add z-index property to both button
    - add onclick event listener to both button
    
## carousel functioanlity

    - add slide images to carousel container
    - make carousel container as "position : relative"
    - make slide as "position : absolute"
    - so all slide images will overlap on the same container
    - make non active slide as "opacity : 0", so all non-active slides are hidden
    - make the active slide as "opactity : 1", so only the active slide will be visible
    - now, add click event listener to prev and next button

    - event listerner working => 

        - get the current active slide index
        - based on the type of button (prev or next), it will calculate the nextIndex slide
        - remove the "active" class from current active slide 
        - add "active" class to nextIndex slide
        
### add transition effect 

    - add transition effect on slide change using css transition property
    
        .slide {
                opacity: 0; /* all non active slides are hidden */
                transition: 200ms opacity ease-in-out;
                transition-delay: 200ms;
        }
        
        .active {
            opacity: 1; /* only the active slide is visible in container */
            transition-delay: 0ms;
            z-index: 1;
        }

    - so, when the transition happen, we add 200ms delay

    - the active slide does not have transition delay, it will start its fade in animation immediately

    - while, the inactive slide that is disappearing has 200ms delay, so it will wait untill new slide done, animating in and then it will disappear 

    - we add the delay in transition, just to avoid the white screen shown when this transition happens 


### Auto slide effect
    - after every 3 second, next slide is shown
    - use setInterval 

### dots list added at carousel bottom
    - dots list added to botton, indicating the number of images(slides)
    - highligh the dot, indicating that number of slide is being shown on carousel currently
    - update the highligh dot as the slide changes

### gradient effect on carousel slides at bottom side
    - to highlight the dots at bottom of carousel, gradient effect is added 
    - on top of the gradient dots list shown


