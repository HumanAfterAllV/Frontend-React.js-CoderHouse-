import { useState } from "react";

const ItemListContainer = () => {
  const [contador, setContador] = useState(0) 
  return (
      <div className="bagCounter">
        <p>{contador}</p>
        <img className="header__Nav--Icon__element--bag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAUlJREFUSEvtltFNxDAQRN9UAFQAVMBRAVwHlAAVQAdQAlTAdQAdwHUAHRwdQAWDFjkiySWyE0WKQLdfiezs2x3b8YiZQjNxGQy2vQ+cAAsgnl8lrYc2MAhs+wJ4TMA66xO4kvRcWkAx2PYdcJtJHPBVCbwIbPsceEkJv4CbkDi9x9g9sJfel5Kqsd4aSsGR6AwI6ELSpp7R9hHwluCx5stc16Vgp0QPkqLbrbAdXV+ngQNJse7jO27J3Ctj2nhPpXJnOx4Aru+D7Do3wOmMxiaKMzplbCQd1xO2wfWqpwRHroYKJeAPoDqbl8BhT0W5eYPBa0mhBLarY9XFzs37O+Cp1npwxzvwWAV2Uv8q1/ovj5W077ud1P9f6lNJYY9+YssI2A4/1XcDjd1w75Iad3wXOEx6+OcwcFNEeK9V24Nlrc8U5K4cs4G/AQwPtB/XH9xgAAAAAElFTkSuQmCC"/>
        <button aria-label="<%= word %>" class="h-button centered" data-text="Add" onClick={() => setContador(contador+1)}><span>Added</span></button>
      </div>
  )
}

export default ItemListContainer