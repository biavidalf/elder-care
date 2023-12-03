import { addDrug } from "../utils/firebase/database/drug";
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
  // precautions.forEach(async ({ title, description }) => {
  //   await addDrug(title, description);
  // });
})();
