Når kursholder oppdaterer main:

git checkout main // Bytter til main-branchen lokalt
git pull upstream main // Henter og merger siste endringer fra original-repoet (upstream) sin main
git push origin main // Pusher din oppdaterte main til din fork (origin)

---

Git commands:

git remote -v // Viser hvilke remote-repoer som er koblet til prosjektet (origin, upstream)

git checkout -b ny-branch // Oppretter og bytter til en ny branch
git branch // Viser alle lokale brancher
git switch <branch name> // Bytt til branch ...
git branch -a // Viser både lokale og remote brancher

git add . // Legger til alle endrede filer i staging
git commit -m "melding" // Lager en commit med beskrivelse
git push // Pusher gjeldende branch til origin

git pull // Henter og merger siste endringer fra origin på gjeldende branch
git fetch upstream // Henter endringer fra upstream uten å merge

git status // Viser status på filer (endret, staged, unstaged)
git log --oneline // Viser commit-historikk i kort format

---

Lage ny branch og bytte til den:

git checkout -b ny-branch-navn
