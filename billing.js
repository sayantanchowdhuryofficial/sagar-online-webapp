
function createBill(){

let pname=document.getElementById("pname").value
let cname=document.getElementById("cname").value
let mobile=document.getElementById("mobile").value
let qty=document.getElementById("qty").value
let money=document.getElementById("money").value

const {jsPDF}=window.jspdf

let doc=new jsPDF()

doc.text("SAGAR ONLINE",20,20)

doc.text("Product: "+pname,20,40)
doc.text("Customer: "+cname,20,50)
doc.text("Mobile: "+mobile,20,60)
doc.text("Quantity: "+qty,20,70)
doc.text("Amount: "+money,20,80)

doc.save("bill.pdf")

}
