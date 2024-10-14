npm install @syncfusion/ej2-react-layouts --save

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-layouts/styles/material.css";


import * as React from "react";
import * as ReactDom from "react-dom";
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline' style={{ height: "350px" }}>
            <TimelineComponent>
                <ItemsDirective>
                    <ItemDirective content='Default' />
                    <ItemDirective content='Icon' dotCss='e-icons e-check' />
                    <ItemDirective content='Image' dotCss='custom-image' />
                    <ItemDirective content='Text' dotCss='custom-text' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));


/* Represents the styles for loader */
#loader {
  color: #008cff;
  height: 40px;
  left: 45%;
  position: absolute;
  top: 45%;
  width: 30%;
}

.e-dot.custom-image {
  background-image: url('./dot-image.png');
}
.e-dot.custom-text::before {
  content: 'A';
}
