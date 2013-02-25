Basic HTML for the plugin:

<div class="tab-wrapper">
    <ul>
        <li><a href="#tab1">Title tab 1</a></li>
        <li><a href="#tab2">Title tab 2</a></li>
        <li><a href="#tab3">Title tab 3</a></li>
    </ul>
    
    <div id="tab1">
        <!-- tab1 code -->
    </div>
    <div id="tab2">
        <!-- tab2 code -->
    </div>
    <div id="tab3">
        <!-- tab3 code -->
    </div>
</div>

You can use many tabs you want inside a wrapper div.

To call the plugin:

$('.tab-wrapper').easytabs();
