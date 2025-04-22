import './App.css'
import { Button, Input} from '@gobolt/genesis'
import { Typography, GENESIS } from "@gobolt/genesis";

const { THEME, TYPOGRAPHY_VARIANT} = GENESIS;
const click = () => {
  alert(`HELLO`);
}

function App () {
  return(
    <>
      <Typography themeType="secondary" variant="heading1">hello</Typography>
      <Typography themeType="secondary" variant="label1">please enter a name</Typography>
      <Input></Input>
      <Button onClick={click}>CLICK</Button>
    </>
  )
}
export default App
