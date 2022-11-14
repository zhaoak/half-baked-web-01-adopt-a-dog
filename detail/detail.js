import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
window.addEventListener('load', async() => {
    // get the id from URL
    getDog(14);
    // use the id to fetch the dog
    // render and append this dog's details to the container
});
