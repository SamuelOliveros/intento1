export default class Cl_Cliente{
    constructor(cod, tipo, lec_a, lec_b){
        this.cod=cod;
        this.tipo=tipo;
        this.lec_a=lec_a;
        this.lec_b=lec_b;
    }
    set cod(cod){
this._cod=+cod;
    }
    get cod(){
        return this._cod;
    }
    set tipo(tipo){
        this._tipo=+tipo;
    }
    get tipo(){
        return this._tipo;
    }
    set lec_a(lec_a){
        this._lec_a=+lec_a;
    }
    get lec_a(){
        return this._lec_a;
    }
    set lec_b(lec_b){
        this._lec_b=+lec_b;
    }
    get lec_b(){
        return this._lec_b;
    }
    Imp(){
        return this.lec_a-this.lec_b;
    }
    Pago(){
        if(this.tipo==1){
            return 2*this.Imp();
        } else{
            return 3*this.Imp();
        }
    }
}