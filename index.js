fetch('./projects.json')
    .then(response => response.json())
    .then(projects => populateProjects(projects))
    .catch(error => console.log(error))

const populateProjects = projects => {
    var main = document.querySelector('main')
    projects.forEach(project => {
        const url = document.createElement('a')
        url.setAttribute('href', project.url)
        url.innerText = project.description

        const projectLink = document.createElement('li')
        projectLink.appendChild(url)
        main.appendChild(projectLink)
    })
}
