#!/usr/bin/env node
'use strict'
const { getopt } = require('stdio')
const { Logger } = require('../build/core/infrastructure/logger')
const { HourController } = require('../build/hour/infrastructure')

const { hours } = getopt({
  hours: { key: 'n', args: 1, description: 'Número de horas del intervalo.' }
})

new HourController(new Logger()).exec(Number(hours)).catch((err) => {
  console.error(err.toString())
  console.error('Error inesperado. Mira encima de este mensaje para saber más.')
})
