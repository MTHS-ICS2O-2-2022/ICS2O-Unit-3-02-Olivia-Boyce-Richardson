// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'

function calculate () {
  // input
  const length = parseInt(document.getElementById('length').value)
  const width = parseInt(document.getElementById('width').value)
  const height = parseInt(document.getElementById('height').value)

  // process
  const volume = (height * width * length) / 3

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' mm³.'
}