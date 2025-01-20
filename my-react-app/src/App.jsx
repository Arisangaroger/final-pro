import Buttons from "./components/Buttons";
import Alert from "./components/Alert"
import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {

  const items = ['congo', 'rwanda','Aaron','Geofrey','Roger','Abaconnar'];

const [alertVisible, setAlertVisible] = useState(false)

  return (
    <div>
     <ListGroup heading="Cities" items={items}/>
    </div>
  );
}
export default App;
