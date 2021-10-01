# cheapest-power-hour

Este proyecto es un script para calcular cuáles son las horas más baratas de electricidad para la tarifa 2.0TD en España dado un intervalo. Siempre devolverá los intervalos de horas más baratas, siendo todos ellos igual de "caros".

Para ejecutar el script sólo tienes que ejecutar:

```shell
npx cheapest-power-hour -n 4
```

La opción `-n` es el número de horas para el intervalo. Un ejemplo de lo que saldría por la pantalla sería:
```shell
$ npx cheapest-power-hour -n 4
Los intervalos de 4 horas más baratos son: 
  - De las 1 horas a las 5 horas.
  - De las 2 horas a las 6 horas.
  - De las 3 horas a las 7 horas.
  - De las 4 horas a las 8 horas.
```
