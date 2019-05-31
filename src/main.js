import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { PersonProfile } from '../src/galacticAge.js';




$(document).ready(function() {
  $("form").on("submit", function(event)  {
    event.preventDefault();
    let planet = $("form#planet").val();
    let bday = $("form#bday").val();
    let newPerson = new PersonProfile(planet, bday)
    $("#output").html(newPerson.age);
    $("#output").html(newPerson.lifeExpectancy);
  })

});
