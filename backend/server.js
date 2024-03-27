const express = require('express')
const app = express()
const port = 3000


app.use((req,res, next)=>{
    console.log("first middleware");
    next()
})

app.get('/', (req, res, next) => {
    console.log("second middleware");
  res.send('Hello World!')
  next()
})


app.get('/two', (req, res) => {
    console.log("third middleware");
    res.send('Hello World 2!')
  })

  
app.get('/two', (req, res) => {
    console.log("third middleware");
    res.send('Hello World 2!')
  })

  app.get('/a', (req, res,next) => {
    setTimeout() => {
        console.log("asynchronouse code");
    }

    catch(err){
        next(er)
    }, 1000)
    next(new Error("some error occured"));
  })

  app.use('/api',apiRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})