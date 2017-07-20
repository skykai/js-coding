/**
 * Comments: //
 * Created by wanghuangkai on 17/7/20.
 */
exports.define = {
    topic: 'my export',
    desc: 'this is other way to define ',
    sayHello: function() {
        console.log('topic ' + this.topic + this.desc);
    }
}