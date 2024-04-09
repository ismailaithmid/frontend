import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {SocieteCriteria} from '../avancement/SocieteCriteria.model';

export class EmployeCriteria  extends BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public firstname: string;
    public firstnameLike: string;
    public lastname: string;
    public lastnameLike: string;
  public societe: SocieteCriteria ;
  public societes: Array<SocieteCriteria> ;

}
