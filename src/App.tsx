import { CTA, CheckboxRadio, HeadingOne, HeadingTwo, Input, Paragraph, ProductImage, Select } from "./ui";
import styles from './App.module.css';
import { currencyOptions, fenceImages, fenceTypes } from "./componentData";
import creditCardIcon from "./assets/icons/creditcardIcon.svg"
import { CSSProperties, useState } from "react";

function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
  window.addEventListener('resize', () => {
    setViewportWidth(window.innerWidth)
  })

  const heightStyles: CSSProperties = {
    paddingBlock: (viewportWidth < 1024) ? "var(--s-3) var(--s-3)" : "0 0",
    height: (viewportWidth < 1024) ? "calc(100vh - 99px)" : "",
  }

  return (
    <>
    <main className={styles.productCard} style={{
      height: heightStyles.height,
      }}>
      <ProductImage source={fenceImages[0].source} imageAlt={fenceImages[0].imageAlt} />

      <div className={styles.productDescription}>
        <div className={styles.wrapper}>
          <HeadingOne text="Siatka ogrodowa" />
          <Paragraph text="Najlepszej jakości siatka, tylko w naszym sklepie" />
        </div>

        <div className={styles.wrapper}>
          <HeadingTwo text="Wybierz rodzaj siatki" />
          {
            fenceTypes.map((node, index) => {
              return <CheckboxRadio id={node.id} labelText={node.labelText} name={node.name} type={node.type} key={index} />
            })
          }
        </div>

        <div className={styles.wrapper}>
          <HeadingTwo text="Podaj wymiary swojego ogrodu w metrach" />
          <div className={styles.inputWrapper}>
            <Input placeholder="szerokość" />
            <Paragraph text="X" />
            <Input placeholder="długość" />
          </div>
        </div>

        <div className={styles.wrapper}>
          <HeadingTwo text="Wybierz walutę" />
          <Select selectName="currency" optionNodes={currencyOptions}></Select>
        </div>

        <div className={styles.wrapper}>
          <HeadingTwo text="Zniżka dla stałych klientów" />
          <CheckboxRadio id="discount" labelText="Zaznacz aby dostać zniżkę 10%" name="discount" type="checkbox" />
        </div>
        
        <div className={styles.ctaSectionDesktop}>
          <CTA text="Zapłać" iconPath={creditCardIcon} iconAlt="Credit Card Icon" />
          <p className={styles.priceTag}>$420.69</p>
        </div>
      </div>
    </main>
    
    <section className={styles.ctaSection} style={{ paddingBlock: heightStyles.paddingBlock }}>
      <CTA text="Zapłać" iconPath={creditCardIcon} iconAlt="Credit Card Icon" />
      <p className={styles.priceTag}>$420.69</p>
    </section>
    </>
  );
}

export default App;