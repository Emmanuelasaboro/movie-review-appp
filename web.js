function fetchData() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=595680909dd7788d5cccfebf7327a74b').then(response => {
        console.log(response);
        if (!response.ok) {
            throw Error('ERROR');
        }
        return response.json();

    })
        .then(data => {
            console.log(data.results);
            const html = data.results.map(movie => {
                return `
                
                <div class="col-md-4"> 
                    <div class="card my-2 p-2" style="height: 100%;">
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="poster image"class="card__img card-img-top embed-responsive-item" />
                        <div class="card__caption mt-4"> 
                            <h1 class="fs-3 text-center" > ${movie.title}</h1>
                            
                            <p class="fw-bold text-muted text-center">Release Date:${movie.release_date}</p>
                            <p class="fw-bold text-muted text-center">Rating: ${movie.vote_average}</p>
                            <p class="fw-bold text-muted text-center">Vote Count: ${movie.vote_count}</p>
                            
                            <!-- Button trigger modal -->
                            <div class="text-center">
                            <button type="button" class="btn btn-outline-primary m-3" data-bs-toggle="modal" data-bs-target="#exampleModal${movie.id}">
                            View More
                          </button>
                            </div>
                            
                            
                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal${movie.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h3 class="modal-title text-danger" id="exampleModalLabel">Title:<div class="text-primary">${movie.title}</div></h3>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    <p class="fw-bold text-danger"> Description:<div class="text-primary">${movie.overview}</div></p>
                                    <p class="fw-bold text-danger">Release Date:<div class="text-primary">${movie.release_date}</div></p>
                                    
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                   
                                  </div>
                                </div>
                              </div>
                            </div>
                        
                        </div>
                        
                    </div>
                </div>
                

                
        
          
          `;
            }).join(" ");

            document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
        }).catch(error => {
            console.log(error);
        })
}

fetchData();

function searchMovie() {
  const query =document.getElementById('#searchbar'); 
  fetch('https://api.themoviedb.org/3/search/movie?api_key=595680909dd7788d5cccfebf7327a74b&query=' + query).then(response => {
   
    if (!response.ok) {
        throw Error('ERROR');
    }
    return response.json();

})


   

    searchMovie();
     





}
