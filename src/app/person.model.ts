export interface Person {
    id: number;
    name: string;
    birthDate: Date;
    birthPlace: string;
    motherName: string;
    fatherName: string;
    deathDate?: Date;
    deathPlace?: string;
    children?: Person[];
  }
  