const API_KEY = "add your OpenAI API key here";
const submitIcon = document.querySelector("#submit-icon");

const getImages = () => {
  const options = {
    method: "POST",
    headers: {
      'Authorization':`Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "prompt": "", 
      "n": 4,
      "size": "1024x1024"
    })

  }
  try{
    fetch('https://api.openai.com/v1/images/completions', options);

  } catch (error){
    console.error(error); //or put console.log(error)
  }

}



submitIcon.addEventListener('click', getImages);