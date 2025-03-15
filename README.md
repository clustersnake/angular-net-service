# Angular test project

Proyecto de prueba de servicios utilizando angular y .net 

## Tecnologías
- Angular 19
- .net 8
- Tailwind

## Instalación
### Requisitos
- .net 8
- node 22.14.0 (lts)

## Correr la aplicación
### Frontend
```
$ cd tareas-front
$ npm install 
$ npm run start
```

### backend
```
$ cd tareas-back
$ dotnet restore
$ dotnet run
```

## Probar la aplicación
- Acceder a la url: http://localhost:5243 para acceder a la herramienta swagger del backend
- Acceder a la url: http://localhost:4200 para acceder a la web del frontend


## Convenciones:
### Git:
- Repositorio con dos ramas principales: Master y Develop
- Dos Ramas separadas para frontend (master y develop) y backend (master y develop)
- Se sigue el modelo gitflow 
- Los commits inician con alguno de los siguientes prefijos: 
    - feat: Indicar una nueva funcionalidad 
    - fix: Corregir un bug 
    - chore: Ejecutar una tarea general 
    - docs: Agregar o actualizar documentacion 
    - style: Modificar estilos 
    - refactor: Refactorizar codigo
    - test: Crear o corregir test 
    - revert: Deshacer algún cambio aplicado previamente

