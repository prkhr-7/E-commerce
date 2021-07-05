const mongoose = require('mongoose');
const Product= require('./models/product')

const products = [
  {

  name: "iphone",
  img:"https://images.unsplash.com/photo-1611740677496-3e0ef378e189?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  price:69000,
  desc:"The iPhone 12 Pro and iPhone 12 Pro Max are smartphones designed and marketed by Apple Inc. They are the flagship smartphones in the fourteenth generation of the iPhone, succeeding the iPhone 11 Pro and iPhone 11 Pro Max, and were announced on October 13, 2020, with the iPhone 12 Pro being released on October 23, 2020, and the iPhone 12 Pro Max on November 13, 2020. The devices were unveiled alongside the iPhone 12 and iPhone 12 Mini at an Apple Special Event at Apple Park in Cupertino, California on October 13, 2020."

},
  {

  name: "MACbook Air",
  img:"https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hYyUyMGJvb2slMjBwcm98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  price:75000,
  desc:"The MacBook Air is a line of laptop computers developed and manufactured by Apple Inc. It consists of a full-size keyboard, a machined aluminum case, and, in the more modern versions, a thin light structure. The Air was originally positioned above the previous MacBook line as a premium ultraportable.[2] Since then, the original MacBook's discontinuation in 2011, and lowered prices on subsequent iterations, have made the Air Apple's entry-level laptop.[3] In the current product line, the MacBook Air is situated below the performance range MacBook Pro."
  
},
{

  name: "watch",
  img:"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  price:15000,
  desc:"A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain."
  
},
{

   name: "HP laptop",
   img:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aHAlMjBsYXB0b3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
   price:50000,
   desc:"The Hewlett-Packard Company, commonly shortened to Hewlett-Packard (/ˈhjuːlɪt ˈpækərd/ HEW-lit PAK-ərd) or HP, was an American multinational information technology company headquartered in Palo Alto, California, that developed and provided a wide variety of hardware components, as well as software and related services to consumers, small and medium-sized businesses (SMBs) and large enterprises, including customers in the government, health and education sectors. The company was founded in a one-car garage in Palo Alto, California, by Bill Hewlett and David Packard in 1939, and initially produced a line of electronic test and measurement equipment. "
  
},
 {

  name: "Rolex",
  img:"https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9sZXh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  price:45000,
  desc:"Rolex SA is a luxury watch manufacturer based in Geneva, Switzerland.[3] Originally founded as Wilsdorf and Davis by Hans Wilsdorf and Alfred Davis in London, England in 1905, the company registered Rolex as the brand name of its watches in 1908, and became Rolex Watch Co. Ltd."
  
},
{

  name: "BoAT Headphones",
  img:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  price:7000,
  desc:"BoAt is an Indian based consumer electronics brand established in 2015 that markets earphones, headphones stereos, travel chargers and premium rugged cables. Imagine Marketing Services Private Limited, which does business as BoAt, was incorporated in November 2013 by co-founders Sameer Ashok"
  
},
{

  name: "Drone",
  img:"https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRyb25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  price:21000,
  desc:"An unmanned aerial vehicle (UAV) or uncrewed aerial vehicle,[1] commonly known as a drone, is an aircraft without any human pilot, crew or passengers on board. UAVs are a component of an unmanned aircraft system (UAS), which include additionally a ground-based controller and a system of communications with the UAV.[2][3] The flight of UAVs may operate under remote control by a human operator, as remotely-piloted aircraft (RPA), or with various degrees of autonomy, such as autopilot assistance, up to fully autonomous aircraft that have no provision for human intervention"
  
}

]

const seedDB = async ()=>{
  await Product.insertMany(products)
  console.log("DB seeded");


}

module.exports = seedDB;