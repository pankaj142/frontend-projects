

# search feature with debouncing concept

    Deboucing
        Debounce is a technique where you delay the execution of a function untill a certain amount of time has passed.
        This is useful if you have a frequently used function, say a scroll or resize event listener -  and don't want to trigger it too frequently because that might slow down the browser.

    
    When user stops pressing keys in input box, after that it waits for debounce delay time and then API call in made.

    So, we don't want to call API on each key pressed, but after some time when user stops entering keys in input box, so this way we reduced the number of API calls made.

    That help in improving performance of website.


    check the main.js file for more details about the debouce function code and its execution