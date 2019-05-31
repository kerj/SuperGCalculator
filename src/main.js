import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ageInMillie } from '../src/galacticAge.js';
$(document).ready(function() {
  var showME = ageInMillie('1992-5-1');
  $("#output").html(showME);
});
