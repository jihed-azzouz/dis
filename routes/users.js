const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const User = require('../models/user.js')
const str= "False";
//getAll
/*router.get('/', (req,res) => {
  fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=11f49776914049a4ff81955dc2124afa'
  )
  .then(response => response.json()).then(data => console.log(data.list[0].clouds))
  
})*/
router.get('/', (req,res) => {
   

      fetch('https://opentdb.com/api.php?amount=6&category=21&difficulty=medium&type=boolean'
    ).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        
        data.results.forEach(item => {
            
           console.log(item.correct_answer,str,str==item.correct_answer)
         })
   
      })
      .catch(error => {
        console.error('Fetch error:', error)
      })
    //.then(response => response.json()).then(data.forEach(item => { console.log(item)}))
   


  })
//getOne

//createOne
router.post('/',(req,res) => {
    
        
    })
//updateOne
router.patch('/',(req,res) => {
        
            
        })

//deleteOne
router.delete('/:id',(req,res) => {
         
                
            })       




module.exports  = router