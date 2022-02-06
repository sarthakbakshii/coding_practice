const app = require("./index")
const Port = process.env.PORT || 5555

const connection = require("./configs/db")

app.listen(Port, () => {
  try {
    console.log(`Running on ${Port}`)
    connection()
  } catch (error) {
    console.log(error.meassage)
  }
})
