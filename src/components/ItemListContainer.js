import { useState } from "react";

const ItemListContainer = () => {
  const [contador, setContador] = useState(0) 
  return (
      <div className="bagCounter">
        <p>{contador}</p>
        <img className="header__Nav--Icon__element--bag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAh5JREFUSEvNltGR00AMhiW9eNd5wB1wdHCp4CYVXFIBdxVwVECoAKiAo4PQQaiAUAEpwTzE2slMVow8Xo/P49jrJEPY15X16ff+qxXClRZeiQsng7Msy/b7/Z33/rYqfu2c+xEr5CRwmqZzEfkKAFkLtCGix91utxkqYDTYGPOAiAo9tnIimg3BR4GNMTeI+FOVisgfAHgyxqyccxkRPYjIh/DbmXnWp3oU2Fr7BACfNKGIzJxz62byNE2XAU5E0z7VR8GVunsRqc8REecAoGbKReRzWxEiaqwWp2slIvVZI2KeJMm3PM9z3TwKttauAOB+yCRj9kXk0Tn3PATW33g3JvFQLCJ+LIpi+X+CJ5PJ7eFwaN/TIVHlPhGp69UDr5sfRCmOIvQEWWsV/C4KrE5uVzmmAGPMr+Da5tUKOToVR3SkmBo2zDzVwGhwV2AMqR3DzOUVPQmsXakyibbBt10FVC1TG4qaqY47F/zGObdVZ3vvtTd3re/MXILTNH0OBZ4FBoD3zFy2xGMdrNmLjTE5Ir7S+HPB2yRJpi2H6husr9OaiJbhAWg+HJcAa44VMy/6DNZ1FOcqDryNiCz0vNsFtJWG/UuBmwXoa6UOvhERNVVnO700OPpKD4AXRVGUAur3+B80kC/MHIaEy4K1qej8FfN7asXVqPM75qOemBeq+nK9GH0q+LyanUbV4L3fhrEm5sNRU2ZMwtiYq4H/Au+xjy5ZC3RhAAAAAElFTkSuQmCC"/>
        <button aria-label="<%= word %>" class="h-button centered" data-text="Add" onClick={() => setContador(contador+1)}><span>Added</span></button>
      </div>
  )
}

export default ItemListContainer