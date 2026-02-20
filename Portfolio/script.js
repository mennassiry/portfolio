
   // Array of data for courses (like the original site)
const courses = [
    { title: 'HTML', desc: 'HTML: Les Bases', icon: 'fab fa-html5 text-orange', color: '#e34f26' },
    { title: 'CSS', desc: 'CSS3 et Flexbox', icon: 'fab fa-css3-alt', color: '#1572b6' },
    { title: 'Javascript', desc: 'Introduction à Javascript', icon: 'fab fa-js-square', color: '#f7df1e' },
    { title: 'PHP', desc: 'Les bases de PHP & POO', icon: 'fab fa-php', color: '#777bb4' },
    { title: 'Node JS', desc: 'Node js & programmation asynchrone', icon: 'fab fa-node-js', color: '#339933' },
    { title: 'React JS', desc: 'Introduction à React js', icon: 'fab fa-react', color: '#61dafb' },
    { title: 'Flask', desc: 'Introduction à Flask', icon: 'fas fa-pepper-hot', color: '#000000' }
];

// Array for Playlists
const playlists = [
    { title: 'Javascript', desc: 'Introduction au DOM', videoCount: 12 },
    { title: 'Javascript', desc: 'Events Bubbling vs Capturing', videoCount: 8 },
    { title: 'Flask', desc: 'Flask et CSS / Jinja 2', videoCount: 15 },
    { title: 'Javascript', desc: 'AJAX Introduction & Exemple', videoCount: 5 }
];

// Function to render courses dynamically
function renderCourses() {
    const courseList = document.getElementById('course-list');
    
    courses.forEach(course => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-lg-3';
        col.innerHTML = `
            <div class="card h-100 text-center p-4 shadow-sm">
                <div class="card-body">
                    <i class="${course.icon} fa-4x mb-3" style="color: ${course.color};"></i>
                    <h5 class="card-title fw-bold">${course.title}</h5>
                    <p class="card-text text-muted">${course.desc}</p>
                    <a href="#" class="btn btn-outline-dark btn-sm mt-2">Consulter</a>
                </div>
            </div>
        `;
        courseList.appendChild(col);
    });
}

// Function to render playlists dynamically
function renderPlaylists() {
    const playlistList = document.getElementById('playlist-list');
    
    playlists.forEach(playlist => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        col.innerHTML = `
            <div class="card shadow-sm h-100">
                <div class="card-body d-flex align-items-center">
                    <div class="me-3">
                        <i class="fas fa-play-circle fa-3x text-danger"></i>
                    </div>
                    <div>
                        <h6 class="text-uppercase text-muted mb-1" style="font-size: 0.8rem;">${playlist.title}</h6>
                        <h5 class="card-title mb-1">${playlist.desc}</h5>
                        <small class="text-muted">${playlist.videoCount} Vidéos</small>
                    </div>
                </div>
            </div>
        `;
        playlistList.appendChild(col);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
    renderPlaylists();
}); 
