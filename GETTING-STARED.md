Using Mustache, Gulp, Sass & Foundation

1.  Create empty files (index.html and app.js).
2.  Create node_modules/directory, as well as anything else we want to keep organized.
3.  How do we set up Gulp?
        - Install gulp: (npm install gulp)
        - Create a gulpfile.js
        - Set up tasks

3.  For Sass: (1) sass --watch, (2) gulp-sass (using gulp to run sass)
4.  Create .gitignore (public & node modules)
5.  Install Foundation, Mustache
    - npm install foundation-sites (installs all the sass)
    <!---add <script> tag to index.html for mustache-->
6.  Put import/includes in scss file for foundation:
    @import '../node_modules/foundation-sites-scss/foundation'; //because its in a scss folder
<!--
    @include foundation-global-styles;
    @include foundation-grid;-->
8.  Added script line for mustache:  
    - https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min.js"

** to use in future:
1. create  anew repository
2. git clone its
3.get inside the repository
4.  cp -r ~/Tiy/starter/* .  ==>asterix means to copy all the files in the folder, dot mean to current directory
5. ls  ==> see all the files populated in your new repository
