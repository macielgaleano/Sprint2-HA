module.exports= function(app) {

    //Api key: d53f45edfe405e2764e1071223e73088-us2
    curl -X POST \
  https://server.api.mailchimp.com/3.0/lists \
  -H 'authorization: Basic <USERNAME:PASSWORD>' \
  -d '{"name":"","contact":{"company":"","address1":"","address2":"","city":"","state":"","zip":"","country":"","phone":""},"permission_reminder":"","use_archive_bar":false,"campaign_defaults":{"from_name":"","from_email":"","subject":"","language":""},"notify_on_subscribe":"","notify_on_unsubscribe":"","email_type_option":false,"visibility":"pub","double_optin":false,"marketing_permissions":false}'

    app.get('/newsletter-registro', function(req,res){
        res.render('pages/register');
    });

    app.post('/newsletter-registro', function(req,res){
        res.send('si');
    });

    app.get('/newsletter-gracias', function(req,res){
        res.send('si');
    });

    app.get('/newsletter-error', function(req,res){
        res.send('si');
    });



}