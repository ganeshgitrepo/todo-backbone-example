define(['router/app-router', 'view/app-view']
        , function(AppRouter, AppView){
    
    // Send to the server all warn or error logs
    console.level = 'warn';
    
    new AppView({root: $('#todoapp')});
    new AppRouter();
    
});