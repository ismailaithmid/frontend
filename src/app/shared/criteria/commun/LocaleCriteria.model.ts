import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {RedevableCriteria} from './RedevableCriteria.model';

export class LocaleCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public libelle: string;
    public libelleLike: string;
    public adresse: string;
    public adresseLike: string;
  public redevable: RedevableCriteria ;
  public redevables: Array<RedevableCriteria> ;

}
