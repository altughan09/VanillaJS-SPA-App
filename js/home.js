"use strict";
import {PostPage} from './blog';

export const home = 
`
<!--   Navigation Bar   -->
<nav>
<div class="nav-wrapper teal darken-4">
    <a href="#" onclick="onNavigate('/'); return false;" class="brand-logo">VanillaJS SPA</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#" onclick="onNavigate('home'); return false;">Home</a></li>
        <li><a href="#" onclick="onNavigate('about'); return false;">About</a></li>
        <li><a href="#" onclick="onNavigate('contact'); return false;">Contact</a></li>
    </ul>
</div>
</nav><div class="section no-pad-bot orange lighten-5" id="index-banner">
<div class="container">
    <br><br>
    <h1 class="header center  orange-text text-darken-3">Home Page</h1>
    <div class="row center">
        <h5 class="header col s12 light">This is home page</h5>
    </div>
    <br><br>
</div>
</div>

<div class="container">
<div class="section">

    <!--   Blog Section   -->
    <div class="row">
        <div class="col s12 m10 offset-m1 l9 offset-l1">
                <hr>
                `+ PostPage('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'test', 'Altughan Ozengi')+`
                <hr>
                `+ PostPage('Sed molestie pulvinar elit, dapibus posuere risus sodales sit amet.', 'test', 'Altughan Ozengi')+`
                <hr>
                `+ PostPage('Fusce luctus mollis arcu ac porta. Orci varius natoque penatibus et magnis.', 'test', 'Altughan Ozengi')+`
                <hr>
                `+ PostPage('Morbi semper semper dapibus. Aenean commodo pretium nunc vel placerat.', 'test', 'Altughan Ozengi')+`
                <hr>	
		</div>
	</div>
</div>

</div>

<footer class="page-footer teal darken-4 center"></footer>`;