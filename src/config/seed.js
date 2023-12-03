import { addDrug } from "../utils/firebase/database/drug";
import { addRestriction } from "../utils/firebase/database/restriction";
import { addMeal } from "../utils/firebase/database/meal";
import { addRestrictionLevel } from "../utils/firebase/database/restrictionLevel";
// import { addPrecaution } from "../utils/firebase/database/drug";

const drugs = [
  {
    name: "Losartana",
    maximumDailyDosage: 2,
    fastingBefore: 1,
    fastingAfter: 1,
    treatment: "Diabetes",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Glicazida",
    maximumDailyDosage: 2,
    fastingBefore: 1,
    fastingAfter: 1,
    treatment: "Diabetes",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Sinvastatina",
    maximumDailyDosage: 2,
    fastingBefore: 1,
    fastingAfter: 1,
    treatment: "Diabetes",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Dipirona",
    maximumDailyDosage: 2,
    fastingBefore: 1,
    fastingAfter: 1,
    treatment: "Diabetes",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Paracetamol",
    maximumDailyDosage: 2,
    fastingBefore: 1,
    fastingAfter: 1,
    treatment: "Diabetes",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Ibuprofeno",
    maximumDailyDosage: 2,
    fastingBefore: 1,
    fastingAfter: 1,
    treatment: "Diabetes",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Atorvastatina",
    maximumDailyDosage: 2,
    fastingBefore: 1,
    fastingAfter: 1,
    treatment: "Diabetes",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Omeprazol",
    maximumDailyDosage: 2,
    fastingBefore: 1,
    fastingAfter: 1,
    treatment: "Diabetes",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Aspirina",
    maximumDailyDosage: 2,
    fastingBefore: 1,
    fastingAfter: 1,
    treatment: "Diabetes",
    sideEffects: "Tontura, enjôo",
  },
];

const restrictions = [
  {
    label: "Intolerância à lactose",
    color: "RED",
    suggestion: "Vá ao médico.",
  },
  {
    label: "Alergia à amendoim",
    color: "LIGHT_GREEN",
    suggestion: "Vá ao médico.",
  },
  {
    label: "Alergia à frutos do mar",
    color: "YELLOW",
    suggestion: "Vá ao médico.",
  },
  { label: "Alergia à glúten", color: "RED", suggestion: "Vá ao médico." },
];

const restrictionLevels = [
  { label: "Leve", value: "LIGHT_GREEN" },
  { label: "Médio", value: "YELLOW" },
  { label: "Grave", value: "RED" },
];

const meals = [
  { label: "Feijão preto com frango" },
  { label: "Salada de repolho" },
  { label: "Canja de frango" },
  { label: "Feijão verde com purê" },
];

// const precautions = [
//   {
//     title: "Fralda",
//     description: "Marca BigFral, tamanho M",
//   },
//   {
//     title: "Tipo sabonete",
//     descriptions: "Sabonetes líquidos com pH fisiológico",
//   },
// ];

(async () => {
  drugs.forEach(async (drug) => await addDrug(drug));
  restrictions.forEach(
    async (restriction) => await addRestriction(restriction)
  );
  restrictionLevels.forEach(
    async (restrictionLevel) => await addRestrictionLevel(restrictionLevel)
  );
  meals.forEach(async (meal) => await addMeal(meal));
  // precautions.forEach(async ({ title, description }) => {
  //   await addDrug(title, description);
  // });
})();
