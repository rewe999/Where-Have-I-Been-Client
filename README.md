# Where Have I Been - Client App

## Uruchomienie aplikacji w środowisku deweloperskim

**1. Pobranie projektu z repozytorium**

```
git clone https://github.com/Where-Have-I-Been/Where-Have-I-Been-Client.git
```
```
cd where-have-i-been-client
```

**3. Uruchomienie kontenerów dockerowych**

```
docker-compose up -d --build
```

**7. Aplikacja powinna być dostępna na:**

```
http://localhost:8080
```

### Przydatne komendy

**Docker - uruchomienie kontenerów**
```
docker-compose up -d
```

**Docker - zatrzymanie kontenerów**
```
docker-compose stop
```

**Docker - zatrzymanie i usunięcie kontenerów**
```
docker-compose down
```

**Yarn - instalacja zależności**

```
docker-compose exec frontend yarn install
```

**Yarn - hot reload**

```
docker-compose exec frontend yarn serve
```

**Yarn - build**

```
docker-compose exec frontend yarn build
```

**Yarn - dodanie nowej zależności/paczki**

```
docker-compose exec frontend yarn add *
```

gdzie * to nazwa paczki

