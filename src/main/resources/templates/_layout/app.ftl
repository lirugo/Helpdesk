<#macro content>
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Helpdesk</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
        <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
    <div id="app">

        <#nested>

        <br/>
        <br/>
        <a href="/main">Main</a>
        <br/>
        <a href="/login">Login page</a>
        <br/>
        <a href="/registration">Registration page</a>
    </div>

    <#--<script src="http://localhost:8080/main.js"></script>-->
    </body>
    </html>
</#macro>