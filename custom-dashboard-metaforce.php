<?php /* Template Name: Dashboard Metaforce Page */ ?>
<?php $page_title = "Dashboard Metaforce"; ?>
<?php require('custom-templates/header.php'); ?>
<link href='https://fonts.googleapis.com/css?family=Roboto:300,100' rel='stylesheet' type='text/css'>

<!-- BEGIN -->
<div class="ui stackable centered padded row grid">
  
  <!-- Side Menu Company ABC Dashboard -->
  <div id="abcMenu" class="three wide column">
    
    <div id="logoBox" >
      <h1 id="logoHeader" class="ui header">
        Company ABC
        <div id="logoSubHeader" class="sub header">Alpha Beta</div>
      </h1>
      <img class="ui small circular centered image" src="https://t1.ftcdn.net/jpg/00/72/78/94/500_F_72789437_BBRVdkiATdm2mR2iblccRm5HtrXHlJnm.jpg">
      <p></p>
      
    </div>
    
    <div class="ui divider"></div>
      <p id="demoP">Demo Account</p>
    <div class="ui divider"></div>
    
    <div id="abcVertical" class="ui secondary vertical menu">
    <a class="active item">
    <i class="inverted file outline icon"></i>Earning Report
    </a>
    <a class="item">
    <i class="inverted setting icon"></i>Settings
    </a>
    </div>
    
  </div>
  <!-- /Side Menu Company ABC Dashboard -->

  <!-- Dashboard Content -->
  <div class="thirteen wide column">
    
      <div class="ui secondary  menu">
        <a class="active item">
          Yearly
        </a>
        <a class="item">
          Monthly
        </a>
        <a class="item">
          Daily
        </a>
        <div class="right menu">
          <div class="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search...">
              <i class="search link icon"></i>
            </div>
          </div>
          <a class="ui item">
            Logout
          </a>
        </div>
      </div>
    
    <div class="ui section divider"></div>
    
    <div class="ui segments">
      
      <div  class="ui horizontal segments">
        
        <div  class="ui segment">
          <div id="pieChartContainer"></div>
        </div>
        
        <div  style="height:325px;" class="ui segment">
          <div id="colChartContainer"></div>
        </div>
        
        <div class="ui segment">
          <div id="lineChartContainer"></div>
        </div>
        
      </div>
      
    </div>
    
    <div class="ui horizontal segments">
         <div class="ui segment">
          <table id="customTableColor" class="ui inverted teal table">
            <thead>
              <tr>
                <th></th>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
                <th>Q4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2013</td>
                <td>8.2</td>
                <td>8</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>2014</td>
                <td>3.2</td>
                <td>3</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>2015</td>
                <td>4.7</td>
                <td>4</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>5.4</td>
                <td>4.6</td>
                <td>2.3</td>
                <td>3.5</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>9.7</td>
                <td>8.3</td>
                <td>4</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- /Table -->  
  </div>
  <!-- /Dashboard Content -->
  
</div>
<!-- END -->

<?php require('custom-templates/footer.php'); ?>
