
# task creation
    * when press Enter key on text area of modal, then create new task
        * creat new task
            * get the text from text area
            * get color selected 
            * add new unique id 
            * creat new task
        * clear text area, and set default selected color of modal
        * hide the modal

    * lock unlock feature on ticket
        * when lock icon is clicked, ticket text should be editable
            * remove lock icon
            * add unlock icon
            * make ticket text area editable

        * when unlcok icon is clicked, ticket text should not be editable
            * remove unlock icon
            * add lock icon
            * make ticket area non eidatable

    * ticket color change feature
        * when click on ticket color strip, the color should change in the order : red => blue => green => purple

        
## filter tickets
    * tickets should be filtered based on color selected in color toolbar
        * color clicked one time, ticket filtered based on the color
        * color clicked 2 times, all tickets shown

    steps 
        1. add "click" (single) event listener on each color in toolbar  
            event handler should be doing following :
                a. get all tickets 
                b. filter the tickets based on color selected
                c. show filtered tickets 

        2. add "double click" event listener on each color in toolbar
            event handler should be doing following :
                a. get all tickets 
                b. show all tickets 


Notes =>
    1. create new ticket, when no filter - no color selected in toolbar

