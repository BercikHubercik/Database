const { Given, When, Then, AfterAll, After, Before, BeforeAll} = require('@cucumber/cucumber');
const axios = require('axios');
const chai = require('chai');

const sshow = (obj) => {
    let tk = obj ? Object.keys(obj) : null;
    let ck =  (obj && obj.ctx ) ? Object.keys(obj.ctx) : null;
    console.log("This Keys: ", tk ? tk.join() : null);
    console.log("Ctx Keys:  ", ck ? ck.join() : null);
 }


 const sendPostRequest = async (url, body) => {
    try {
        const resp = await axios.post(url, body);
        console.log(resp.data);
        console.log(resp.status);
        return resp;
    } catch (err) {
        console.error(err.message);
        return 
    }
};

BeforeAll(function () {
    let dt = (new Date()).toISOString();
    if(this) this[dt] = "BeforeAll";
});

AfterAll(function () {
    let dt = (new Date()).toISOString();
    if(this) this[dt] = "AfterAll";
    //if(this) sshow(this);
    //this.show();
});

Before(function () {
    let dt = (new Date()).toISOString();
    if(this) this[dt] = "Before";
});

After(function () {
    let dt = (new Date()).toISOString();
    if(this) this[dt] = "After";
    //if(this) sshow(this);
});


Given('I use db at url {}', function (url) {
    let dt = (new Date()).toISOString();
    if(this) this[dt] = "I use db";
    this.url = url;
    });

When('I add item {} of type {} with id {int} and body {}', async function(pk, type, id, objJSON){
    let dt = (new Date()).toISOString();
    if(this) this[dt] = "I add item";
    const obj = JSON.parse(objJSON); 
    const newPost = {
        db_pk: pk,
        db_type: type,
        db_id: id,
        db_obj: obj
    };
    const url = this.url + '/add';
    console.log(`url: ${url}`);
    let resp = await sendPostRequest(url, newPost);
    chai.assert(resp);
    //assert.(resp);
    this.status = resp?.status;
});

Then('I receive status {int}', function (status) {
    let dt = (new Date()).toISOString();
    if(this) this[dt] = "I receive";
    chai.assert.deepEqual(this.status, status);

  });


  