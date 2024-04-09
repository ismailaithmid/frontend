import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class RedevableCriteria  extends BaseCriteria  {

    public id: number;
    public cin: string;
    public cinLike: string;
    public nom: string;
    public nomLike: string;
    public prenom: string;
    public prenomLike: string;

}
