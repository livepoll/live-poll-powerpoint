/*
 * Copyright © Live-Poll 2020-2021. All rights reserved
 */

import {PollItem} from './poll-item';

/**
 * RatingItem class.
 * Represents a rating question, where the user can rate between <min> and <max> stars.
 */
export class RatingItem extends PollItem {
  minStars: number;
  maxStars: number;
}
