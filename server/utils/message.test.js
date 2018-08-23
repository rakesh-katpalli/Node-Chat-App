var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Dana';
        var text = 'Some Message';
        var message = generateMessage(from, text);
        
        expect(typeof message.createdAt).toBe('number'); 
        expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location object', () => {
        var from = 'Dana';
        var latitude = 23;
        var longitude = 44;
        var url = `https://www.google.com/maps?q=23,44`;
        var message = generateLocationMessage(from, latitude, longitude);
        
        expect(typeof message.createdAt).toBe('number'); 
        expect(message).toMatchObject({from, url});
    });
});