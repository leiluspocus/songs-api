# Live-Coding : Utiliser un ORM

## Comment démarrer le projet ?

- Cloner le projet sur son ordinateur
- Se placer sur le dossier
- `npm install`
- `npx prisma generate`
- `npx prisma migrate dev`
- `npm run start` pour démarrer le serveur

Tu devrais avoir le message suivant sur ton terminal

```shell
> npm run start
Example app listening on port 8888
```

Il n'y a pas de live-reload ! A chaque modification du code, tu dois redémarrer l'application 😬

Tu peux alors ouvrir sur un navigateur (ou [Postman](https://www.postman.com/) / [HTTPie](https://httpie.io/) / [Bruno](https://www.usebruno.com/) selon ta préférence) et accéder aux deux URLs suivantes :

- http://localhost:8888/songs
