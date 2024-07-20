// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-jwt';
// import { UserRepository } from '../user.repository';

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly userRepository: UserRepository) {
//     super({ usernameField: 'username' });
//   }

//   async validate(username: string, password: string) {
//     return this.userRepository.validateUser(username, password);
//   }
// }
