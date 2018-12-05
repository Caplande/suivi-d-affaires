export class Domaine {
  id: number;
  domaine: string;
}

export class SousDomaine {
  id: number;
  sousDomaine: string;
}

export class Nature {
  id: number;
  nature: string;
}

export class Statut {
  id: number;
  statut: string;
}
export class SujetComplet {
  id: number;
  objet: string;
  inscription: Date;
  qui: string;
  nature: string;
  domaine: string;
  sousDomaine: string;
  statut: string;
  dateVersion: Date;
  contenuVersion: string;
  porteurVersion: string;
  delaiVersion: string;
}

export const titreForm =
  'Gestion des comptes-rendus du Conseil Syndical de la copropriété Monica';
export const titreOnglet = 'Gestion de comptes-rendus';
