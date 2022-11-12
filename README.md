<div align="center">
<h1>DrivenPass</h1>
<p>
<img src="https://images.emojiterra.com/google/android-10/512px/1f512.png" alt="Lock emoji" width=200px/>
</p>
<br>
<p > <b>The DrivenPass project is a password manager API<b> </p>
 
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NODE.JS](https://camo.githubusercontent.com/2e5a624f533563052290ad30aed4ecc1092945a458c80cd753d108807e0293b5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f6465206a732532302d2532333230323332612e7376673f267374796c653d666f722d7468652d626164676526636f6c6f723d333339393333266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d666666666666)    ![EXPRESS](https://camo.githubusercontent.com/56960eb8a4e655c887ee533f3d6b29ad57255c69a3e07b0455f29af3ad4947fd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732532302d2532333230323332612e7376673f267374796c653d666f722d7468652d626164676526636f6c6f723d303030303030266c6f676f3d45787072657373266c6f676f436f6c6f723d666666666666)
 

 </div>
 
 ## INSTALLATION
 
 ```
# Clone this repository
$ git clone https://github.com/Rodolpho-Oliveira/projeto19-drivenpass.git

# Go into the repository
$ cd projeto19-drivenpass

# Install dependencies
$ npm install

 ```
 
 ## USAGE
 
 POST ```/signup```<br>
 
 Need to receive through the body a parameter ```email``` and a ```password```<br>
 
 ```
 {
    email: "test@test.com",
    password: "test"
 }
 ```
 
 POST ```/signin```<br>
 
 Need to receive through the body a parameter ```email``` and a ```password``` <br>
 
 ```
 {
    email: "test@test.com",
    password: "test"
 }
 ```
 
 POST ```/card/create```<br>
 
 Need to receive through the body a parameter ```id```, ```title```, ```securityCode```, ```number```, ```name```, ```password```, ```expirationDate```, ```isVirtual``` and ```type```
 and through the header a parameter ```'Authorization'```
 
 ```
   {
      title: "test",
      securityCode: "123" ,
      number: "21982939281",
      name: "test",
      password: "test",
      expirationDate: "12/12/22",
      isVirtual: true,
      type: "credit" (types: credit, debit, credit and debit)
   }
 ```
 
 GET ```/card```<br>
 
 Need to receive through the body a parameter ```id``` and through the header a parameter ```'Authorization'```
 ```
   {
      id: 1
   }
 ```
 
 DELETE ```/card/:id```<br>
 
 Need to receive through the URL a parameter ```id``` and through the header a parameter ```'Authorization'```
 
 
 POST ```/credential/create```<br>
 
 Need to receive through the body a parameter ```url```, ```username```, ```password```, ```label``` and through the header a parameter ```'Authorization'```
 ```
   {
     url: "http://www.google.com",
     username: "test",
     password: "test",
     label: "test"
   }
 ```
 
 GET ```/credential```<br>
 
 Need to receive through the body a parameter ```label``` and through the header a parameter ```'Authorization'```
 ```
   {
     label: "test"
   }
 ```
 
 DELETE ```/credential/:id```<br>
 
 Need to receive through the URL a parameter ```id``` and through the header a parameter ```'Authorization'```
 
 POST ```/securenotes```<br>
 
 Need to receive through the body a parameter ```title``` and ```note``` and through the header a parameter ```'Authorization'```
 ```
   {
     title: "test",
     note: "test"
   }
 ```
 
 GET ```/securenote```<br>
 
 Need to receive through the body a parameter ```id``` and through the header a parameter ```'Authorization'```
 ```
   {
      id: 1
   }
 ```
 
  
 DELETE ```/securenotes/:id```<br>
 
 Need to receive through the URL a parameter ```id``` and through the header a parameter ```'Authorization'```
 
 
  POST ```/wifi/create```<br>
 
 Need to receive through the body a parameter ```name```, ```password``` and ```title``` and through the header a parameter ```'Authorization'```
 ```
   {
     title: "test",
     password: "test",
     name: "test"
   }
 ```
 
  GET ```/wifi```<br>
 
 Need to receive through the body a parameter ```id``` and through the header a parameter ```'Authorization'```
 ```
   {
      id: 1
   }
 ```
 
 DELETE ```/wifi/:id```<br>
 
 Need to receive through the URL a parameter ```id``` and through the header a parameter ```'Authorization'```
