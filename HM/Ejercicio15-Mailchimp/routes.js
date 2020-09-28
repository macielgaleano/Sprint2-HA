module.exports= function(app) {

    app.get('/newsletter-registro', function(req,res){
        res.render('pages/register');
    });

    const validateData = async(req,res,next) => {
        if (await req.body.name) {
            console.log('OK-' + req.body.name);
        }
        if (await req.body.surname) {
            console.log('OK-' + req.body.name);
        }
        if (await req.body.email) {
            console.log('OK-' + req.body.name);
        }
    }

    app.post('/newsletter-registro', validateData, function(req,res){
        console.log(req.body.name, req.body.surname, req.body.email);

        const mailchimp = require('@mailchimp/mailchimp_marketing');

        mailchimp.setConfig({
            apiKey: 'd53f45edfe405e2764e1071223e73088-us2',
            server: 'us2',
        });

        const run = async () => {
        const response = await mailchimp.lists.addListMember("04181bbdf1", {
            email_address: req.body.email,
            status: "subscribed",
        });
        console.log(response);
        };

        run();
        res.render('pages/register');
    });

    app.get('/newsletter-gracias', function(req,res){
        res.send('Gracias!! 😄');
    });

    app.get('/newsletter-error', function(req,res){
        res.send('PIUM Error!! ❌');
    });

    



}