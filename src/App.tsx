import { HeadingOne, HeadingTwo, Input, Paragraph } from "./ui";

function App() {
  return (
    <main>
      <HeadingOne text="Hello World"></HeadingOne>
      <HeadingTwo text="Heading 2"></HeadingTwo>
      <Paragraph text="Paragraph"></Paragraph>
      <Input placeholder="szerokość"></Input>
    </main>
  );
}

export default App;