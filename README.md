Pintellect is a website modeled off of Pinterest, where you can discover your next intellectual idea.

## Features:

### Auth
* Users can choose to sign up if they don't have an account
* Users can sign in if they already have one.
* Users can login as demo user by choosing one of the demo users.

### Pins
When the user is signed in, the user can view all pins on the index page with similar images as below: 

![](pin_index.gif)

* To view your pin:
  * Click Home button to pin's index page.
  * On the home page or the board's show page, click on any picture will lead you to the pin's show page.
  
* To add pins:
  * On home page and board's show page, hover over and click select will toggle a drop-down list which allows user to add pins to a board.
  * On pin's show page and pin's edit page, a similar dropDown allows user to add pins.
  * There's a search bar on the drop-down list, which allows you to search for a specific board.
 
* To Edit or delete pins:
  * On pin's show page, click the edit icon on the top left to edit page.
  * On pin's show page, click the delete icon on the bottom left.
  * Note: You can only edit info of a pin that's created by you, and you are only deleting the pin from your board but not destroy the actualy pin.
  
* To create new pins:
  * On board's index page, click the plus icon and choose to create a pin from the drop-down list.
   
![](board_index.gif)

### Boards

* To view your board: 
  * Press the icon with your initial button on the right of the navbar. 
  * You will see your profile infomation as well as your boards.
  * Click and visit individual board

* To create new boards:
  * On board's index page, click the plus icon and choose to create a board from the drop-down list.

* To Edit or delete boards:
  * On board's index page, hover over any board and click on the edit icon.
   
### Follows
* To follow or unfollow a user:
   * Click on the pin you are interested in. On that pin's show page, click the "follow" button to follow and click "following" to unfollow.
 
 ### Profile
* To Edit user profile:
  * Click the cog icon on navbar.
  * Click Done after you edited personal info. 
  * To view the updated profile, click the icon with user's initial.


## Code Snippet

* I have created an algorithm to organize and style pins.
  *  It randomizes the position of pins on the page.
  *  Recalculates column numbers for responsive design.
  *  Positions images of different sizes such that the white spade between images is equally distributed.

```
const {cols} = this.state.cols;
   pins = reorganizePins(allPins, cols, true);
   return (
       <div>
           <div className="pins-seeds-container">
               {mapPinsToCols(pins, openModal, boards)}           
           </div>
       </div>
   );
```
*  Reusable code for multiple components.

```
export const reorganizePins = (pins, cols, shuffle) => {
    if (shuffle) {
        pins = _.shuffle(pins);
    } 
    
    let newArr = [];
    const len = pins.length;
    const col = cols || Math.floor(window.innerWidth / 243.5);
    for (let i = 0; i < col; i++) {
        let inner = [];
        let rows = Math.floor(len / col);
        for (let j = 0; j < rows; j++){
            inner.push(pins[rows * i + j]);             
        }
        newArr.push(inner);
    }
    const newLen = newArr.length * newArr[0].length;
    if (newLen < len ) {
        addItemsToCols(len - newLen, newArr, pins.slice(newLen));
    }
    return newArr;
}
```

* Coming: 
  * AWS for pictures
  * Search bar to find pins
  * Sugguested pins

