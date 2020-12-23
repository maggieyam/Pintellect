
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';


export const toggle = (selector) => {
      let dropDown = document.querySelector(`${selector}`);

        if (dropDown.style.display === "none") {
          dropDown.style.display = 'block';
        } else {
          dropDown.style.display = 'none';
        }
 }


 export const dropDownBtns = (boards) => {
    return(
         <>
            <div id="select" onClick={() => toggle('.dropDown-content')}>             
                { boards[0] ? `${boards[0].title}`: 'Select'} 
              <FontAwesomeIcon
                icon={faChevronDown}
                id="svg-pin-drop-down"
                size="lg"
                onClick={() => toggle('.dropDown-content')}
              />
            </div>
            <button className="save" >Save</button>
        </>
    )
 }