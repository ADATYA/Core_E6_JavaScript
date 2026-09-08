let name = "T-shirt";
let price = 2599;
let location = "Dhaka";

let message = `I bought a ${name} for ${price} BDT from  ${location}.`;
console.log(message);


//=========================================================================

let type = "Shari";
let quantity = 3;
let totalPrice = 55000;
let wife = "my wife";

let comment = `I bought ${quantity} ${type} for ${wife} with a total price of ${totalPrice} BDT and also I love ${wife} very very much until my last breath.`;
console.log(comment);

console.log(comment);

//=========================================================================

let amount = "25000 BDT";

function addmisionConfirmationMail(name, id, amount,number,email,batch){
    let message = `Dear ${name}, your admission has been confirmed with,
                   ID: ${id}. Please pay the amount of ${amount} 
                   to complete the process. For any queries, 
                   Your batch is ${batch}.
                   contact us at ${number}
                   contact thourhg email ${email}.
                  `
                   return message;
};

console.log(addmisionConfirmationMail("Adi", "12345", 2700, "017XXXXXXXX", "adi@example.com", "Batch-14"));
