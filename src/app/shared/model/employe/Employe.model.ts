import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SocieteDto} from '../avancement/Societe.model';

export class EmployeDto extends BaseDto{

    public code: string;

    public firstname: string;

    public lastname: string;

    public societe: SocieteDto ;
    

    constructor() {
        super();

        this.code = '';
        this.firstname = '';
        this.lastname = '';
        this.societe = new SocieteDto() ;

        }

}
