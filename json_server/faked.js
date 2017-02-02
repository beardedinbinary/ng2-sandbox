var faker = require('faker');


module.exports = function(){
    var data = { service_requests: []}
    for(var i = 0; i< 100; i++ ){
        data.service_requests.push({
            id: i,
            requestType: faker.random.arrayElement(['installation', 'repair', 'site visit', 'upgrade', 'basic']),
            requestStatus: faker.random.arrayElement(['Open', 'hold', 'complete']),
            description: faker.lorem.sentence(),
            placeId: faker.random.arrayElement(['A200','A300']),
            name: faker.random.arrayElement(['Aero Tech','Metrix','Massive Dynamic', 'Umbrella Corp.']),
            created: faker.date.recent('30'),
            priority: faker.random.arrayElement(['Urgent','High','Medium','When Available'])
        });
    }
    return data
}