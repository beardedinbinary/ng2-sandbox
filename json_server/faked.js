var faker = require('faker');

var randomName = faker.name.findName();
var randomEmail = faker.internet.email();
var randomEmail = faker.internet.email();

//requests
/*
    requestID = string ['12345', '12345asd']
    requestType = faker.random.arrayElement(['installation', 'repair', 'site visit', 'upgrade', 'basic']
    requestStatus = faker.random.arrayElement(['Open', 'hold', 'complete']);
    description = faker.lorum.sentence();
    placeId = faker.random.arrayElement(['A200']);
    Name = string ['Aero Tech']
    created = faker.date.recent('30');
*/