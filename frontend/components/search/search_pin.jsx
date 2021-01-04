export const filter = (allPins, keywordStr) => { 
    
    let pins = Object.values(allPins)
    let count = 0;
    const cols = Math.floor(window.screen.width / 243.5);
    
    for (let pin of pins) {
      const description = pin.description.toLowerCase().split(' ');
      const title = pin.title.toLowerCase().split(' ');
      const keywords = keywordStr.toLowerCase().split(' ');
      
      for (let keyword of keywords) {
        let option = document.querySelector(`.pin-${pin.id}`);
        if (description.includes(keyword.toLowerCase()) || title.includes(keyword.toLowerCase())) {
            let oldCol = option.parentElement;
            oldCol.removeChild(option);
            let column = document.getElementById(`${count % cols}-columns`);
            column.prepend(option);
            option.style.display = 'flex';   
            count += 1;    
        } else {
          option.style.display = 'none';
        }
      }     
    }  
  }
