# cheapest-power-hour

Este proyecto es un script para calcular cuáles son las horas más baratas de electricidad para la tarifa 2.0TD en España dado un intervalo. Siempre devolverá los intervalos de horas más baratas, siendo todos ellos igual de "caros".

```shell
$ npx cheapest-power-hour -n 4 -f 10 -t 18
Los intervalos de 4 horas más baratos de las 10 a las 18 son: 
  - De las 14 horas a las 18 horas.
```

## Uso

```shell
USAGE: cheapest-power-hour [OPTION1] [OPTION2]... arg1 arg2...
The following options are supported:
  -n, --hours <ARG1>    Número de horas del intervalo.
  -f, --from <ARG1>     Desde qué hora quieres buscar el intervalo. ("1" by default)
  -t, --to <ARG1>       Hasta qué hora quieres buscar el intervalo. ("24" by default)
```
