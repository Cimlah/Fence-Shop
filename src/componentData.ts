import { CheckboxRadioProps, ImageProps, SelectOptionType } from "./ui";
import standardFenceImage from "./assets/images/standard_fence.jpg"
import coatedFenceImage from "./assets/images/coated_fence.jpg"
import galvanisedFenceImage from "./assets/images/galvanised_fence.jpg"

const fenceImages: ImageProps[] = [
    {
        source: standardFenceImage,
        imageAlt: "Standard Fence | Image by alicia_mb on Freepik",
    },
    {
        source: coatedFenceImage,
        imageAlt: "Coated Fence | Image by victor217 on Freepik",
    },
    {
        source: galvanisedFenceImage,
        imageAlt: "Galvanised Fence | Image by Freepik",
    },
]

const fenceTypes: CheckboxRadioProps[] = [
    {
        type: "radio",
        name: "fenceType",
        labelText: "Standard",
        id: "standard",
        value: "standard",
    },
    {
        type: "radio",
        name: "fenceType",
        labelText: "Ocynkowana",
        id: "galvanised",
        value: "galvanised",
    },
    {
        type: "radio",
        name: "fenceType",
        labelText: "Powlekana",
        id: "coated",
        value: "coated",
    },
]

const currencyOptions: SelectOptionType[] = [
    {
        optionText: "USD",
        value: "usd",
        exchangeRate: 4.3,
    },
    {
        optionText: "EUR",
        value: "eur",
        exchangeRate: 4.6,
    },
    {
        optionText: "PLN",
        value: "pln",
        exchangeRate: 1,
    },
]

export { fenceImages, fenceTypes, currencyOptions }