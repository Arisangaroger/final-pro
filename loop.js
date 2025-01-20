function odd(number){
for (let i = 0; i < number.length; i++){
  if (number[i] % 2 !== 0){
    console.log(number[i])
  }
}
}
let numbers = [1,5,6,7,8,9,10]
odd(numbers);



function checkvowel(name){
  let vowels = ['a','e','i','o','u']
  let vowelList = ""
  for(let i =0; i < name.length; i++){
    let char = name[i]
    for (let j = 0; j < vowels.length; j++){
      if ( char == vowels[j]){
         vowelList += char + ", "
        break;
        
      }
      
    }
    
  }
  console.log(vowelList)
}

checkvowel("aaaaaa")





function removeVowels(name){
  const vowels = ['a','e','i','o','u']
  let newName = ""
  //loop through the name
  for(let i = 0; i<name.length; i++){
      let isVowel = false
      for(let j=0; j<vowels.length; j++){
          if(name[i]==vowels[j]){
              console.log(name[i] +" is a vowel")
              isVowel = true
              break
          }
      }
      if(isVowel == false){
          newName = newName+name[i]
      }
  }
  console.log(newName)
}
removeVowels("Derrick Eric")