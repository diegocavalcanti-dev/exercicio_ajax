document.addEventListener("DOMContentLoaded", function() {
    const diego = "diegocavalcanti-dev";
    const endpoint = `https://api.github.com/users/${diego}`;

    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar dados do GitHub");
            }
            return response.json();
        })
        .then(data => {
            document.querySelector('.profile-avatar').src = data.avatar_url;
            document.querySelector('.profile-name').textContent = data.name;
            document.querySelector('.profile-username').textContent = `@${data.login}`;
            document.querySelector('.numbers-item:nth-child(1)').innerHTML = `<h4>Repositórios</h4> ${data.public_repos}`;
            document.querySelector('.numbers-item:nth-child(2)').innerHTML = `<h4>Seguidores</h4> ${data.followers}`;
            document.querySelector('.numbers-item:nth-child(3)').innerHTML = `<h4>Seguindo</h4> ${data.following}`;
            document.querySelector('.profile-link').href = data.html_url;
        })
        .catch(error => {
            console.error("Erro:", error);
        });
});
