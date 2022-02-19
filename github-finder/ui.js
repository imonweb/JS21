class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }


  // display profiles
  showProfile(user){
    // console.log(user);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div className="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div className="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}></span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}></span>
            <span class="badge badge-success">Followers: ${user.followers}></span>
            <span class="badge badge-info">Following: ${user.following}></span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.locationn}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // show alert message
  showAlert(message, className){
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);
  }

  // clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}