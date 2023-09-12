
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


## Delete ticket
    * click on delete icon on header
        * change the color of delete icon to red
    * click on ticket to delete 
    * pop up will come up and ask for confirmation to delete
    * Once you confirm the ticket is deleted


# Style features
## Responsiveness added
## header made sticky

Notes =>
    1. create new ticket, when no filter - no color selected in toolbar

Issues to handles =>
    we have added  single click and double click events on toolar color elements, for filter functionality.

    when double click event happens, then two single click events also happens.

    This does not create a visible issue.
    Becasue, when first click happens, it execute the event handler for first click.
    and when second click happens, it execute the event handler for second click.
    then double click event handler also executes, that will overwrite previous changes.
    So, this problem is not visible.

    But this is not correct implementation. We should handle this scenario.
    when double click event happens, then single click event handler function MUST not be called 2 times.

    solution => 
    approach 1 => use timeout
    approach 2 => use Debouncing and throttling


