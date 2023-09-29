
# Event Bubbling 
def


## use case of Event Bubbling
- we want to listen click event on all star elements

- Instead of adding click event listener to all star elements, we added event lister to parent element of all star elements i.e rating-container

- and event listener is by default capture bubbling phase of its child elements (here star elements)

- so click event on each star element is captured on this rating-container element

## benefits of using event Bubbling
- we reduced the number of event listerns to just 1, which we were going to add on each star element, but now we only add one event listener on parent element and done
