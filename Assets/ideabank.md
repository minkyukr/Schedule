 <div class="table">
        <div class="row">
          <div class='col-md-1'>9</div>
          <div class='col-md-9'><input type='text'/></div>
          <div class='col-md-2'><button class='saveBtn'></button></div>
        </div>
        <div class="row">
          <div class='col-md-3'>10</div>
          <div class='col-md-6'><input type="text"/></div>
          <div class='col-md-3'><button class='saveBtn'></button></div>
        </div>
        <div class="row">
          <div class='col-md-3'>11</div>
          <div class='col-md-6'><input type="text"/></div>
          <div class='col-md-3'><button class='saveBtn'></button></div>
        </div>    
        <div class="row">
          <div class='col-md-3'>12</div>
          <div class='col-md-6'><input type="text"/></div>
          <div class='col-md-3'><button class='saveBtn'></button></div>
        </div>
        <div class="row">
          <div class='col-md-3'>1</div>
          <div class='col-md-6'><input type="text"/></div>
          <div class='col-md-3'><button class='saveBtn'></button></div>
        </div>
        <div class="row">
          <div class='col-md-3'>2</div>
          <div class='col-md-6'><input type="text"/></div>
          <div class='col-md-3'><button class='saveBtn'></button></div>
        </div>
        <div class="row">
          <div class='col-md-3'>3</div>
          <div class='col-md-6'><input type="text"/></div>
          <div class='col-md-3'><button class='saveBtn'></button></div>
        </div>
        <div class="row">
          <div class='col-md-3'>4</div>
          <div class='col-md-6'><input type="text"/></div>
          <div class='col-md-3'><button class='saveBtn'></button></div>
        </div>  
        <div class="row">
          <div class='col-md-3'>5</div>
          <div class='col-md-6'><input type="text"/></div>
          <div class='col-md-3'><button class='saveBtn'></button></div>
        </div>
      </div> 


        <!-- <table class="table">
            <tbody>
              <tr>
                <td scope="row" class="hour">9AM</td>
                <td><input type="text" class="description"></td>
                <td><button class="saveBtn"></button></td>
              </tr>
              <tr>
                <td scope="row" class="hour">10AM</td>
                <td><input type="text" class="description"></td>
                <td><button class="saveBtn"></button></td>
              </tr>
              <tr>
                <td scope="row" class="hour">11AM</td>
                <td><input type="text" class="description"></td>
                <td><button class="saveBtn"></button></td>
              </tr>
              <tr>
                <td scope="row" class="hour">12PM</td>
                <td><input type="text" class="description"></td>
                <td><button class="saveBtn"></button></td>
              </tr>
              <tr>
                <td scope="row" class="hour">1PM</td>
                <td><input type="text" class="description"></td>
                <td><button class="saveBtn"></button></td>
              </tr>
              <tr>
                <td scope="row" class="hour">2PM</td>
                <td><input type="text" class="description"></td>
                <td><button class="saveBtn"></button></td>
              </tr>
              <tr>
                <td scope="row" class="hour">3PM</td>
                <td><input type="text" class="description"></td>
                <td><button class="saveBtn"></button></td>
              </tr>
              <tr>
                <td scope="row" class="hour">4PM</td>
                <td><input type="text" class="description"></td>
                <td><button class="saveBtn"></button></td>
              </tr><tr>
                <td scope="row" class="hour">5PM</td>
                <td><input type="text" class="description"></td>
                <td><button class="saveBtn"></button></td>
              </tr>

            </tbody>
          </table> -->

// function settingTable (time) {
//   var targetDiv = document.querySelector('.container');
//   //selecting where to put
//   var newTable = document.createElement('tr');
//   //creating an element to put in container
//   newTable.setAttribute('id', 'tableRows')
//   //setting the attributes in order to add columns to it.
//   targetDiv.appendChild(newTable);
//   //appending it to container.

//   var targetTable = document.querySelector('#tableRows');
//   //select tableRows to add the follow columns.

//   var dateTd = document.createElement('td');
//   var inputTd = document.createElement('td');
//   var saveTd = document.createElement('td');
//   //creating tds

//   dateTd.textContent = time;
//   inputTd.textContent ='que horas?';
//   saveTd.textContent ='button';

//   dateTd.setAttribute('class', 'hour');
//   inputTd.setAttribute('class', 'description');
//   //not sure if it is the correct class target from css.
//   saveTd.setAttribute('class', 'saveBtn');

//   //setting attributes for css later on

//   tableRows.appendChild(dateTd);
//   tableRows.appendChild(inputTd);
//   tableRows.appendChild(saveTd);
//   //appending everything to tableRows
// }

// settingTable(9)