(function () {
  var statusText = document.getElementById('statusText');
  if (!statusText) return;

  fetch('https://api.github.com/users/itsjamestom')
    .then(function (res) {
      if (!res.ok) throw new Error('request failed');
      return res.json();
    })
    .then(function (data) {
      var repoCount = data.public_repos;
      var joinYear = new Date(data.created_at).getFullYear();
      if (typeof repoCount === 'number' && !Number.isNaN(joinYear)) {
        statusText.textContent =
          'online \u00B7 ' + repoCount + ' public repos \u00B7 on GitHub since ' + joinYear;
      }
    })
    .catch(function () {
      // GitHub API unreachable or rate-limited — keep the default "online" text.
    });
})();
