const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3000;

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.listen(3000);

const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
    apiKey: 'd53f45edfe405e2764e1071223e73088-us2',
    server: 'us2',
});

async function callPing() {
const response = await mailchimp.ping.get();
// console.log(response);
}

callPing();

const run = async () => {
const response = await mailchimp.lists.getListMembersInfo("04181bbdf1");
// console.log(response);
};

run();

require('./routes')(app);