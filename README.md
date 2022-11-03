## Rodando localmente
```terminal
npm run dev-api
# or
yarn dev-api
```

Aplicação aberta na porta       [http://localhost:3000](http://localhost:3000)
Api de produtor aberta na porta [http://localhost:8000](http://localhost:8000)

```bash
docker compose up
docker-compose up --build --force-recreate
```
Aplicação funcionando com docker porem so esta compartilhando a porta 3000, se a api nao ligar vai dar problema com inversify então e so ligar a api dentro do container rodando fake-api 
```
npm run fake-api
```

Acesse a aplicação em [http://localhost:3000](http://localhost:3000)