const companies = [
	{name: "Company One", category: "Finance", start: 1981, end: 2003},
	{name: "Company Two", category: "Retail", start: 1992, end: 2008},
	{name: "Company Three", category: "Auto", start: 1999, end: 2007},
	{name: "Company Four", category: "Retail", start: 1989, end: 2010},
	{name: "Company Five", category: "Technology", start: 2009, end: 2014},
	{name: "Company Six", category: "Finance", start: 1987, end: 2010},
	{name: "Company Seven", category: "Auto", start: 1986, end: 1996},
	{name: "Company Eight", category: "Technology", start: 2011, end: 2016},
	{name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
 

// sort

const sortedCompanies = companies.sort(function(c1, c2){
  if(c1.start > c2.start){
    return 1;
  } else {
    return -2
  }
})

// short method
//
//const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1))
//
//console.log(sortedCompanies)

console.log(sortedCompanies)
 
 

 // sort ages
const sortAges = ages.sort((a,b) => a - b );
console.log(sortAges)

 //create array of company names
//const companyNames = companies.map(function(company){
//	return company.name;
//})

//const testMap = companies.map(function(company){
//	return `${company.name} [${company.start} - ${company.end}]`;
//})

//const testMap = companies.map(company  => `${company.name} [${company.start} - ${company.end}]`)

const agesSquare = ages.map(age => Math.sqrt(age));

console.log(agesSquare)