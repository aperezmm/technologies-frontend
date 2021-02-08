export interface Technology{
    //Segun el schema de mongo
    _id: string;
    name: string;
    description: string;
    logo: string;
    tags: string[];
    createdAt: any;
    updatedAt: any;
}