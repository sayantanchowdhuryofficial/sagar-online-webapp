let dues=JSON.parse(localStorage.getItem("dues")) || []

let riskLimit=5000

function addDue(){

let name=document.getElementById("dname").value
let date=document.getElementById("ddate").value
let amount=parseInt(document.getElementById("damount").value)

dues.push({name,date,amount})

saveDue()
renderDue()

}

function renderDue(){

let table=document.getElementById("dueTable")

table.innerHTML=""

dues.forEach(d=>{

let risk=d.amount>riskLimit?"style='background:red'":""

table.innerHTML+=`

<tr ${risk}>

<td>${d.name}</td>
<td>${d.date}</td>
<td>${d.amount}</td>

</tr>

`

})

}

function saveDue(){

localStorage.setItem("dues",JSON.stringify(dues))

}

renderDue()
