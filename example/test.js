/**
 * Created by Andy on 8/26/16.
 */

var Scheduler = require('../lib/scheduler');

var task = new Scheduler();

task.schedule({
    key: 'django_gao_test',
    cronTime: '0 */1 * * * *',
    handler: function() {
        console.log('execute handle ' + new Date().toString());

        task.reschedule({
                key: 'django_gao_test',
                cronTime: '0 */1 * * * *',
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
