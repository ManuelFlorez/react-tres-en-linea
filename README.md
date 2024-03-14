# Tres en línea

## construir imagen de contenedor

```bash
$docker build -t webserver .
```

## correr el contenedor

```bash
$docker run -it --rm -d -p 8080:80 --name web webserver
```

Abrir en el navegador [http://localhost:8080](http://localhost:8080)
