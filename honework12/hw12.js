var userName = 'uworld-sa';
var baseUrl = 'https://api.github.com';
document.addEventListener('DOMContentLoaded',function () {

    document.getElementById('profile').addEventListener('click',function(){
        fetch(`${baseUrl}/users/${userName}`,
            {
                'headers' : {
                    'Authorization' : "token 0f3abf692966289b8062cdb57d15f4524013a2b8"
                }
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(user) {
                getProfile(user);
            })
    });
    document.getElementById('repos').addEventListener('click',function(){
        getRepository();
    });

    function getProfile(user) {
        let info = document.querySelector('.info');
        info.innerHTML = ``;
        let h1 = document.createElement('h1');
        h1.innerHTML = `Мои профайл`;
        info.appendChild(h1);
        let div = document.createElement('div');
        div.innerHTML = `User: ${user.login}<br/>Name: ${user.name}<br/>Created: ${new Date(user.created_at)}<br/>Biography: ${user.bio}`;
        info.appendChild(div);
        info.style.display = "block";
        document.querySelector('.pan-loader').style.display = "none";
    }

    function getCommit(ev) {
        let info = document.querySelector('.info');
        info.style.display = "none";
        document.querySelector('.pan-loader').style.display = "block";
        let el;
        if (ev.target.classList.contains('repository')) {
            el = ev.target;
        } else {
            el = ev.target.parentNode;
        }

        fetch(`${baseUrl}/repos/${userName}/${el.dataset.repoName}/commits`,
            {
                'headers' : {
                    'Authorization' : "token 0f3abf692966289b8062cdb57d15f4524013a2b8"
                }
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(commits) {
                let h1 = document.createElement('h1');
                h1.innerHTML = `Репозиторий ${el.dataset.repoName}`;
                info.innerHTML = ``;
                info.appendChild(h1);
                [].forEach.call(commits, commit => {
                    let div = document.createElement('div');
                    div.classList.add('repository');
                    div.innerHTML = `<div class="message">Message: ${commit.commit.message}</div><div class="Date">Date: ${new Date(commit.commit.committer.date)}</div>`;
                    info.appendChild(div);
                });
                info.style.display = "block";
                document.querySelector('.pan-loader').style.display = "none";
            })
            .catch( alert );
    }

    function getRepository(){
        let info = document.querySelector('.info');
        info.style.display = "none";
        document.querySelector('.pan-loader').style.display = "block";
        fetch(`${baseUrl}/users/${userName}/repos`,
            {
                'headers' : {
                    'Authorization' : "token 0f3abf692966289b8062cdb57d15f4524013a2b8"
                }
            })
        .then(function(response) {
            return response.json();
        })
        .then(function(repos) {
            info.innerHTML = ``;
            let h1 = document.createElement('h1');
            h1.innerHTML = `Мои репозитории`;
            info.appendChild(h1);
            repos.forEach( el => {
                let div = document.createElement('div');
                div.classList.add('repository');
                div.innerHTML = `<div class="reponame">Name: ${el.name}</div><div class="created">Created: ${new Date(el.created_at)}</div>`;
                if (el.language != null) {
                    div.innerHTML +=`<div class="language">Language: ${el.language}</div>`;
                }
                div.addEventListener("click", getCommit);
                div.dataset.repoName = el.name;
                info.appendChild(div);
            });
            info.style.display = "block";
            document.querySelector('.pan-loader').style.display = "none";
        })
        .catch( alert );
    }

    fetch(`${baseUrl}/users/${userName}`,
        {
            'headers' : {
                'Authorization' : "token 0f3abf692966289b8062cdb57d15f4524013a2b8"
            }
        })
    .then(function(response) {
        return response.json();
    })
    .then(function(user) {
        let picture = document.createElement('img');
        picture.src = user.avatar_url;
        let avatar = document.querySelector('.avatar');
        avatar.html = '';
        avatar.appendChild(picture);
        console.log(window.location.hash);
        if (window.location.hash == '' || window.location.hash == "#profile") {
            getProfile(user);
        } else if (window.location.hash == '#repos') {
            getRepository();
        }
    })
    .catch( alert );
});