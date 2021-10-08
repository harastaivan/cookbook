import { createSelector } from 'reselect';
import * as Petrus from '@ackee/petrus';
import type { PetrusEntitiesState, User } from '../../types';

export const authUserSelector = createSelector(Petrus.entitiesSelector, (auth: PetrusEntitiesState) => auth.user);

export const userEmailSelector = createSelector(authUserSelector, (user: User) => user.email ?? '');
