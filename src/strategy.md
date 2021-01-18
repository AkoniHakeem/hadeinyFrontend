## Theme method to use
- We intend to specify theme files that would contain the styles refrenced from the react app
- We intend to load appropriate css theme file when a user chooses a theme
- We are thinking to do this using lazy loading or code splitting technique

## manage cart
- create cart with unique id using date time stamp and user email
- store in local storage using the unique id as the key
  -- set local store in app context
  -- cart_id with date time stamp
  -- use local storage hook
  -- 

## parent - child communication
- to facilitate easy and quick communication between a parent and child component

- allow the parent and child to listen 
- for certain evens from each other
- this way we can let the parent handle the most important tasks
- only pass along what the child simply needs
- this is going to be done using event pattern