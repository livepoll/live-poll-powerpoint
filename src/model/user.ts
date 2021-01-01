/*
 * Copyright © Live-Poll 2020-2021. All rights reserved
 */

import {UserAttribute} from './user-attribute';

/**
 * User class.
 * Represents an user, which can have an username, an email, a password, an account state and several attributes,
 * which can be set later on individually on the server side.
 */
export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  accountState: AccountState;
  userAttributes: UserAttribute[];
}

/**
 * Account state enumeration.
 * Represents the current status of an user account.
 */
export enum AccountState {
  Activating = 0,
  Active = 1,
  Locked = 2
}
