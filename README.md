# ng2-api

Angular2 API services - work in progress

## Install

    npm i --save ng2-api

## Import

    import {Api, ApiResource} from 'ng2-api';

## Usage

    @Injectable()
    export class UsersResource extends ApiResource<User> {
      constructor(public api: Api) {
        super(api, 'users');
      }
    }
    
## License

MIT
