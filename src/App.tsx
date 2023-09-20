import { HeadingOne, HeadingTwo, Input, Paragraph } from "./ui";
import { CheckboxRadio } from "./ui/CheckboxRadio";

function App() {
  return (
    <main>
      <HeadingOne text="Hello World"></HeadingOne>
      <HeadingTwo text="Heading 2"></HeadingTwo>
      <Paragraph text="Paragraph"></Paragraph>
      <Input placeholder="Test Number Input 69"></Input>
      <CheckboxRadio type="checkbox" name="test" id="test0" labelText="Test 0"></CheckboxRadio>
    </main>
  );
}

export default App;