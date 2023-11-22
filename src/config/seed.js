import { addDrug } from "../utils/firebase/database/drug";

const drugs = [
  {
    name: "Losartana",
    maximumDailyDosage: "Dosagem máxima diária de 2 unidades",
    treatment: "Diabetes",
    fastingPeriod: "30min de jejum depois",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Glicazida",
    maximumDailyDosage: "Dosagem máxima diária de 2 unidades",
    treatment: "Diabetes",
    fastingPeriod: "30min de jejum depois",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Sinvastatina",
    maximumDailyDosage: "Dosagem máxima diária de 2 unidades",
    treatment: "Diabetes",
    fastingPeriod: "30min de jejum depois",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Dipirona",
    maximumDailyDosage: "Dosagem máxima diária de 2 unidades",
    treatment: "Diabetes",
    fastingPeriod: "30min de jejum depois",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Paracetamol",
    maximumDailyDosage: "Dosagem máxima diária de 2 unidades",
    treatment: "Diabetes",
    fastingPeriod: "30min de jejum depois",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Ibuprofeno",
    maximumDailyDosage: "Dosagem máxima diária de 2 unidades",
    treatment: "Diabetes",
    fastingPeriod: "30min de jejum depois",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Atorvastatina",
    maximumDailyDosage: "Dosagem máxima diária de 2 unidades",
    treatment: "Diabetes",
    fastingPeriod: "30min de jejum depois",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Omeprazol",
    maximumDailyDosage: "Dosagem máxima diária de 2 unidades",
    treatment: "Diabetes",
    fastingPeriod: "30min de jejum depois",
    sideEffects: "Tontura, enjôo",
  },
  {
    name: "Aspirina",
    maximumDailyDosage: "Dosagem máxima diária de 2 unidades",
    treatment: "Diabetes",
    fastingPeriod: "30min de jejum depois",
    sideEffects: "Tontura, enjôo",
  },
];

(async () => {
  drugs.forEach(
    async ({
      name,
      maximumDailyDosage,
      treatment,
      fastingPeriod,
      sideEffects,
    }) => {
      await addDrug(
        name,
        maximumDailyDosage,
        treatment,
        fastingPeriod,
        sideEffects
      );
    }
  );
})();
