import Cl_Cliente from "./Cl_Cliente.js";
import Cl_Empresa from "./Cl_Empresa.js";
let cli1= new Cl_Cliente(888, 1, 150, 120);
let cli2= new Cl_Cliente(777, 2, 250, 150);
let cli3= new Cl_Cliente(999, 2, 250, 100);
let cli4= new Cl_Cliente(333, 1, 160, 110);
let cli5= new Cl_Cliente(111, 1, 180, 110);
let emp = new Cl_Empresa();
emp.procesar(cli1);
emp.procesar(cli2);
emp.procesar(cli3);
emp.procesar(cli4);
emp.procesar(cli5);

let salida=document.getElementById("salida");
salida.innerHTML=`
<br> el cliente con codigo ${cli1.cod} consumio ${cli1.Imp()} pago ${cli1.Pago()}
<br> el cliente con codigo ${cli2.cod} consumio ${cli2.Imp()} pago ${cli2.Pago()}
<br> el cliente con codigo ${cli3.cod} consumio ${cli3.Imp()} pago ${cli3.Pago()}
<br> el cliente con codigo ${cli4.cod} consumio ${cli4.Imp()} pago ${cli4.Pago()}
<br> el cliente con codigo ${cli5.cod} consumio ${cli5.Imp()} pago ${cli5.Pago()}
<br> La cantidad de clientes Empresariales es de ${emp.Empre()}
<br> El Total pagado fue de ${emp.Total()}
<br> El cliente que paso menos fue ${emp.MenorCod()}   




`;