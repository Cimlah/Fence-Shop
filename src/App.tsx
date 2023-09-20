import { HeadingOne, HeadingTwo, Input, Paragraph, Select, SelectOptionType } from "./ui";
import { CheckboxRadio } from "./ui/CheckboxRadio";

function App() {
  const currencyOptions: SelectOptionType[] = [
    {
      optionText: "USD",
      exchangeRate: 4.3,
      value: "usd",
    },
    {
      optionText: "EUR",
      exchangeRate: 4.6,
      value: "eur",
    },
    {
      optionText: "PLN",
      exchangeRate: 1,
      value: "pln",
    },
  ]

  return (
    <main>
      <HeadingOne text="Hello World"></HeadingOne>
      <HeadingTwo text="Heading 2"></HeadingTwo>
      <Paragraph text="Paragraph"></Paragraph>
      <Input placeholder="Test Number Input 69"></Input>
      <CheckboxRadio type="checkbox" name="test" id="test0" labelText="Test 0"></CheckboxRadio>
      <Select selectName="testSelect" optionNodes={currencyOptions}></Select>
    </main>
  );
}

export default App;