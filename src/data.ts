import { Disease } from "./models/Disease";
import { Recomendation } from "./models/Recomendation";

/*
export const recomendations: Recomendation[] = [
    new Recomendation(1, 1, 'Rastreio', 1, 'Recomendacao de rastreio 1'),
    new Recomendation(2, 1, 'Rastreio', 2, 'Recomendacao de rastreio 2'),
    new Recomendation(3, 1, 'Diagnóstico', 1, 'Recomendacao de Diagnostico 1'),
    new Recomendation(3, 1, 'Diagnóstico', 2, 'Recomendacao de Diagnostico 2'),
    new Recomendation(3, 1, 'Diagnóstico', 3, 'Recomendacao de Diagnostico 3'),
    new Recomendation(3, 1, 'Tratamento', 1, 'Recomendacao de Tratamento 1'),
    new Recomendation(3, 1, 'Tratamento', 2, 'Recomendacao de Tratamento 2'),
    new Recomendation(3, 1, 'Tratamento', 3, 'Recomendacao de Tratamento 3'),
    new Recomendation(3, 1, 'Monitoramento', 1, 'Recomendacao de Monitoramento 1'),
    new Recomendation(3, 1, 'Comorbidade', 1, 'Recomendacao de Comorbidade 1'),
    new Recomendation(3, 1, 'Comorbidade', 2, 'Recomendacao de Comorbidade 2'),
    new Recomendation(3, 1, 'Comorbidade', 3, 'Recomendacao de Comorbidade 3'),
    new Recomendation(3, 1, 'Comorbidade', 4, 'Recomendacao de Comorbidade 4'),
    new Recomendation(3, 1, 'Comorbidade', 5, 'Recomendacao de Comorbidade 5'),
    new Recomendation(3, 1, 'Idoso', 1, 'Recomendacao de Idoso 1'),
    new Recomendation(3, 1, 'Idoso', 2, 'Recomendacao de Idoso 2'),
    new Recomendation(3, 1, 'Idoso', 3, 'Recomendacao de Idoso 3'),
    new Recomendation(3, 2, 'Rastreio', 1, 'Recomendacao de rastreio 1'),
    new Recomendation(3, 2, 'Rastreio', 2, 'Recomendacao de rastreio 2'),
    new Recomendation(3, 2, 'Diagnóstico', 1, 'Recomendacao de Diagnostico 1'),
    new Recomendation(3, 2, 'Diagnóstico', 2, 'Recomendacao de Diagnostico 2'),
    new Recomendation(3, 2, 'Diagnóstico', 3, 'Recomendacao de Diagnostico 3'),
    new Recomendation(3, 2, 'Tratamento', 1, 'Recomendacao de Tratamento 1'),
    new Recomendation(3, 2, 'Tratamento', 2, 'Recomendacao de Tratamento 2'),
    new Recomendation(3, 2, 'Tratamento', 3, 'Recomendacao de Tratamento 3'),
    new Recomendation(3, 2, 'Monitoramento', 1, 'Recomendacao de Monitoramento 1'),
    new Recomendation(3, 2, 'Comorbidade', 1, 'Recomendacao de Comorbidade 1'),
    new Recomendation(3, 2, 'Comorbidade', 2, 'Recomendacao de Comorbidade 2'),
    new Recomendation(3, 2, 'Comorbidade', 3, 'Recomendacao de Comorbidade 3'),
    new Recomendation(3, 2, 'Comorbidade', 4, 'Recomendacao de Comorbidade 4'),
    new Recomendation(3, 2, 'Comorbidade', 5, 'Recomendacao de Comorbidade 5'),
    new Recomendation(3, 2, 'Idoso', 1, 'Recomendacao de Idoso 1'),
    new Recomendation(3, 2, 'Idoso', 2, 'Recomendacao de Idoso 2'),
    new Recomendation(3, 2, 'Idoso', 3, 'Recomendacao de Idoso 3'),
    new Recomendation(3, 3, 'Rastreio', 1, 'Recomendacao de rastreio 1'),
    new Recomendation(3, 3, 'Rastreio', 2, 'Recomendacao de rastreio 2'),
    new Recomendation(3, 3, 'Diagnóstico', 1, 'Recomendacao de Diagnostico 1'),
    new Recomendation(3, 3, 'Diagnóstico', 2, 'Recomendacao de Diagnostico 2'),
    new Recomendation(3, 3, 'Diagnóstico', 3, 'Recomendacao de Diagnostico 3'),
    new Recomendation(3, 3, 'Tratamento', 1, 'Recomendacao de Tratamento 1'),
    new Recomendation(3, 3, 'Tratamento', 2, 'Recomendacao de Tratamento 2'),
    new Recomendation(3, 3, 'Tratamento', 3, 'Recomendacao de Tratamento 3'),
    new Recomendation(3, 3, 'Monitoramento', 1, 'Recomendacao de Monitoramento 1'),
    new Recomendation(3, 3, 'Comorbidade', 1, 'Recomendacao de Comorbidade 1'),
    new Recomendation(3, 3, 'Comorbidade', 2, 'Recomendacao de Comorbidade 2'),
    new Recomendation(3, 3, 'Comorbidade', 3, 'Recomendacao de Comorbidade 3'),
    new Recomendation(3, 3, 'Comorbidade', 4, 'Recomendacao de Comorbidade 4'),
    new Recomendation(3, 3, 'Comorbidade', 5, 'Recomendacao de Comorbidade 5'),
    new Recomendation(3, 3, 'Idoso', 1, 'Recomendacao de Idoso 1'),
    new Recomendation(3, 3, 'Idoso', 2, 'Recomendacao de Idoso 2'),
    new Recomendation(3, 3, 'Idoso', 3, 'Recomendacao de Idoso 3')
]

export const diseases: Disease[] = [
    new Disease(1, 'Hipertensão'),
    new Disease(2, 'Anemia'),
    new Disease(3, 'Asma'),
    new Disease(4, 'Diabete')
]

*/