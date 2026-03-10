
let dues=JSON.parse(localStorage.getItem("dues")) || []

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

table.innerHTML+=`

<tr>

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
