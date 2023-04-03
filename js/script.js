// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const height = parseInt(document.getElementById('height of the triangle').value)
  const base = parseInt(document.getElementById('base of the triangle').value)

  // process
  const area = height / 2 * base

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}