async function renderEventLists() {
  const eventlistAPI = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/events`)
  const response = await eventlistAPI.json();
  const eventListtosort = response.data;
  eventListtosort.forEach(event => {
    const eventLi = document.createElement(`li`);
    eventLi.innerHTML = `
    <h3>${event.name}</h3>
    <h3>Date/Time:</h3><p>${event.date}</p>
    <h3>Location:</h3><p>${event.location}</p>
    <h3>Description:</h3><p>${event.description}</p>
    `
    const partyOL = document.querySelector(`ol`);
    partyOL.append(eventLi);
    console.log(eventLi);
    
  });
};
renderEventLists();