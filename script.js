let url = "https://kontests.net/api/v1/all"

//response always returns a promise (remember)
let response = fetch(url)
response.then((value) =>{
  return value.json()
}).then((value) => {
  console.log(value)
  iHTML =""
  for(item in value){
    console.log(value[item])
    iHTML += `
    <div class="card" style="width: 22rem;">
        <img src="https://thumbs.dreamstime.com/z/professional-development-programmer-working-programming-website-software-coding-technology-writing-codes-data-code-132331729.jpg?w=992" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${value[item].name}</h5>
          <p class="card-text">Status is ${value[item].status} and site is ${value[item].site}</p>
          <p class="card-text">In 24 Hours? ${value[item].in_24_hours}</p>
          <p>Starts at: ${value[item].start_time}</p>
          <p>Ends at: ${value[item].end_time}</p>
          <a href="${value[item].url}" class="btn btn-primary">Visit here</a>
        </div>
      </div>
    `
  }
cardContainer.innerHTML = iHTML
})
