import { InMemoryDbService }    from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let users = [
            {id: 11, firstName: 'Mr. Nice', lastName: 'Roll', email: 'nice@ad.com', userName: 'nice', password: 'nice'},
            {id: 12, firstName: 'Mr. Nice 2', lastName: 'Roll 2', email: 'nice2@ad.com', userName: 'nice2', password: 'nice2'},
            {id: 13, firstName: 'Mr. Nice 3', lastName: 'Roll 3', email: 'nice3@ad.com', userName: 'nice3', password: 'nice3'},
            {id: 14, firstName: 'Mr. Nice 4', lastName: 'Roll 4', email: 'nice4@ad.com', userName: 'nice4', password: 'nice4'}
        ];

        return {users : users};
    }
}