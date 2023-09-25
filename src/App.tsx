import { CTA, CheckboxRadio, HeadingOne, HeadingTwo, Input, Paragraph, ProductImage, Select } from "./ui";
import styles from './App.module.css';
import { currencyOptions, fenceImages, fenceTypes } from "./componentData";
import creditCardIcon from "./assets/icons/creditcardIcon.svg"
import { CSSProperties, createContext, useEffect, useRef, useState } from "react";

export type fenceDataType = {
  fenceType: string
  width: number
  length: number
  currency: string
  discount: boolean
}
type fenceContextType = {
  fenceContext: fenceDataType | null
  setFenceContext: React.Dispatch<React.SetStateAction<fenceDataType>> | null
}

export const FenceContext = createContext<fenceContextType>({fenceContext: null, setFenceContext: null})

function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
  window.addEventListener('resize', () => {
    setViewportWidth(window.innerWidth)
  })

  const heightStyles: CSSProperties = {
    paddingBlock: (viewportWidth < 1024) ? "var(--s-3) var(--s-3)" : "0 0",
    height: (viewportWidth < 1024) ? "calc(100svh - 99px)" : "",
  }

  const productDescription = useRef<HTMLDivElement>(null)
  const [productDescriptionWidth, setProductDescriptionWidth] = useState("")
  function getProductDescriptionWidth() {
    return window.getComputedStyle(productDescription.current as Element).width
  }
  useEffect(() => {
    setProductDescriptionWidth(getProductDescriptionWidth())
  }, [])
  window.addEventListener('resize', () => setProductDescriptionWidth(getProductDescriptionWidth()))

  const [fenceData, setFenceData] = useState<fenceDataType>({
    currency: "usd",
    discount: false,
    fenceType: "standard",
    length: 0,
    width: 0,
  })

  return (
    <>
    <FenceContext.Provider value={{fenceContext: fenceData, setFenceContext: setFenceData}}>
      <form name="formData">
        <main className={styles.productCard} style={{
          height: heightStyles.height,
          }}>
          <ProductImage source={fenceImages[0].source} imageAlt={fenceImages[0].imageAlt} />

          <div className={styles.productDescription} ref={productDescription}>
            <div className={styles.wrapper}>
              <HeadingOne text="Siatka ogrodowa" />
              <Paragraph text="Najlepszej jakości siatka, tylko w naszym sklepie" />
            </div>

            <div className={styles.wrapper}>
              <HeadingTwo text="Wybierz rodzaj siatki" />
              {
                fenceTypes.map((node, index) => {
                  return <CheckboxRadio id={node.id} labelText={node.labelText} name={node.name} type={node.type} value={node.value} key={index} />
                })
              }
            </div>

            <div className={styles.wrapper}>
              <HeadingTwo text="Podaj wymiary swojego ogrodu w metrach" />
              <div className={styles.inputWrapper}>
                <Input placeholder="szerokość" name="width" />
                <Paragraph text="X" />
                <Input placeholder="długość" name="length" />
              </div>
            </div>
            
            <div className={styles.wrapper}>
              <HeadingTwo text="Wybierz walutę" />
              <Select selectName="currency" optionNodes={currencyOptions}></Select>
            </div>

            <div className={styles.wrapper}>
              <HeadingTwo text="Zniżka dla stałych klientów" />
              <CheckboxRadio id="discount" labelText="Zaznacz aby dostać zniżkę 10%" name="discount" type="checkbox" value={10} />
            </div>
      
            <div className={styles.ctaSectionDesktop}>
              <CTA text="Zapłać" iconPath={creditCardIcon} iconAlt="Credit Card Icon" />
              <p className={styles.priceTag}>$420.69</p>
            </div>
          </div>
        </main>
      
        <section className={styles.ctaSection} style={{ paddingBlock: heightStyles.paddingBlock, width: productDescriptionWidth }}>
          <div className={styles.ctaSectionWrapper}>
            <CTA text="Zapłać" iconPath={creditCardIcon} iconAlt="Credit Card Icon" />
            <p className={styles.priceTag}>$420.69</p>
          </div>
        </section>
      </form>
    </FenceContext.Provider>
    </>
  );
}

export default App;