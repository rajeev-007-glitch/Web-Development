// var company = new Object();
// company.name = "Tesla";
// company.ceo = new Object();
// company.ceo.firstname = "Elon";
// company.ceo.favcolor = "Red";

// console.log(company);
// console.log("company CEO name is: " + company.ceo.firstname);
// console.log(company["name"]);
// var stockPropName = "stocks of company";
// company[stockPropName] = 110;

// console.log("Stock price is: " + company[stockPropName]);

var Tesla = {
    name: "Tesla",
    ceo: {
        firstName: "Elon",
        favColor: "blue"
    },
    "Stock of company": 500
};

console.log(Tesla);