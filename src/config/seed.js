import { addDrug } from "../utils/firebase/database/drug";
import { addRestriction } from "../utils/firebase/database/restriction";
import { addMeal } from "../utils/firebase/database/meal";
import { addRestrictionLevel } from "../utils/firebase/database/restrictionLevel";
import { addPrecaution } from "../utils/firebase/database/precautions";

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
  {
    label: "Feijão preto com frango",
    ingredients: "Frango, pimentão, arroz",
    calories: 390,
  },
  {
    label: "Salada de repolho",
    ingredients: "Frango, pimentão, arroz",
    calories: 390,
  },
  {
    label: "Canja de frango",
    ingredients: "Frango, pimentão, arroz",
    calories: 390,
  },
  {
    label: "Feijão verde com purê",
    ingredients: "Frango, pimentão, arroz",
    calories: 390,
  },
];

const precautions = [
  { label: "Detalhes fraldas", description: "Marca BigFral, tamanho M" },
  { label: "Tipo sabonete", description: "Marca BigFral, tamanho M" },
  { label: "Tecidos roupas", description: "Marca BigFral, tamanho M" },
  { label: "Perfumes", description: "Marca BigFral, tamanho M" },
  { label: "Perfumes", description: "Marca BigFral, tamanho M" },
];

(async () => {
  drugs.forEach(async (drug) => await addDrug(drug));
  restrictions.forEach(
    async (restriction) => await addRestriction(restriction)
  );
  restrictionLevels.forEach(
    async (restrictionLevel) => await addRestrictionLevel(restrictionLevel)
  );
  meals.forEach(async (meal) => await addMeal(meal));
  precautions.forEach(async (precaution) => await addPrecaution(precaution));
})();
