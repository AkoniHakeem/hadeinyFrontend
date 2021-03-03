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
<<<<<<< HEAD
- this is going to be done using event pattern

## to facilitate authentication
- have a separate service that 
  - resolves 
    - authentication 
    - authorization
  - exposes status

# using css variables
  root: declare variables in root with default value
  use variables to set property value
- considerations
  1. setting themes and single or few styles
    - we can set a single variable or adjust a few of them om demand
  2. responding to media screen size changes
    - adust a greater set of styles in this case
      - for this, 
      - start with a moobile first approach
      - use css variable multiplier to adjust sizes across screen
      - we have to code to support this approach by first computing the appropriate size that would favour multiplier when set for various screen sizes
      - the following areas may benefit from using multiplier css variable
        - one type of multiplier for 
          - width and height
          - padding and margin
          - font-size and possibly line-height
      - we can use a multiplier of 
        - 1 - mobile 
          - target max-width: 640px, 
        - 2 - tablet
          - targt max-width: 1008 or 1280, 
        - 3 - desktop
          - terget min-width: 1008
      - we can use css 
        - display: flex
        - direction: row wrap to let items break
        - we can use a center value to alignment or justification
=======
- this is going to be done using event pattern
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
