function information( day , pub){
    this.timeSpan = new Date(),
    this.id = Math.round(Math.random()*100),
    this.day = day,
    this.nameOfPublisher = pub
}

p1 = new information("monday","ratan")
console.log(p1)

p2 = new information("tuesday","tata")
console.log(p2)