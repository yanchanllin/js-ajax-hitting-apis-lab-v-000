// your code here
function getRepositories() {
 var username = document.getElementById("username").value
 const req = new XMLHttpRequest()
 req.addEventListener("load", displayRepositories);
req.open("GET", `https://api.github.com/users/${username}/repos`)
req.send()
} 

function getCommits(el) {
  const repo = el.dataset.repository
  const username = el.dataset.username
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayCommits)
  req.open("GET", 'https://api.github.com/repos/' + username + '/' + repo + '/commits')
  req.send()
}