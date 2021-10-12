#!/usr/bin/env node
'use strict'
const { getopt } = require('stdio')
const { Logger } = require('../build/core/infrastructure/logger')
const { HourController } = require('../build/hour/infrastructure')

const { hours, from, to } = getopt({
  hours: {
    key: 'n',
    args: 1,
    description: 'Número de horas del intervalo.'
  },
  from: {
    key: 'f',
    args: 1,
    description: 'Desde qué hora quieres buscar el intervalo.',
    default: 1
  },
  to: {
    key: 't',
    args: 1,
    description: 'Hasta qué hora quieres buscar el intervalo.',
    default: 24
  }
})

new HourController(new Logger()).exec({
  intervalLength: Number(hours),
  from: Number(from),
  to: Number(to)
}).catch((err) => {
  console.error(err.toString())
  console.error('Error inesperado. Mira encima de este mensaje para saber más.')
})
