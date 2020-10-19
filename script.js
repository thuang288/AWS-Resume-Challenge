const countEl = document.getElementById('VisitorCount');
updateCount();

function updateCount(){
    fetch('https://oeplklbde1.execute-api.us-east-2.amazonaws.com/Prod/counter',{
        method: 'GET'
    })
  .then(response => {
    if (
        response.ok 
    ) {
      return response.json()
    } else {
      throw new Error('something went wrong');
    }
  })
  .then(data => countEl.innerText = data.Visit_Count)
    
  
}
