import Cl_Cliente from "./Cl_Cliente.js";
export default class Cl_Empresa{
    constructor(){
        this.cont_enpre=0;
        this.acum_pago=0;
        this.aux_cod=0;
        this.menor=Infinity;
    }
    procesar(cli){
        this.acum_pago+=cli.Pago();
if(cli.tipo==2){
    this.cont_enpre++;
}
if(cli.Pago()<this.menor){
    this.aux_cod=cli.cod;
    this.menor=cli.Pago();

}
    }
    Empre(){
        return this.cont_enpre;
    }
    Total(){
        return this.acum_pago;
    }
    MenorCod(){
        return this.aux_cod;
    }
}