import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  //复用 AuthService.signUp
  @Mutation(() => String)
  async signup(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    await this.authService.signUp({ username, password });
    return '注册成功';
  }

  //复用 AuthService.signIn
  @Mutation(() => String)
  async signin(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    const result = await this.authService.signIn({ username, password });
    return result.accessToken;
  }

}