/**
 * Created by Andy on 8/26/16.
 */

var Scheduler = require('../lib/scheduler');

var task = new Scheduler(
    {
        host: '127.0.0.1',
        port: 6379
        // password: xxx
    }
);

var key = 'django_gao_test',
    cronTime = '0 */1 * * * *';

task.schedule({
    key: key,
    cronTime: cronTime,
    handler: function() {
        console.log('execute handle ' + new Date().toString());

        // for cron job test
        task.reschedule({
                key: key,
                cronTime: cronTime,
            },
            function(error) {
                if(error) {
                    console.log('callback error' + error);
                    throw error;
                }
            });
    }
}, function(error) {
    if(error) {
        console.log('callback error '+ new Date().toString());
        throw error;
    }
});


task.addHandler({
    key: key,
    handler: function() {
        console.log('Add handler test '+ new Date().toString());
    }
});
