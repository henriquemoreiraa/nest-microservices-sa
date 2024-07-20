import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AUTH_SERVICE } from '../constants/services';
import { tap, catchError } from 'rxjs/operators';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(AUTH_SERVICE) private authClient: ClientProxy) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const authentication = this.getAuthentication(context).split(' ')[1].trim();

    return this.authClient
      .send('validate_user', {
        Authentication: authentication,
      })
      .pipe(
        tap((res) => {
          this.addUser(res, context);
        }),
        catchError(() => {
          throw new UnauthorizedException();
        }),
      );
  }

  private getAuthentication(context: ExecutionContext) {
    let authentication: string;

    if (context.getType() === 'rpc') {
      authentication = context.switchToRpc().getData().Authentication;
    } else if (context.getType() === 'http') {
      authentication = context.switchToHttp().getRequest()
        .headers.authorization;
    }

    if (!authentication) {
      throw new UnauthorizedException();
    }
    return authentication;
  }

  private addUser(user: any, context: ExecutionContext) {
    if (context.getType() === 'rpc') {
      context.switchToRpc().getData().user = user;
    } else if (context.getType() === 'http') {
      context.switchToHttp().getRequest().user = user;
    }
  }
}
